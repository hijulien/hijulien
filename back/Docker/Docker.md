# Docker

## Docker为什么出现

一款产品从开发到上线，从操作系统，到运行环境，再到应用配置。作为开发+运维之间的协作我们需要关心很多东西，这也是很多互联网公司都不得不面对的问题，特别是各种版本的迭代之后，不同版本环境的兼容，对运维人员是极大的考验！环境配置如此麻烦，换一台机器，就要重来一次，费力费时。很多人想到，能不能从根本上解决问题，软件可以带环境安装？也就是说，安装的时候，把原始环境一模一样地复制过来。解决开发人员说的“ 在我的机器上可正常工作”的问题。之前在服务器配置一个应用的运行环境，要安装各种软件，就拿一个基本的工程项目的环境来说吧，Java/Tomcat/MySQL/JDBC驱动包等。安装和配置这些东西有多麻烦就不说了，它还不能跨平台。假如我们是在 Windows 上安装的这些环境，到了 Linux 又得重新装。况且就算不跨操作系统，换另一台同样操作系统的服务器，要移植应用也是非常麻烦的。传统上认为，软件编码开发/测试结束后，所产出的成果即是程序或是能够编译执行的二进制字节码文件等（Java为例）。而为了让这些程序可以顺利执行，开发团队也得准备完整的部署文件，让维运团队得以部署应用程式，开发需要清楚的告诉运维部署团队，用的全部配置文件+所有软件环境。不过，即便如此，仍然常常发生部署失败的状况。

Docker之所以发展如此迅速，也是因为它对此给出了一个标准化的解决方案。

Docker镜像的设计，使得Docker得以打破过去「程序即应用」的观念。通过Docker镜像 ( images ) 将应用程序所需要的系统环境，由下而上打包，达到应用程序跨平台间的无缝接轨运作。



![](../../static/img/docker/image2.png)

Docker的思想来自于集装箱，集装箱解决了什么问题？在一艘大船上，可以把货物规整的摆放起来。并且各种各样的货物被集装箱标准化了，集装箱和集装箱之间不会互相影响。那么我就不需要专门运送水果的船和专门运送化学品的船了。只要这些货物在集装箱里封装的好好的，那我就可以用一艘大船把他们都运走。

docker就是类似的理念。

## 历史

2010年，几个搞IT的年轻人，在美国旧金山成立了一家名叫“dotCloud”的公司。

这家公司主要提供基于PaaS的云计算技术服务。具体来说，是和LXC有关的容器技术。

后来，dotCloud公司将自己的容器技术进行了简化和标准化，并命名为——**Docker**。

Docker技术诞生之后，并没有引起行业的关注。而dotCloud公司，作为一家小型创业企业，在激烈的竞争之下，也步履维艰。

正当他们快要坚持不下去的时候，脑子里蹦出了“开源”的想法。

什么是“开源”？开源，就是开放源代码。也就是将原来内部保密的程序源代码开放给所有人，然后让大家一起参与进来，贡献代码和意见。

有的软件是一开始就开源的。也有的软件，是混不下去，创造者又不想放弃，所以选择开源。自己养不活，就吃“百家饭”嘛。

2013年3月，dotCloud公司的创始人之一，Docker之父，28岁的**Solomon Hykes**正式决定，将Docker项目开源。

不开则已，一开惊人。

越来越多的IT工程师发现了Docker的优点，然后蜂拥而至，加入Docker开源社区。

Docker的人气迅速攀升，速度之快，令人瞠目结舌。

开源当月，Docker 0.1 版本发布。此后的每一个月，Docker都会发布一个版本。到2014年6月9日，

Docker 1.0 版本正式发布。

此时的Docker，已经成为行业里人气最火爆的开源技术，没有之一。甚至像Google、微软、Amazon、

VMware这样的巨头，都对它青睐有加，表示将全力支持。

Docker和容器技术为什么会这么火爆？说白了，就是因为它“轻”。

在容器技术之前，业界的网红是**虚拟机**。虚拟机技术的代表，是**VMWare**和**OpenStack**。相信很多人都用过虚拟机。虚拟机，就是在你的操作系统里面，装一个软件，然后通过这个软件，再模拟一台甚至多台“子电脑”出来。

在“子电脑”里，你可以和正常电脑一样运行程序，例如开QQ。如果你愿意，你可以变出好几个“子电脑”，里面都开上QQ。“子电脑”和“子电脑”之间，是**相互隔离**的，互不影响。

虚拟机属于虚拟化技术。而Docker这样的容器技术，也是虚拟化技术，属于**轻量级的虚拟化**。

虚拟机虽然可以隔离出很多“子电脑”，但占用空间更大，启动更慢，虚拟机软件可能还要花钱（例如VMWare）。

而容器技术恰好没有这些缺点。它不需要虚拟出整个操作系统，只需要虚拟一个小规模的环境（类似“沙 箱”）。

它启动时间很快，几秒钟就能完成。而且，它对资源的利用率很高（一台主机可以同时运行几千个Docker容器）。此外，它占的空间很小，虚拟机一般要几GB到几十GB的空间，而容器只需要MB级甚至KB级。正因为如此，容器技术受到了热烈的欢迎和追捧，发展迅速。

## docker理念

Docker是基于Go语言实现的云开源项目。

Docker的主要目标是“Build，Ship and Run Any App , Anywhere”，也就是通过对应用组件的封装、分发、部署、运行等生命周期的管理，使用户的APP（可以是一个WEB应用或数据库应用等等）及其运行环境能够做到“一次封装，到处运行”。

Linux 容器技术的出现就解决了这样一个问题，而 Docker 就是在它的基础上发展过来的。将应用运行在Docker 容器上面，而 Docker 容器在任何操作系统上都是一致的，这就实现了跨平台、跨服务器。只需要一次配置好环境，换到别的机子上就可以一键部署好，大大简化了操作。

## docker作用

虚拟机（virtual machine）就是带环境安装的一种解决方案。
它可以在一种操作系统里面运行另一种操作系统，比如在Windows 系统里面运行Linux 系统。应用程序对此毫无感知，因为虚拟机看上去跟真实系统一模一样，而对于底层系统来说，虚拟机就是一个普通文件，不需要了就删掉，对其他部分毫无影响。这类虚拟机完美的运行了另一套系统，能够使应用程序，操作系统和硬件三者之间的逻辑不变。

![../](../../static/img/docker/image3.png)

虚拟机的缺点：

1、资源占用多
2、冗余步骤多
3 、启动慢

## 容器虚拟化技术

由于前面虚拟机存在这些缺点，Linux 发展出了另一种虚拟化技术：Linux 容器（Linux Containers，缩写为 LXC）。
Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离。有了容器，就可以将软件运行所需的所有资源打包到一个隔离的容器中。容器与虚拟机不同，不需要捆绑一整套操作系统，只需要软件工作所需的库资源和设置。系统因此而变得高效轻量并保证部署在任何环境中的软件都能始终如一地运行。

![](../../static/img/docker/image4.png)

 Docker 和传统虚拟化方式的不同之处：

(1) 传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；

(2) 而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。

(3) 每个容器之间互相隔离，每个容器有自己的文件系统 ，容器之间进程不会相互影响，能区分计算资源。

## 开发/运维（DevOps）

### 更快速的应用交付和部署:

传统的应用开发完成后，需要提供一堆安装程序和配置说明文档，安装部署后需根据配置文档进行繁杂的配置才能正常运行。Docker化之后只需要交付少量容器镜像文件，在正式生产环境加载镜像并运行即可，应用安装配置在镜像里已经内置好，大大节省部署配置和测试验证时间。

### 更便捷的升级和扩缩容：

随着微服务架构和Docker的发展，大量的应用会通过微服务方式架构，应用的开发构建将变成搭乐高积木一样，每个Docker容器将变成一块“积木”，应用的升级将变得非常容易。当现有的容器不足以支撑业务处理时，可通过镜像运行新的容器进行快速扩容，使应用系统的扩容从原先的天级变成分钟级甚至秒级。

### 更简单的系统运维：

应用容器化运行后，生产环境运行的应用可与开发、测试环境的应用高度一致，容器会将应用程序相关的环境和状态完全封装起来，不会因为底层基础架构和操作系统的不一致性给应用带来影响，产生新的BUG。当出现程序异常时，也可以通过测试环境的相同容器进行快速定位和修复。

### 更高效的计算资源利用：

Docker是内核级虚拟化，其不像传统的虚拟化技术一样需要额外的Hypervisor [管理程序] 支持，所以在一台物理机上可以运行很多个容器实例，可大大提升物理服务器的CPU和内存的利用率。

## 学习途径

Docker官网：http://www.docker.com
Docker中文网站：https://www.docker-cn.com
Docker Hub官网：https://hub.docker.com （仓库）

## docker组成

### Docker的架构图

![](../../static/img/docker/image9.png)

### 镜像（image）：

Docker 镜像（Image）就是一个只读的模板。镜像可以用来创建 Docker 容器，一个镜像可以创建很 多容器。 就好似 Java 中的 类和对象，类就是镜像，容器就是对象！

### 容器（container）：

Docker 利用容器（Container）独立运行的一个或一组应用。容器是用镜像创建的运行实例。

它可以被启动、开始、停止、删除。每个容器都是相互隔离的，保证安全的平台。

可以把容器看做是一个简易版的 Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等） 和运行在其中的应用程序。

容器的定义和镜像几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写的。

### 仓库（repository）：

仓库（Repository）是集中存放镜像文件的场所。

仓库(Repository)和仓库注册服务器（Registry）是有区别的。仓库注册服务器上往往存放着多个仓 库，每个仓库中又包含了多个镜像，每个镜像有不同的标签（tag）。

仓库分为公开仓库（Public）和私有仓库（Private）两种形式。

最大的公开仓库是 Docker Hub(https://hub.docker.com/)，存放了数量庞大的镜像供用户下载。 国内的公开仓库包括阿里云 、网易云等。

## docker run hello-world 工作流程

![](../../static/img/docker/image12.png)

## Docker是怎么工作的

Docker是一个Client-Server结构的系统，Docker守护进程运行在主机上， 然后通过Socket连接从客户端访问，守护进程从客户端接受命令并管理运行在主机上的容器。 容器，是一个运行时环境，就是我们前面说到的集装箱。

![](../../static/img/docker/image13.png)

## Docker为什么比VM 快

1. docker有着比虚拟机更少的抽象层。由亍docker不需要Hypervisor实现硬件资源虚拟化,运行在docker容器上的程序直接使用的都是实际物理机的硬件资源。因此在CPU、内存利用率上docker将会在效率上有明显优势。
2. docker利用的是宿主机的内核,而不需要Guest OS。因此,当新建一个容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。仍而避免引寻、加载操作系统内核返个比较费时费资源的过程,当新建一个虚拟机时,虚拟机软件需要加载Guest OS,返个新建过程是分钟级别的。而docker由于直接利用宿主机的操作系统,则省略了返个过程,因此新建一个docker容器只需要几秒钟。



![](../../static/img/docker/image14.png)

### 小结：

需要正确的理解仓储/镜像/容器这几个概念 :

1. Docker 本身是一个容器运行载体或称之为管理引擎。我们把应用程序和配置依赖打包好形成一个可交付的运行环境，这个打包好的运行环境就是image镜像文件。只有通过这个镜像文件才能生成 Docker 容器。image 文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。
2. image 文件生成的容器实例，本身也是一个文件，称为镜像文件。
3. 一个容器运行一种服务，当我们需要的时候，就可以通过docker客户端创建一个对应的运行实例，
   也就是我们的容器
4. 至于仓库，就是放了一堆镜像的地方，我们可以把镜像发布到仓库中，需要的时候从仓库中拉下来
   就可以了。

# Docker常用命令

## 帮助命令

```
docker version # 显示 Docker 版本信息。

docker info # 显示 Docker 系统信息，包括镜像和容器数。

docker --help # 帮助
```

## 镜像命令

### docker images

```
# 列出本地主机上的镜像
[root@kuangshen ~]# docker images 
REPOSITORY TAG IMAGE ID CREATED SIZE 
hello-world latest bf756fb1ae65 4 months ago 13.3kB 

# 解释 
REPOSITORY 镜像的仓库源 
TAG 镜像的标签 
IMAGE ID 
镜像的ID CREATED 镜像创建时间
SIZE 镜像大小 

# 同一个仓库源可以有多个 TAG，代表这个仓库源的不同版本，我们使用REPOSITORY：TAG 定义不同 的镜像，如果你不定义镜像的标签版本，docker将默认使用 lastest 镜像！ 

# 可选项 
-a： 列出本地所有镜像 
-q： 只显示镜像id 
--digests： 显示镜像的摘要信息
```

### docker search

```
# 搜索镜像 
[root@kuangshen ~]# docker search mysql 
NAME DESCRIPTION STARS OFFICIAL mysql MySQL is a widely used, open-source relation… 9484 [OK] 

# docker search 某个镜像的名称 对应DockerHub仓库中的镜像 

# 可选项 
--filter=stars=50 ： 列出收藏数不小于指定值的镜像。
```

### docker pull

```
# 下载镜像 
[root@kuangshen ~]# docker pull mysql 
Using default tag: latest # 不写tag，默认是latest 
latest: Pulling from library/mysql 
54fec2fa59d0: Already exists # 分层下载 
bcc6c6145912: Already exists 
951c3d959c9d: Already exists 
05de4d0e206e: Already exists 
319f0394ef42: Already exists 
d9185034607b: Already exists 
013a9c64dadc: Already exists 
42f3f7d10903: Pull complete 
c4a3851d9207: Pull complete
82a1cc65c182: Pull complete 
a0a6b01efa55: Pull complete 
bca5ce71f9ea: Pull complete 
Digest: sha256:61a2a33f4b8b4bc93b7b6b9e65e64044aaec594809f818aeffbff69a893d1944 # 签名
Status: Downloaded newer image for mysql:latest 
docker.io/library/mysql:latest # 真实位置 

# 指定版本下载 [root@kuangshen ~]# docker pull mysql:5.7
```

### docker rmi

```
# 删除镜像 
docker rmi -f 镜像id # 删除单个

docker rmi -f 镜像名:tag 镜像名:tag # 删除多个 

docker rmi -f $(docker images -qa) # 删除全部
```

## 容器命令

说明：有镜像才能创建容器，我们这里使用 centos 的镜像来测试，就是虚拟一个 centos ！

```
docker pull centos
```

### 新建容器并启动

```
# 命令 
docker run [OPTIONS] IMAGE [COMMAND][ARG...] 

# 常用参数说明 
--name="Name" # 给容器指定一个名字 
-d # 后台方式运行容器，并返回容器的id！ 
-i # 以交互模式运行容器，通过和 -t 一起使用 
-t # 给容器重新分配一个终端，通常和 -i 一起使用 
-P # 随机端口映射（大写） 
-p # 指定端口映射（小结），一般可以有四种写法 
	ip:hostPort:containerPort 
	ip::containerPort 
	hostPort:containerPort (常用) 
	containerPort 
# 测试 
[root@kuangshen ~]# docker images 
REPOSITORY TAG IMAGE ID CREATED SIZE 
centos latest 470671670cac 3 months ago 237MB 
# 使用centos进行用交互模式启动容器，在容器内执行/bin/bash命令！ 
[root@kuangshen ~]# docker run -it centos /bin/bash 
[root@dc8f24dd06d0 /]# ls # 注意地址，已经切换到容器内部了！ 
bin etc lib lost+found mnt proc run srv tmp var dev home lib64 media opt root sbin sys usr
[root@dc8f24dd06d0 /]# exit   # 使用 exit 退出容器 
exit 
[root@kuangshen ~]#
```

### 列出所有运行的容器

```
# 命令 

docker ps [OPTIONS] 

# 常用参数说明 
-a # 列出当前所有正在运行的容器 + 历史运行过的容器 
-l # 显示最近创建的容器 -
n=? # 显示最近n个创建的容器 
-q # 静默模式，只显示容器编号。
```

### 退出容器

```
exit # 容器停止退出 
ctrl+P+Q # 容器不停止退出
```

### 启动停止容器

```
docker start (容器id or 容器名) # 启动容器 
docker restart (容器id or 容器名) # 重启容器 
docker stop (容器id or 容器名) # 停止容器 
docker kill (容器id or 容器名) # 强制停止容器
```

### 删除容器

```
docker rm 容器id # 删除指定容器 
docker rm -f $(docker ps -a -q) # 删除所有容器 
docker ps -a -q|xargs docker rm # 删除所有容器
```

## 常用其他命令

### 后台启动容器

```
# 命令 
docker run -d 容器名 
# 例子 
docker run -d centos # 启动centos，使用后台方式启动 

# 问题： 使用docker ps 查看，发现容器已经退出了！ 

# 解释：Docker容器后台运行，就必须有一个前台进程，容器运行的命令如果不是那些一直挂起的命 令，就会自动退出。 

# 比如，你运行了nginx服务，但是docker前台没有运行应用，这种情况下，容器启动后，会立即自 杀，因为他觉得没有程序了，所以最好的情况是，将你的应用使用前台进程的方式运行启动。
```

### 查看日志

```
# 命令 
docker logs -f -t --tail 容器id 
# 例子：我们启动 centos，并编写一段脚本来测试玩玩！最后查看日志
[root@kuangshen ~]# docker run -d centos /bin/sh -c "while true;do echo kuangshen;sleep 1;done" 
[root@kuangshen ~]# docker ps 
CONTAINER ID IMAGE 
c8530dbbe3b4 centos 
# -t 显示时间戳 
# -f 打印最新的日志 
# --tail 数字 显示多少条！ 
[root@kuangshen ~]# docker logs -tf --tail 10 c8530dbbe3b4 
2020-05-11T08:46:40.656901941Z kuangshen 
2020-05-11T08:46:41.658765018Z kuangshen 
2020-05-11T08:46:42.661015375Z kuangshen 
2020-05-11T08:46:43.662865628Z kuangshen 
2020-05-11T08:46:44.664571547Z kuangshen 
2020-05-11T08:46:45.666718583Z kuangshen 
2020-05-11T08:46:46.668556725Z kuangshen 
2020-05-11T08:46:47.670424699Z kuangshen 
2020-05-11T08:46:48.672324512Z kuangshen 
2020-05-11T08:46:49.674092766Z kuangshen
```

### 查看容器中运行的进程信息，支持 ps 命令参数。

```
# 命令 
docker top 容器id 
# 测试 
[root@kuangshen ~]# docker top c8530dbbe3b4 
UID PID PPID C STIME TTY TIME CMD 
root 27437 27421 0 16:43 ? 00:00:00 /bin/sh -c ....
```

### 查看容器/镜像的元数据

```
# 命令 
docker inspect 容器id 
# 测试 
[root@kuangshen ~]# docker inspect 
c8530dbbe3b4 [ 
				{ 
					# 完整的id，有意思啊，这里上面的容器id，就是截取的这个id前几位！ 
					"Id": "c8530dbbe3b44a0c873f2566442df6543ed653c1319753e34b400efa05f77cf8", 
					"Created": "2020-05-11T08:43:45.096892382Z", 
					"Path": "/bin/sh", 
					"Args": [ "-c", "while true;do echo kuangshen;sleep 1;done" ],
					# 状态 
					"State": { 
							"Status": "running", 
							"Running": true, 
							"Paused": false, 
							"Restarting": false, 
							"OOMKilled": false, 
							"Pid": 27437, 
							"ExitCode": 0, 
							"Error": "", 
							"StartedAt": "2020-05-11T08:43:45.324474622Z", 
							"FinishedAt": "0001-01-01T00:00:00Z" 
					},
                            // ........... 
                 ]
```

### 进入正在运行的容器

```
# 命令1 
docker exec -it 容器id bashShell 

# 测试1 
[root@kuangshen ~]# docker ps 
    CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES 
    c8530dbbe3b4 centos "/bin/sh -c 'while t…" 12 minutes ago Up 12 minutes happy_chaum 
[root@kuangshen ~]# docker exec -it c8530dbbe3b4 /bin/bash 
[root@c8530dbbe3b4 /]# ps -ef 
    UID PID PPID C STIME TTY TIME CMD 
    root 1 0 0 08:43 ? 00:00:00 /bin/sh -c while true;do 
    echo kuangshen;sleep 
    root 751 0 0 08:56 pts/0 00:00:00 /bin/bash 
    root 769 1 0 08:56 ? 00:00:00 /usr/bin/coreutils -- 
    coreutils-prog-shebang=s 
    root 770 751 0 08:56 pts/0 00:00:00 ps -ef 
# 命令2 
docker attach 容器id 
# 测试2 
[root@kuangshen ~]# docker exec -it 
    c8530dbbe3b4 /bin/bash 
    [root@c8530dbbe3b4 /]# ps -ef 
    UID PID PPID C STIME TTY TIME CMD 
    root 1 0 0 08:43 ? 00:00:00 /bin/sh -c while true;do 
    echo kuangshen;sleep 
    root 856 0 0 08:57 pts/0 00:00:00 /bin/bash root 874 1 0 08:57 ? 00:00:00 /usr/bin/coreutils -- 
    coreutils-prog-shebang=s 
    root 875 856 0 08:57 pts/0 00:00:00 ps -ef 

# 区别 # exec 是在容器中打开新的终端，并且可以启动新的进程 
# attach 直接进入容器启动命令的终端，不会启动新的进程
```

### 从容器内拷贝文件到主机上

```
# 命令 
docker cp 容器id:容器内路径 目的主机路径 

# 测试 
# 容器内执行，创建一个文件测试 
[root@c8530dbbe3b4 /]# cd /home 
[root@c8530dbbe3b4 home]# touch f1 
[root@c8530dbbe3b4 home]# ls
f1
[root@c8530dbbe3b4 home]# exit 
    exit 
# linux复制查看，是否复制成功 
[root@kuangshen ~]# docker cp c8530dbbe3b4:/home/f1 /home 
[root@kuangshen ~]# cd /home 
[root@kuangshen home]# ls 
f1
```

## 小结

![](../../static/img/docker/image16.png)

### 常用命令

```
attach  Attach to a running container    # 当前 shell 下 attach 连接指定运行镜像 

build  Build an image from a Dockerfile  # 通过 Dockerfile 定 制镜像 

commit Create a new image from a container changes # 提交当前容器为新的镜像 

cp Copy files/folders from the containers filesystem to the host path #从容器中拷贝指定文件或者目录到宿主机中 

create Create a new container # 创建一个新的容器，同 run，但不启动容器 

diff Inspect changes on a container's filesystem # 查看 docker 容器变化 

events Get real time events from the server # 从 docker 服务获取容 器实时事件 

exec Run a command in an existing container # 在已存在的容器上运行命令

export Stream the contents of a container as a tar archive # 导出容器的内 容流作为一个 tar 归档文件[对应 import ] 

history Show the history of an image # 展示一个镜像形成历史 

images List images # 列出系统当前镜像

import Create a new filesystem image from the contents of a tarball # 从 tar包中的内容创建一个新的文件系统映像[对应export] 

info Display system-wide information # 显示系统相关信息 

inspect Return low-level information on a container # 查看容器详细信息 

kill Kill a running container # kill 指定 docker 容 器load Load an image from a tar archive # 从一个 tar 包中加载一 个镜像[对应 save]

login Register or Login to the docker registry server # 注册或者登陆一个 docker 源服务器 

logout Log out from a Docker registry server # 从当前 Docker registry 退出 

logs Fetch the logs of a container # 输出当前容器日志信息 

port Lookup the public-facing port which is NAT-ed to PRIVATE_PORT # 查看映射端口对应的容器内部源端口 

pause Pause all processes within a container # 暂停容器 

ps List containers # 列出容器列表 

pull Pull an image or a repository from the docker registry server # 从docker镜像源服务器拉取指定镜像或者库镜像 

push Push an image or a repository to the docker registry server # 推送指定镜像或者库镜像至docker源服务器 

restart Restart a running container # 重启运行的容器 

rm Remove one or more containers # 移除一个或者多个容器 

rmi Remove one or more images # 移除一个或多个镜像[无容器使用该 镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除] 

run Run a command in a new container # 创建一个新的容器并运行 一个命令 

save Save an image to a tar archive # 保存一个镜像为一个 tar 包[对应 load] 

search Search for an image on the Docker Hub # 在 docker hub 中搜 索镜像 

start Start a stopped containers # 启动容器 stop Stop a running containers # 停止容器 

tag Tag an image into a repository # 给源中镜像打标签 

top Lookup the running processes of a container # 查看容器中运行的进程信息

unpause Unpause a paused container # 取消暂停容器 

version Show the docker version information # 查看 docker 版本号 

wait Block until a container stops, then print its exit code # 截取容 器停止时的退出状态值

```

# Docker镜像

## 镜像是什么

镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需的所有内容，包括代码、运行时、库、环境变量和配置文件。

## UnionFS （联合文件系统）

UnionFS（联合文件系统）：Union文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。Union 文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。

特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录

## Docker镜像加载原理

docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。

bootfs(boot file system)主要包含bootloader和kernel, bootloader主要是引导加载kernel, Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是bootfs。这一层与我们典型的Linux/Unix系统是一样的，包含boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。 rootfs (root file system) ，在bootfs之上。包含的就是典型 Linux 系统中的 /dev, /proc, /bin, /etc 等标准目录和文件。

rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。

![](../../static/img/docker/image21.png)



平时我们安装进虚拟机的CentOS都是好几个G，为什么Docker这里才200M？

![](../../static/img/docker/image22.png)

对于一个精简的OS，rootfs 可以很小，只需要包含最基本的命令，工具和程序库就可以了，因为底层直接用Host的kernel，自己只需要提供rootfs就可以了。由此可见对于不同的linux发行版, bootfs基本是一致的, rootfs会有差别, 因此不同的发行版可以公用bootfs。

## 分层的镜像

我们可以去下载一个镜像，注意观察下载的日志输出，可以看到是一层一层的在下载！

![](../../static/img/docker/image23.png)

思考：为什么Docker镜像要采用这种分层的结构呢？

最大的好处，我觉得莫过于是资源共享了！比如有多个镜像都从相同的Base镜像构建而来，那么宿主机只需在磁盘上保留一份base镜像，同时内存中也只需要加载一份base镜像，这样就可以为所有的容器务了，而且镜像的每一层都可以被共享。

查看镜像分层的方式可以通过 docker image inspect 命令！

```
[root@kuangshen home]# docker image inspect redis:latest 
	[ // ..... 
		"RootFS": { 
					"Type": "layers", 
					"Layers": [ 
                                   "sha256:c2adabaecedbda0af72b153c6499a0555f3a769d52370469d8f6bd6328af9b13", 													"sha256:744315296a49be711c312dfa1b3a80516116f78c437367ff0bc678da1123e990", 													"sha256:379ef5d5cb402a5538413d7285b21aa58a560882d15f1f553f7868dc4b66afa8", 													"sha256:d00fd460effb7b066760f97447c071492d471c5176d05b8af1751806a1f905f8", 													"sha256:4d0c196331523cfed7bf5bafd616ecb3855256838d850b6f3d5fba911f6c4123", 													"sha256:98b4a6242af2536383425ba2d6de033a510e049d9ca07ff501b95052da76e894" 
                                 ] 
                    },
                    "Metadata": { 
                    				"LastTagTime": "0001-01-01T00:00:00Z" 
               					} 
        ] 
  ]
```

### 理解：

所有的 Docker 镜像都起始于一个基础镜像层，当进行修改或增加新的内容时，就会在当前镜像层之上，创建新的镜像层。

举一个简单的例子，假如基于 Ubuntu Linux 16.04 创建一个新的镜像，这就是新镜像的第一层；如果在该镜像中添加 Python包，就会在基础镜像层之上创建第二个镜像层；如果继续添加一个安全补丁，就会创建第三个镜像层。

该镜像当前已经包含 3 个镜像层，如下图所示（这只是一个用于演示的很简单的例子）。

![](../../static/img/docker/image24.png)

在添加额外的镜像层的同时，镜像始终保持是当前所有镜像的组合，理解这一点非常重要。下图中举了一个简单的例子，每个镜像层包含 3 个文件，而镜像包含了来自两个镜像层的 6 个文件。

![](../../static/img/docker/image25.png)

上图中的镜像层跟之前图中的略有区别，主要目的是便于展示文件。
下图中展示了一个稍微复杂的三层镜像，在外部看来整个镜像只有 6 个文件，这是因为最上层中的文件7 是文件 5 的一个更新版本。

![](../../static/img/docker/image26.png)

这种情况下，上层镜像层中的文件覆盖了底层镜像层中的文件。这样就使得文件的更新版本作为一个新镜像层添加到镜像当中。

Docker 通过存储引擎（新版本采用快照机制）的方式来实现镜像层堆栈，并保证多镜像层对外展示为统一的文件系统。

Linux 上可用的存储引擎有 AUFS、Overlay2、Device Mapper、Btrfs 以及 ZFS。顾名思义，每种存储引擎都基于 Linux 中对应的文件系统或者块设备技术，并且每种存储引擎都有其独有的性能特点。

Docker 在 Windows 上仅支持 windowsfilter 一种存储引擎，该引擎基于 NTFS 文件系统之上实现了分层和 CoW[1]。

下图展示了与系统显示相同的三层镜像。所有镜像层堆叠并合并，对外提供统一的视图。

![](../../static/img/docker/image27.png)

### 特点

Docker镜像都是只读的，当容器启动时，一个新的可写层被加载到镜像的顶部！

这一层就是我们通常说的容器层，容器之下的都叫镜像层！

## 镜像Commit

docker commit 从容器创建一个新的镜像。

```
docker commit 提交容器副本使之成为一个新的镜像！ 

# 语法 

docker commit -m="提交的描述信息" -a="作者" 容器id 要创建的目标镜像名:[标签名]
```

# 容器数据卷

## 什么是容器数据卷

docker的理念回顾：
将应用和运行的环境打包形成容器运行，运行可以伴随着容器，但是我们对于数据的要求，是希望能够持久化的！

就好比，你安装一个MySQL，结果你把容器删了，就相当于删库跑路了，这TM也太扯了吧！

所以我们希望容器之间有可能可以共享数据，Docker容器产生的数据，如果不通过docker commit 生成新的镜像，使得数据作为镜像的一部分保存下来，那么当容器删除后，数据自然也就没有了！这样是行不通的！

为了能保存数据在Docker中我们就可以使用卷！让数据挂载到我们本地！这样数据就不会因为容器删除而丢失了



作用：
卷就是目录或者文件，存在一个或者多个容器中，由docker挂载到容器，但不属于联合文件系统，因此能够绕过 Union File System ， 提供一些用于持续存储或共享数据的特性：

卷的设计目的就是数据的持久化，完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷。
特点：
1、数据卷可在容器之间共享或重用数据
2、卷中的更改可以直接生效
3、数据卷中的更改不会包含在镜像的更新中
4、数据卷的生命周期一直持续到没有容器使用它为止
所以：总结一句话： 就是容器的持久化，以及容器间的继承和数据共享！

## 使用数据卷

方式一：容器中直接使用命令来添加

挂载:

```
# 命令 
docker run -it -v 宿主机绝对路径目录:容器内目录 镜像名 

# 测试 
[root@kuangshen ~]# docker run -it -v /home/ceshi:/home centos /bin/bash
```

查看数据卷是否挂载成功 docker inspect 容器id

![](../../static/img/docker/image28.png)

测试容器和宿主机之间数据共享：可以发现，在容器中，创建的会在宿主机中看到！

![](../../static/img/docker/image29.png)

测试容器停止退出后，主机修改数据是否会同步！
1. 停止容器

2. 在宿主机上修改文件，增加些内容

3. 启动刚才停止的容器

4. 然后查看对应的文件，发现数据依旧同步！ok

   ![](../../static/img/docker/image30.png)

使用 docker 安装 mysql

思考：mysql 数据持久化的问题！

```
# 1、搜索镜像 
[root@kuangshen ~]# docker search mysql 
	NAME DESCRIPTION STARS mysql MySQL is a widely used, open-source relation… 9488 
	
# 2、拉取镜像 
[root@kuangshen ~]# docker pull mysql:5.7 
5.7: Pulling from library/mysql 
    54fec2fa59d0: Already exists 
    bcc6c6145912: Pull complete 
    951c3d959c9d: Pull complete 
    05de4d0e206e: Pull complete 
    319f0394ef42: Pull complete 
    d9185034607b: Pull complete 
    013a9c64dadc: Pull complete 
    e745b3361626: Pull complete 
    03145d87b451: Pull complete 
    3991a6b182ee: Pull complete 
    62335de06f7d: Pull complete
 Digest: 
 sha256:e821ca8cc7a44d354486f30c6a193ec6b70a4eed8c8362aeede4e9b8d74b8ebb 
 Status: Downloaded newer image for mysql:5.7 
 docker.io/library/mysql:5.7 
 
 # 3、启动容器 -e 环境变量！ 
 # 注意： mysql的数据应该不丢失！先体验下 -v 挂载卷！ 参考官方文档 
 [root@kuangshen home]# docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7 4763fa5c68c4323688102f57938fb10996a0fb902d2812349286529f9378f16c 
 
 # 4、使用本地的sqlyog连接测试一下 3310 
 
 # 5、查看本地的 /home/mysql 目录 
 [root@kuangshen data]# pwd /home/mysql/data 
 [root@kuangshen data]# ls .. ... . test # 可以看到我们刚刚建立的mysql数据库在本地存储着 
 
 # 6、删除mysql容器 [root@kuangshen data]# docker rm -f mysql01 # 删除容器，然后发现远程连接失败！ mysql01 
 [root@kuangshen data]# ls .. ... . test # 可以看到我们刚刚建立的mysql数据库在本地存储着
```

得出结论：
容器之间配置信息的传递，数据卷的生命周期一直持续到没有容器使用它为止。
存储在本机的文件则会一直保留！

# DockerFile

大家想想，Nginx，tomcat，mysql 这些镜像都是哪里来的？官方能写，我们不能写吗？

我们要研究自己如何做一个镜像，而且我们写的微服务项目以及springboot打包上云部署，Docker就是最方便的。

微服务打包成镜像，任何装了Docker的地方，都可以下载使用，极其的方便。

流程：开发应用=>DockerFile=>打包为镜像=>上传到仓库（私有仓库，公有仓库）=> 下载镜像 => 启动运行。

还可以方便移植！

**什么是DockerFile?**

dockerfile是用来构建Docker镜像的构建文件，是由一系列命令和参数构成的脚本。
构建步骤：
1、编写DockerFile文件
2、docker build 构建镜像
3、docker run
**DockerFile构建过程**

基础知识：

1、每条保留字指令都必须为大写字母且后面要跟随至少一个参数
2、指令按照从上到下，顺序执行
3、# 表示注释
4、每条指令都会创建一个新的镜像层，并对镜像进行提交

流程：
1、docker从基础镜像运行一个容器
2、执行一条指令并对容器做出修改
3、执行类似 docker commit 的操作提交一个新的镜像层
4、Docker再基于刚提交的镜像运行一个新容器
5、执行dockerfile中的下一条指令直到所有指令都执行完成！
说明：
从应用软件的角度来看，DockerFile，docker镜像与docker容器分别代表软件的三个不同阶段。
DockerFile 是软件的原材料 （代码）
Docker 镜像则是软件的交付品 （.apk）
Docker 容器则是软件的运行状态 （客户下载安装执行）
DockerFile 面向开发，Docker镜像成为交付标准，Docker容器则涉及部署与运维，三者缺一不可！

![](../../static/img/docker/image39.png)

DockerFile：需要定义一个DockerFile，DockerFile定义了进程需要的一切东西。DockerFile涉及的内容包括执行代码或者是文件、环境变量、依赖包、运行时环境、动态链接库、操作系统的发行版、服务进程和内核进程（当引用进行需要和系统服务和内核进程打交道，这时需要考虑如何设计 namespace的权
限控制）等等。

Docker镜像：在DockerFile 定义了一个文件之后，Docker build 时会产生一个Docker镜像，当运行Docker 镜像时，会真正开始提供服务；

Docker容器：容器是直接提供服务的。

**DockerFile指令**

关键字：

```
FROM # 基础镜像，当前新镜像是基于哪个镜像的 

MAINTAINER # 镜像维护者的姓名混合邮箱地址 

RUN # 容器构建时需要运行的命令 

EXPOSE # 当前容器对外保留出的端口 

WORKDIR # 指定在创建容器后，终端默认登录的进来工作目录，一个落脚点 

ENV # 用来在构建镜像过程中设置环境变量 

ADD # 将宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar压缩包 

COPY # 类似ADD，拷贝文件和目录到镜像中！ 

VOLUME # 容器数据卷，用于数据保存和持久化工作 

CMD # 指定一个容器启动时要运行的命令，dockerFile中可以有多个CMD指令，但只有最 后一个生效！ 

ENTRYPOINT # 指定一个容器启动时要运行的命令！和CMD一样 

ONBUILD # 当构建一个被继承的DockerFile时运行命令，父镜像在被子镜像继承后，父镜像的 ONBUILD被触发
```

![](../../static/img/docker/image40.png)

![](../../static/img/docker/image41.png)

![](../../static/img/docker/image56.png)

# Docker 网络讲解

**准备工作：清空所有的容器，清空所有的镜像**

```
docker rm -f $(docker ps -a -q) # 删除所有容器 

docker rmi -f $(docker images -qa) # 删除全部镜像
```

查看本地ip 

```
ip addr
```

![](../../static/img/docker/image57.png)

这里我们分析可得，有三个网络：

```
lo 127.0.0.1 # 本机回环地址 
eth0 172.17.90.138 # 阿里云的私有IP 
docker0 172.18.0.1 # docker网桥 
# 问题：Docker 是如何处理容器网络访问的？
```

我们之前安装ES的时候，留过一个问题，就是安装Kibana的问题，Kibana得指定ES的地址！或者我们实际场景中，我们开发了很多微服务项目，那些微服务项目都要连接数据库，需要指定数据库的url地址，通过ip。但是我们用Docker管理的话，假设数据库出问题了，我们重新启动运行一个，这个时候数据库的地址就会发生变化，docker会给每个容器都分配一个ip，且容器和容器之间是可以互相访问的。我们可以测试下容器之间能不能ping通过：

1、每一个安装了Docker的linux主机都有一个docker0的虚拟网卡。这是个桥接网卡，使用了veth-pair技术！

2、每启动一个容器，linux主机就会多了一个虚拟网卡。

3、我们来画一个网络模型图

![](../../static/img/docker/image58.png)

**小结：**

Docker使用Linux桥接，在宿主机虚拟一个Docker容器网桥(docker0)，Docker启动一个容器时会根据Docker网桥的网段分配给容器一个IP地址，称为Container-IP，同时Docker网桥是每个容器的默认网关。因为在同一宿主机内的容器都接入同一个网桥，这样容器之间就能够通过容器的Container-IP直接
通信。

![](../../static/img/docker/image59.png)

Docker容器网络就很好的利用了Linux虚拟网络技术，在本地主机和容器内分别创建一个虚拟接口，并让他们彼此联通（这样一对接口叫veth pair）；
Docker中的网络接口默认都是虚拟的接口。虚拟接口的优势就是转发效率极高（因为Linux是在内核中进行数据的复制来实现虚拟接口之间的数据转发，无需通过外部的网络设备交换），对于本地系统和容器系统来说，虚拟接口跟一个正常的以太网卡相比并没有区别，只是他的速度快很多。

**自定义网络**

![](../../static/img/docker/image60.png)

**查看所有网络**

```
[root@kuangshen ~]# docker network ls 
    NETWORK ID NAME DRIVER SCOPE 
    4eb2182ac4b2 bridge bridge local 
    ae2b6209c2ab host host local 
    c037f7ec7e57 none null local
```

**所有网路模式**

| 网络模式      | 配置                    | 说明                                                         |
| ------------- | ----------------------- | ------------------------------------------------------------ |
| bridge模式    | --net=bridge            | 默认值，在Docker网桥docker0上为容器创建新的网络栈            |
| none模式      | --net=none              | 不配置网络，用户可以稍后进入容器，自行配置                   |
| container模式 | --net=container:name/id | 容器和另外一个容器共享Network namespace。kubernetes中的pod就是多个容器共享一个Networknamespace。 |
| host模式      | --net=host              | 容器和宿主机共享Network namespace                            |
| 用户自定义    | --net=自定义网络        | 用户自己使用network相关命令定义网络，创建容器的时候可以指定为自己定义的网络 |

**查看一个具体的网络的详细信息**

```
# 命令 
[root@kuangshen ~]# docker network inspect 4eb2182ac4b2 
	[ 
		{ 
			"Name": "bridge", 
		  	"Id": "4eb2182ac4b23487e1eb6e06df56c71ab6f0adc7ccc0962b4747d0eed5ad6690", 
		  	"Created": "2020-05-11T15:44:20.131441544+08:00", 
		  	"Scope": "local", "Driver": "bridge", 
		  	"EnableIPv6": false, 
		  	"IPAM": { 
		  				"Driver": "default", 
		  				"Options": null, 
		  				"Config": [ { 
		  							// 默认docker0是管理这个子网范围内的。0~16，也就是 255*255，去 掉0个255，我们有65534可以分配的ip 									// docker0网络默认可以支持创建6万多个容器ip不重复 
		  							"Subnet": "172.18.0.0/16", 
		  							"Gateway": "172.18.0.1" 
		  							} ] 
		  							},
		  							"Internal": false, 
		  							"Attachable": false, 
		  							"Ingress": false, 
		  							"ConfigFrom": { "Network": "" },
		  							"ConfigOnly": false,
		  							"Containers": { 
		  											"a3a4a17a2b707766ad4f2bb967ce1d94f658cd4cccef3bb8707395cdc71fa1e7": { 															"Name": "tomcat03", 
		  												"EndpointID":										"5fe62d0be3a1343aa74f6bb77885d3657b191210cafad200e5054e1bdfe56be9", "MacAddress": "02:42:ac:12:00:04", "IPv4Address": "172.18.0.4/16", "IPv6Address": "" }, "b80da266a3ad85fcc874c5f0d3c897246ebc40533cb745bb24180237cc3167b1": { "Name": "tomcat02", "EndpointID": "6232cac0c4e7fed30c9fa5eebc9238f9fc44f548f257344b5440d6d486825256", "MacAddress": "02:42:ac:12:00:03", "IPv4Address": "172.18.0.3/16", "IPv6Address": "" }, "f38239e2b405bccf8c93bd1052f336f661033b9b27ef9b3f99a018c108e06f87": { "Name": "tomcat01", "EndpointID": "31dc174b8f3f15f217acdc3ac7e8a235a03d59438f863706c0143b4426772c5e", "MacAddress": "02:42:ac:12:00:02", "IPv4Address": "172.18.0.2/16", "IPv6Address": "" } },"Options": { "com.docker.network.bridge.default_bridge": "true", "com.docker.network.bridge.enable_icc": "true", "com.docker.network.bridge.enable_ip_masquerade": "true", "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0", "com.docker.network.bridge.name": "docker0", "com.docker.network.driver.mtu": "1500" },"Labels": {} } ]
```

## **网络连通**

![](../../static/img/docker/image62.png)



docker0和自定义网络肯定不通，我们使用自定义网络的好处就是网络隔离：
大家公司项目部署的业务都非常多，假设我们有一个商城，我们会有订单业务（操作不同数据），会有订单业务购物车业务（操作不同缓存）。如果在一个网络下，有的程序猿的恶意代码就不能防止了，所以我们就在部署的时候网络隔离，创建两个桥接网卡，比如订单业务（里面的数据库，redis，mq，全
部业务 都在order-net网络下）其他业务在其他网络。