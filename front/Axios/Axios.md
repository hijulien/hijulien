## 示例

```
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs'

// 返回res.data的interface
export interface IResponse {
    code: number | string;
    data: any;
    msg: string;
}

let http: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:4523/mock/826687',
    timeout: 5000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

// axios实例拦截响应
http.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.headers.authorization) {
            localStorage.setItem('app_token', response.headers.authorization);
        } else {
            if (response.data && response.data.token) {
                localStorage.setItem('app_token', response.data.token);
            }
        }

        if (response.status === 200) {
            return response;
        } else {
            showMessage(response.status);
            return response;
        }
    },
    // 请求失败
    (error: any) => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage(response.status);
            return Promise.reject(response.data);
        } else {
            message.error('网络连接异常,请稍后再试!');
        }
    }
);

// axios实例拦截请求
http.interceptors.request.use(
    (config: AxiosRequestConfig<any>) => {
        const token = localStorage.getItem('app_token');
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
)

export default http

```

## 拦截器处理

拦截器不要返回数据，依然返回 AxiosResponse 对象

网上的文章都让你用 拦截器 直接返回数据，这种作法其实是非常不妥的，这样会让你后续的功能很难进行拓展。

不推荐的做法

```
import Axios from  axios 

const client = Axios.create({
  // 你的配置
})

client.interceptors.response.use(response => {
  // 网上的做法都是让你直接返回数据
  // 这导致后续的一些功能难以支持
  return response.data
})

export default client
复制代码
```

推荐的做法

推荐使用函数代替拦截器

```
import Axios, { AxiosRequestConfig } from  axios 

const client = Axios.create({
  // 你的配置
})

export async function request(url: string, config?: AxiosRequestConfig) {
  const response = await client.request({ url, ...config })
  const result = response.data
  // 你的业务判断逻辑
  return result
}

export default client
复制代码
```

到这里可能有人会说太麻烦，请稍等，继续往下看。

## **为你的请求添加拓展**

很多时候，我们的开发流程是这样的：

```
发送请求 => 拿到数据 => 渲染内容
复制代码
```

但可惜的是，这只是理想情况，在某些特殊情况下，你还是需要处理异常或额外的支持，如：

- 当请求失败，希望能够自动重试3次以上再失败
- 分页数据中，当新的请求发出，自动中断上一次的请求
- 第三方提供 jsonp 接口，而你又只能使用静态页时 (ps: Axios 不支持 jsonp)
- 更多

当发送以上场景时，你只能默默的写代码支持，但如果你不拦截 Axios 的响应，那就可以使用开源社区提供的方案。

## **支持请求重试**

安装 axios-retry[1]，可以让你的 Axios 支持自动重试的功能

```
import Axios, { AxiosRequestConfig } from  axios 
import axiosRetry from  axios-retry 

const client = Axios.create({
  // 你的配置
})

// 安装 retry 插件
// 当请求失败后，自动重新请求，只有3次失败后才真正失败
axiosRetry(client, { retries: 3 })

export async function request(url: string, config?: AxiosRequestConfig) {
  const response = await client.request({ url, ...config })
  const result = response.data
  // 你的业务判断逻辑
  return result
}

// 只有3次失败后才真正失败
const data = request( http://example.com/test )
复制代码
```

PS: axios-retry 插件支持配置单个请求

## **支持 jsonp 请求**

安装 axios-jsonp[2]，可以让你的 Axios 支持 jsonp 的功能。

```
import Axios, { AxiosRequestConfig } from  axios 
import jsonpAdapter from  axios-jsonp 

const client = Axios.create({
  // 你的配置
})

export async function request(url: string, config?: AxiosRequestConfig) {
  const response = await client.request({ url, ...config })
  const result = response.data
  // 你的业务判断逻辑
  return result
}

export function jsonp(url: string, config?: AxiosRequestConfig) {
  return request(url, { ...config, adapter: jsonpAdapter })
}

// 你现在可以发送 jsonp 的请求了
const data = jsonp( http://example.com/test-jsonp )
复制代码
```

## **支持 URI 版本控制**

有开发 Web API 经验的人都会遇到一个问题，如果 API 出现重大变更的时候，如何保证旧版可用的情况下，发布新的 API?

这种情况在服务端开发场景中，其实并不罕见，尤其是对外公开的 API，如: 豆瓣 API (已失效)。

当前主流的支持 3 种类型的版本控制：

|         类型          |               描述                |
| :-------------------: | :-------------------------------: |
|    URI Versioning     | 版本将在请求的 URI 中传递（默认） |
|   Header Versioning   |     自定义请求标头将指定版本      |
| Media Type Versioning |    Accept 请求的标头将指定版本    |

URI 版本控制 是指在请求的 URI 中传递的版本，例如 https://example.com/v1/route 和 https://example.com/v2/route。

```
import Axios, { AxiosRequestConfig } from  axios 

const client = Axios.create({
  // 你的配置
})

client.interceptors.request.use(config => {
  // 最简单的方案
  config.url = config.url.replace( {version} ,  v1 )
  return config
})

// GET /api/v1/users
request( /api/{version}/users )
复制代码
```

Header 和 Media Type 模式，可以参考如下文章来实现

- 实现 Web API Versioning 功能[3]
- nest versioning[4]

## **保持请求唯一**

在一个支持翻页的后台表格页，一个用户击翻页按钮，请求发出等待响应，但用户这时点击搜索，需要重新获取数据，支持你的情况可能是：

- 翻页请求先回，搜索数据再回，数据显示正常
- 搜索数据先回，翻页数据再回，数据显示异常（通常在负载均衡的场景中出现）

为此，你希望能够自动取消上一次请求，于是你看了 Axios 的取消请求，但好多地方都需要用到，于是可以将这个功能封装成独立的函数。

```
import Axios from  axios 

const CancelToken = Axios.CancelToken

export function withCancelToken(fetcher) {
  let abort

  function send(data, config) {
    cancel() // 主动取消

    const cancelToken = new CancelToken(cancel => (abort = cancel))
    return fetcher(data, { ...config, cancelToken })
  }

  function cancel(message =  abort ) {
    if (abort) {
      abort(message)
      abort = null
    }
  }

  return [send, cancel]
}
复制代码
```

## 使用

```
function getUser(id: string, config?: AxiosRequestConfig) {
  return request(`api/user/${id}`, config)
}

// 包装请求函数
const [fetchUser, abortRequest] = withCancelToken(getUser)

// 发送请求
// 如果上一次请求还没回来，会被自动取消
fetchUser( 1000 )

// 通常不需要主动调用
// 但可以在组件销毁的生命周期中调用
abortRequest()
复制代码
```

这样不需要自动取消的时候，直接使用原函数即可，也不会影响原函数的使用

## **后语**

Axios 封装其实还有很多事情可以做，比如 全局错误处理 (一样不能影响正常请求) 等，封装也不应该只是利用拦截器直接返回数据。

另外请求模块应该保持独立，推荐拓展 AxiosRequestConfig 或做成一个个独立的函数，提供给外部调用，方便做成一个独立的 HTTP 模块。