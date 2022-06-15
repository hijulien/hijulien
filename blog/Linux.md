## Linux

### 1. 计算机硬件软件系统

#### 1. 1. 冯诺依曼结构体系

```
计算机处理的数据和指令一律用二进制数表示
顺序执行程序
计算机硬件由运算器、控制器、存储器、输入设备和输出设备五大部分组成
```

#### 1. 2. 计算机硬件组成

```
输入设备
输入设备用来将人们熟悉的信息形式转换为机器能够识别的信息形式
常见的有键盘，鼠标等
输出设备
输出设备可以将机器运算结果转换为人们熟悉的信息形式
打印机输出，显示器输出等
存储器
存储器用来存放数据和程序
RAM(random access memory）即随机存储 内存:
速度快，容量小
掉电易失
逻辑IO
ROM（Read-Onboy Memory）即只读内存 硬盘:
容量大，速度相对较慢
长久保存
物理IO
CPU(中央处理器)
控制器
控制器主要用来控制和指挥程序和数据的输入运行，以及处理运算结果
运算器
运算器主要运行算数运算和逻辑运算，并将中间结果暂存到运算器中
```

#### 1. 3. 硬盘的分类

```
硬盘按照存储介质的不同可以分为如下两种
机械硬盘（Hard Disk Driver, HDD）
机械硬盘采用磁性碟片来存储数据
用显微镜把盘片放大，会看见盘片表面凹凸不平，凸起的地方被磁化，凹的地方是没有
被磁化
凸起的地方代表数字 1 （磁化为 1 ），凹的地方代表数字 0 。
硬盘可以以二进制来存储表示文字、图片等信息。
硬盘可以根据转速来判断硬盘的好坏 7200 转/分 100-200M/s
固态硬盘（Solid State Disk, SSD）
固态硬盘通过闪存颗粒（固态电子存储芯片阵列）来存储数据
```

学习速度的区别

固态硬盘的读取速度普遍可以达到400M/s，写入速度也可以达到130M/s以上，
其写入速度是普通机械硬盘的3-5倍。
机械硬盘的数据写入速度

```
主流的硬盘半机械半电子硬盘(机械硬盘)
硬盘的转速(转速越快读取越快)
寻道时间
数据传输时间
```

#### 1. 4. 顺序写作与随时阅读

#### 1. 5. 网络连接概念

```
IP地址IPADDR
IP地址是一种逻辑地址，用来标识网络中一个个主机
IP地址=网络地址+主机地址
IP地址是一个 4 * 8bit（ 1 字节）由 0/1 组成的数字串（IP4协议）
子网掩码NETMASK
子网掩码只有一个功能，就是将IP地址划分为网络地址和主机地址两部分。
子网掩码用来判断任意两台计算机的IP地址是否在同一个子网中的根据
A 192.168.7.111 B 192.168.8.
255.255.0.
默认网关GATEWAY
连接两个不同的网络的设备都可以叫网关设备；网关的作用就是实现两个网络之间进行通讯与
控制。
网关地址就是网关设备的IP地址
域名服务器DNS
DNS是域名服务器，用来解析域名的（域名和IP之间的解析）。
如果没有这东西，登陆某个网站时就必须输入该网站的IP地址，有了DNS就可以直接输入网
址。
C:\Windows\System32\drivers\etc\hosts
```

#### 1. 6. 网络连接模式

```
host-onboy(主机模式)
在某些特殊的网络调试环境中，要求将真实环境和虚拟环境隔离开，这时你就可采用host-
onboy模式。
在host-onboy模式中，所有的虚拟系统是可以相互通信的，但虚拟系统和真实的网络是被隔
离开的。
在host-onboy模式下，虚拟系统的TCP/IP配置信息都是由VMnet1(host-onboy)虚拟网络的
DHCP服务器来动态分配的
bridged(桥接模式)
VMWare虚拟出来的操作系统就像是局域网中的一台独立的主机，它可以访问网内任何一台机
器。
使用桥接模式的虚拟系统和宿主机器的关系，就像连接在同一个Hub上的两台电脑。
当前主机IP 为 192.168.8.100 虚拟机 192.168.8.xxx
学习期间为了防止IP冲突，所以不选择这种模式
NAT(网络地址转换模式)
使用NAT模式，就是让虚拟系统借助NAT(网络地址转换)功能，通过宿主机器所在的网络来访
问公网。
NAT模式下的虚拟系统的TCP/IP配置信息是由VMnet8(NAT)虚拟网络的DHCP服务器提供的
虚 拟系统也就无法和本局域网中的其他真实主机进行通讯
```

#### 1. 7. 软件分类

```
应用软件
就是为了实现某些业务功能
应用软件要基于对应的系统软件
不同的操作系统要安装不同的软件
系统软件
就是为了和硬件打交道
屏蔽应用软件与硬件的差异
系统软件的分类
Window
用户量全球最大
收费，不开源，民用较多
各种软件比较齐全
Mac
只限定于某些苹果的品牌机
ios--自成一家
GNU/Linux
GNU是一个开源软件组织,世界上所有的软件都应该开源免费
GNU Is Not Unix
GCC++
托瓦兹 林纳斯 Linus -- Linux(Linux is not unix)
Logo是企鹅
```

#### 1. 8. Linux 分支

```
RedHat（收费）
CentOS
完全开源免费
不要使用最新版的CentOS
主要用于服务器版本
Debain（免费）
Ubuntu
视窗界面良好的Linux系统
一些主流的软件都支持Ubuntu系统
```

#### 1. 9. Linux下载

```
官网
https://linux.org/
下载页面
https://linux.org/pages/download/
CentOS7.6下载地址
http://vault.centos.org/7.6.1810/
镜像的分类
everything
This image contains the complete set of packages for CentOS Linux 7. It can be
used for installing or populating a local mirror.
minimal
The aim of this image is to install a very basic CentOS 6.5 system with the
minimum of packages needed to have a functional system.
netinstall
This is the network install and rescue image.
操作系统的位数
优先选择 64 位,将来安装软件有更好兼容性
```

### 2.虚拟机安装与配置

#### 2. 1. 虚拟化技术

```
可以更好的利用计算机闲置的资源
我们可以在计算机中虚拟出多台虚拟机帮助我们执行程序或者业务
虚拟机的各种组成理论上和真实主机是一样的
如果要使用这种技术只需要安装对应的软件即可
Virtualbox
VirtualMachine
安装软件
```

#### 2. 2. 创建虚拟主机

#### 2. 3. 安装操作系统

#### 2. 4. 配置常见参数

##### 2. 4. 1. 网络

```
查看自己虚拟网卡地址
编辑-->虚拟机网络编辑器-->vmnet8
```

修改网络配置信息

```
vi编辑器简单使用
操作文档
光标位置
dd 删除一行
i 将文档变成可修改模式
esc 退出编辑
:wq 保存并退出
修改网络信息
vi /etc/sysconfig/network-scripts/ifcfg-ens33
--修改
ONBOOT=yes
BOOTPROTO=static //静态网络IP dhcp 动态获取网络IP
--添加
IPADDR=192.168.58.100
NETMASK=255.255.255.0
GATEWAY=192.168.58.2
DNS1=114.114.114.114
删除------
UUID
重启网卡重新加载配置文件
ip addr
systemctl restart network.service
ping http://www.baidu.com
ctrl+c 终止命令的执行
```

##### 2. 4. 2. 火火

```
保护本机的端口不被别人访问
如果端口需要被别人访问到，需要添加端口的防火墙例外
关闭防火墙
本次开机状态下防火墙关闭
systemctl stop firewalld (本次服务内关闭防火墙)
服务器重启后防火墙禁用
systemctl disable firewalld(禁用防火墙服务)
```

##### 2. 4. 3. 软件安装限制

```
操作系统对未知软件的安装有可能拒绝或者警告，我们需要禁用这个功能
vi /etc/selinux/config
SELINUX=disabled
```

##### 2. 4. 4. 关机

```
关机
halt
直接拔掉电源
poweroff
直接关闭机器，但是有可能当前虚拟机其他人在使用
shutdown -h now
马上关闭计算机 ，但是可以给其他用户发送消息
reboot
重启虚拟机
```

#### 2. 5. 影像与风景

```
拍摄快照
记录当前虚拟机的状态
拍摄快照的时候一定要关机
转到
回到某一个历史快照的节点
克隆
复制某一个历史快照节点
克隆的方式
链接克隆
当前节点文件夹只存储差异性数据
相同数据存放在原始节点上
优点：节省硬盘空间 缺点：耦合性大
完整克隆
就是基于原始节点完全拷贝到新节点的文件夹中
优点：耦合性抵 缺点：硬盘空间使用大
推荐使用完整克隆
```

#### 2. 6. 修改机器配置

##### 2. 6. 1. 网络信息

```
参考2.4.1的修改网络信息
```

##### 2. 6. 2. 主机名

```
vi /etc/hostname
修改完成后需要重启生效
hostname bd16
本次启动中有效，重启虚拟机还是使用原来的名字
```

#### 2. 7. 连接Linux服务器

```
Xshell
负责向虚拟机输入命令
XFtp
如则向虚拟机传输文件
```

### 3.Linux的命令

#### 3. 1. 命令学习法

```
Linux命令与参数之间必须用空格隔开
Linux命令是区分大小写的
如果输入了错误的命令
-bash: abcd: command not found
命令敲错了
命令未安装
type 命令的类型
cd is a shell builtin
ping is /bin/ping
ll is aliased to `ls -l --color=auto'
for is a shell keyword
命令的帮助文档
help
内置命令的帮助文档
man
外部命令的帮助文档
因为当前系统为minimal的，very basic 没有man包
需要手动安装man
yum install man man-pages -y
将来工作中如果遇到生疏的命令，直接百度
如果不是为了装C,完全没必要查看命令手册
```

#### 3. 2. 常用的命令

```
whereis 查询命令文件的位置
file 查看文件的类型
who 查看当前在线的用户
whoami 我是谁
pwd 我在那
uname -a 查看内核信息
echo 类似于 sout syso ，打印语句
clear 清屏
history 历史
```

#### 3. 3. 特殊字符

```
.点：
如果文件的开始是.说明当前文件是一个隐藏文件
```

.
..指向当前用户目录的上级用户目录$
说明
这是一个
$PATH Linux的环境变量目录
*星目录号
通配符
~
当前用户的家目录
的家目录是不同的
root用户在系统目录根下
其他用户的家目录在/home/用户名为目录
空格
Linux的命令与空格隔开
/
整个Linux的文件根目录
命令的如果参数
是单词
或者一般加一般--如果是参数缩小加-
修改Xshell颜色

### 4.Linux的文件系统

```
PS1='\[\e[36;40m\][\u@\h \W]\[\e[0m\]\\$ '
echo "PS1='\[\e[36;40m\][\u@\h \W]\[\e[0m\]\\$ '" >> ~/.bashrc
source ~/.bashrc
```

#### 4. 1. 万事皆万物文件

```
文件系统：
操作系统如何管理文件，内部定义了一些规则或者定义
所以在Linux中所有的东西都是以文件的方式进行操作
在Linux中，文件的访问不和Window的一样。window依靠的是通过盘符进行访问
Linux维护着一个树状结构的文件模型
只有一个根节点 ,他的名字叫做 /
一个节点上可以有多个子节点
查找文件的方式
相对路径
以当前路径为基准点，查找其他资源
vi ../etc/sysconfig/network
绝对路径
以根目录为基准点，查找其他资源
vi /etc/sysconfig/network-scripts/ifcfg-ens33
日常使用中，只要找到路径即可，但是如果是一些配置文件，尽量写绝对路径
可以随意的挂载磁盘
```

#### 4. 2. Linux 第一文件目录

```
mount /dev/disk1 /usr/download
disk1 1T
mount /dev/disk2 /usr/upload
disk2 100T
mount /dev/disk3 /usr/upload/photo
disk3 1P
/bin：
bin是Binary的缩写, 这个目录存放着最经常使用的命令。
/boot：
这里存放的是启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件。
/dev ：
dev是Device(设备)的缩写, 该目录下存放的是Linux的外部设备，在Linux中访问设备的方式和访问
文件的方式是相同的。
```

/etc：
这个目录存放所有的系统管理所需要的配置文件和子目录。

/home：
用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名称是的名字命名的。

/lib：
这个连接里都存放着系统最里面的动态共享库，这些用途类似于Windows的DLL文件。几乎所有的应用
程序都需要目录里的共享库。

/lost+found：
这个目录一般情况下是的，当系统下不通后，这里就存放了一些空文件。

/媒体：
linux系统会自动识别一些设备，U盘、光驱等，当识别后，linux可以通过识别下的设备挂载到这个
目录中。

/mnt：
系统提供的目录是为了让用户临时挂载该文件系统的，然后我们可以将光驱挂载在/mnt/上，进入光驱
目录就可以查看光驱里的内容了。

/opt
这是给主机额外安装软件的地方。比如你的 ACLE 数据库可以放在这个目录下。默认是这个目录下
的。

/proc： 这个
目录是一个虚拟的，它是系统内存映射的，我们可以通过这个目录来获取系统信息。
某个文件，比如
可以通过下面的命令来屏蔽主机的ping命令，让别人无法ping你的机器：
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

/
该为系统管理员，超级目录也为目录权限者的主用户。

/sbin：
超级用户的英文，这里存放的是系统管理员使用的系统管理程序。

/selinux：
这个是 Redhat/CentOS 所独有的安全目录，
Selinux防火墙，但这个目录机制比较复杂，这个目录机制比较复杂，就是这些 Linux 相关的文件。

/srv：
该目录存放一些服务启动之后需要提取的数据。

/sys：
这是linux2.6内核的一个很大的变化该目录下安装了2.6内核中新出现的一个文件系统
sysfs。sysfs文件系统集成了下面3种文件系统信息：针对进程信息的proc对应设备的devfs
系统以及对应的内核设备的devpts系统该系统是内核设备的一个文件被文件文件。
当一个内核树对象创建的文件和目录文件时。中被创建。

/tmp：
这个目录是用来存放一些临时文件的。

/usr：
这是一个非常重要的目录，用户的很多应用程序和文件都在这个目录下，类似于 windows 下的
程序文件目录。

/usr/bin：

#### 4. 3. Linux的文件操作

```
cd
改变当前工作目录
ls ll
显示出指定目录下所有的文件
文件的类型
```

- 普通文件
  文件夹
  -l软连接
  -rwr--r--。1 root root 3384 Nov 11 23:51 install.log.syslog
  mkdir
  创建文件目录
  mkdir -pa/b/c/d/e/f 会自动创建文件父目录
  mkdir -p lucky/{1234}ls 一次可以创建多个个子目录
  rmdir
  删除空文件夹
  rmdir: 'a1'删除失败: 目录不是空的
  rmdir: 'baidu'删除失败: 不是目录
  可以删除文件目录
  cp
  复制文件或文件
  cp源文件目标目录
  cp abcd /opt
  cp /opt/abcd
  ./copy文件夹
  cp -r lucky /opt
  复制文件夹下所有的内容
  cp: 省略目录'/root/a1'
  mv
  移动文件
  或mv a1

```
系统用户使用的应用程序。
/usr/sbin：
超级用户使用的比较高级的管理程序和系统守护程序。
/usr/src：
内核源代码默认的放置目录。
/var：
这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日
志文件。
/run：
是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。
如果你的系统上有 /var/run 目录，应该让它指向 run。
```

mv abc /opt
修改文件名称
mv a abcd
rm

删除文件
rm install.log
rm -f install.log
删除文件夹
rm -r abcd
rm -rf abcd 谨慎使用，从删库到
跑路

如果没有就创建一个文件
，如果该文件已经存在，修改文件的三个时间，将三个时间改为当前时间
统计

查看
Inode 当前在文件的修改状态 Inode 的唯一修改标识访问访问 访问文件 ID 访问时间
文件 内容时间时间修改 文件大小 文件 时间信息修改文件内容时间信息 修改文件内容的文件时间 信息







```
创建文件的链接
软(符号)连接
ln -s lucky01 sl
软连接和原始文件不是同一个文件
lucky1 131085
sl 131074
rm -rf lucky1
硬链接
ln lucky02 hl
硬链接和原始文件使用文件系统中的同一个文件
如果你害怕一个文件被别人误删，你可以使用硬链接保护这个文件
软硬链接在链接文件的时候，推荐使用文件的绝对路径,否则有可能会出现问题
```

#### 4. 4. 读取文件信息

```
cat
将整个文档加载到内存中，并进行一次性显示
除非后面使用管道，传递数据
tac
将整个文档加载到内存中，并进行一次性按行逆序显示
more less
分页查看文档内容
快捷键
回车 下一行
空格 下一页
b 回退
q 退出
head
从文章开始读取N行
默认如果超过 10 行读取 10 行,否则读取现在行数
head -5 profile
tail
从文章末尾读取N行
head -3 profile | tail -1
利用管道只读取第N行
管道的作用就相当于把前面的结果以参数的方式传递给后面的命令
读取新增数据
ping http://www.baidu.com >>baidu
tail -F baidu
如果f:
它会监听指定inode的文件数据变化，但是当文件被删除后
即使创新创建，inode也会发生变化，于是监听失败
如果F
他会监听指定名字的文件,如果文件被删除后，重新创建
他会重新监听新文件的数据变化，监听不受影响
find
查找指定的文件
find 要查找的范围 -name 名字
find /etc -name profile
```

#### 4. 5. VI和VIM编辑器

##### 4. 5. 1. 打开文件

```
正常打开
vi profile
打开文件，并将光标置于第 8 行
vi +8 profile
打开最后一行
vi + profile
按n查找下一个，按N查找上一个
打开指定搜索单词的位置
vi +/if profile
```

##### 4. 5. 2. 多种模式

```
编辑模式
编辑模式中，每一个按键都有其他的功能
输入模式
每一个按键按下什么，就像文本中数据输入什么
末行（命令行）模式
我们可以直接在VI中输入特定的命令
```

##### 4. 5. 3. 切换模式

```
编辑模式-->输入模式
i在当前位置插入数据
a追加数据
o在当前行后面开启一个新的输入行
I 行首
A 行尾
O 上一行
输入模式-->编辑模式
按下ESC
编辑模式-->末行模式
:
末行模式-->编辑模式
按下ESC
```

##### 4. 5. 4. 编辑模式

```
G最后一行
gg 跳转到第一行
数字gg 跳转到第数字行
w 下个单词
数字w
dw 删除一个单词
3dw 删除三个单词
dd 删除一行
3dd 删除三行
u回退到前面的操作
.回退u执行的操作
yw 复制一个单词
3yw 复制三个单词
yy 复制一行
3yy复制三行
p粘贴
6p 粘贴 6 次
x 剪切
3x 剪切三个字符
r 替换，然后输入一个字符替换
3r 替换三个
hjkl 方向键
ZZ 保存并退出
ctrl+s 锁屏 ctrl+q 解锁
```

##### 4. 5. 5. 输入模式

```
没得讲。按啥是啥
```

##### 4. 5. 6. 末行模式

```
set nu 设置行号
set nonu 取消行号
w 保存
q 退出
wq 保存并退出
q!强制退出，但是不保存
如果上次异常退出会保留同名隐藏文件，每次启动会给与提示
如果确定当前文件没问题，请删除隐藏文件
/pattern
搜索指定的字符串
/usr n向下查找 N逆向查找
s/p1/p2/g
替换字符串
g 替换当前行所有 否则只替换当前行第一个
s/abc/lucky/g
查找指定行
3,8s/abc/lucky/g
替换全文
g/abc/s//lucky/g
```

#### 4. 6. 计算机间的数据传输

##### 4. 6. 1. 窗口--Linux

```
lrzsz
需要手动安装
yum install lrzsz -y
rz
将文件从window上传到Linux
sz 文件
将文件从Linux传输到Window
xftp
较为通用的文件传输方式
```

##### 4. 6. 2. Linux--Linux

```
scp 源数据地址(source) 目标数据地址(target)
scp apache-tomcat-7.0.61.tar.gz root@192.168.31.44:/opt
scp root@192.168.31.44:/opt/apache-tomcat-7.0.61.tar.gz ./
scp -r apache-tomcat-7.0.61 root@192.168.31.44:/opt
```

#### 4. 7. 文件大小

```
分区信息
df -h
指定文件目录大小
du -h --max-depth=1 apache-tomcat-7.0.61
swap
一个特殊分区，以硬盘代替内存
当内存使用满的时候，可以将一部分数据写出到swap分区
```

#### 4. 8. 压缩文件

##### 4. 8. 1. 焦油

```
主要针对的文件是 lucky.tar.gz
解压缩
tar -zx(解压)v(过程)f(文件) lucky.tar.gz
压缩
tar -zc(压缩)f(文件) tomcat.tar.gz(压缩后的名字) apache-tomcat-7.0.61(源文件)
tar -zxf tomcat.tar.gz -C /opt/
-C 指定解压缩的文件目录
```

##### 4. 8. 2. 压缩和解压

```
安装
yum install zip unzip -y
压缩
zip -r tomcat.zip apache-tomcat-7.0.61
解压缩
unzip tomcat.zip
```

### 5. Linux的网络信息

#### 5. 1. 主机名称

```
临时修改
hostname school
长久修改
vi /etc/hostname
```

#### 5. 2. DNS解析

```
域名解析服务
可以将域名转换为IP地址
DNS域名劫持
window --> C:\Windows\System32\drivers\etc\hosts
123.56.138.186 http://www.baidu.com
123.56.138.186 http://www.taodao.com
修改主机域名
vi /etc/hosts
将来我们需要把所有的虚拟机都配置hosts文件
192.168.31.101 bd1601
192.168.31.102 bd1602
```

#### 5. 3. 网络相关命令

```
ifconfig
查看当前网卡的配置信息
这个命令属于 net-tools中的一个命令，但是Centos7中minimal版并没有集成这个包
所以 7 的时候需要自己手动安装
如果没有ifconfig ，可以使用ip addr 临时代替
netstat
查看当前网络的状态信息
一个机器默认有 65536 个端口号[0,65535]
这是一个逻辑的概念，将来我们需要使用程序监听指定的端口，等待别人的访问
一个端口只能被一个程序所监听, 端口已经被占用
netstat -anp
netstat -r 核心路由表 == route
ping
查看与目标IP地址是否能够连通
telnet
查看与目标IP的指定端口是否能够连通
yum install telnet -y
telnet 192.168.31.44 22
curl
restful 我们所有的资源在网络上中都有唯一的定位
那么我们可以通过这个唯一定位标识指定的资源
http://localhost:8080/lucky/user.action/666
curl -X GET http://www.baidu.com
```

#### 5. 4. 萤火

```
防火墙技术是通过有机结合各类用于安全管理与筛选的软件和硬件设备，帮助计算机网络于其内、
外网之间构建一道相对隔绝的保护屏障，以保护用户资料与信息安全性的一种技术
在centOS7+中 使用firewalld代替以前的 iptables ；
#查看防火墙状态
systemctl status firewalld.service
#临时停止firewall
systemctl stop firewalld.service
#禁止firewall开机启动
systemctl disable firewalld.service
firewall-cmd --state ##查看防火墙状态，是否是
running
firewall-cmd --reload ##重新载入配置，比如添加规则之
后，需要执行此命令
firewall-cmd --get-zones ##列出支持的zone
firewall-cmd --get-services ##列出支持的服务，在列表中的服
务是放行的
firewall-cmd --query-service ftp ##查看ftp服务是否支持，返回
yes或者no
firewall-cmd --add-service=ftp ##临时开放ftp服务
firewall-cmd --add-service=ftp --permanent ##永久开放ftp服务
firewall-cmd --remove-service=ftp --permanent ##永久移除ftp服务
开启一个端口的正确操作
```

#### 5. 5. 加密算法

##### 5. 不炫酷5.

```
firewall-cmd --add-port= 80 /tcp --permanent ##永久添加 80 端口
# 添加
firewall-cmd --zone=public --add-port= 80 /tcp --permanent
#重新载入
firewall-cmd --reload
#查看
firewall-cmd --zone=public --query-port= 80 /tcp
#删除
firewall-cmd --zone=public --remove-port= 80 /tcp --permanent
可以通过数据计算加密后的结果，但是通过结果无法计算出加密数据
应用场景
Hash算法常用在不可还原的密码存储、信息完整性校验。
文档、音视频文件、软件安装包等用新老摘要对比是否一样(接收到的文件是否被修改)
用户名或者密码加密后数据库存储(数据库大多数不会存储关键信息的明文，就像很多登录功
能的忘记密码不能找回，只能重置)
案例
123456
e10adc3949ba59abbe56e057f20f883e
md5(md5(123456))-----md5(654321)
```

##### 5.5.2.加密算法

```
Symmetric Key Encryption
代表性算法叫做 DES、3DES、Blowfish、IDEA、RC4、RC5、RC6和AES
特点
加密和解密使用相同的秘钥
优点
生成密钥的算法公开、计算量小、加密速度快、加密效率高、密钥较短
缺点
双方共同的密钥，有一方密钥被窃取，双方都影响
如果为每个客户都生成不同密钥，则密钥数量巨大，密钥管理有压力
应用场景
登录信息用户名和密码加密、传输加密、指令加密
案例:
原文：今晚八点学校小树林见
密钥： love
7gjM6FhIc89ACoel+jJ3VM26XGAdSlaHTj5NYg4VkKA=
```

##### 5.非加密算法 3.非加密算法

```
Asymmetric Key Encryption
非对称加密算法需要一对密钥(两个密钥)：
公开密钥(publickey)和私有密钥(privatekey)(简称公钥，私钥)。
公开密钥与私有密钥生成时是一对
用公钥加密只能是对应的私钥解密，同理用私钥加密只能用对应的公钥解密。
代表性算法叫做 RSA、ECC、Diffie-Hellman、El Gamal、DSA(数字签名用)
优点：
安全高(几乎很难破解)
缺点
加解密相对速度慢、密钥长、计算量大、效率低
应用场景
HTTPS(ssl)证书里制作、CRS请求证书、金融通信加密、蓝牙等硬件信息加密配对传输、关键
的登录信息验证。
http://tool.chacuo.net/cryptrsaprikey
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjlHREYDiL9p5bAPBsMCy+UIaH
e4MAm7djkuHYW3aGQLgG9Rc1CSRaFeNXBw+llDsnIgBPgoUI4S8N2m87n25zJ5jH
7pEyWoZsAeTgpqJ6fzfciRpGHsawZ+AxVs0PeIvBMVIIZfpP4tIK5WVau7mVt0gy
/bU+PtX35wVymIKy7QIDAQAB
-----END PUBLIC KEY-----
```

#### 5. 6. 主机间的免秘秘

```
可以通过ssh命令免秘钥连接到其他的主机
如果是第一次建立连接，需要输入yes
在 ~/.ssh/known_hosts 文件记录了以前访问地址(ip hostname)的信息
在访问地址的时候如果没有收录到known_hosts文件中，就需要输入yes
如果以前收录到known_hosts中，直接输入密码即可
需要输入密码
生成秘钥
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
如果你想免秘钥登录谁，只需要把自己的公钥传递给对方主机即可
-----BEGIN PRIVATE KEY-----
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAOOUdERgOIv2nlsA
8GwwLL5Qhod7gwCbt2OS4dhbdoZAuAb1FzUJJFoV41cHD6WUOyciAE+ChQjhLw3a
bzufbnMnmMfukTJahmwB5OCmonp/N9yJGkYexrBn4DFWzQ94i8ExUghl+k/i0grl
ZVq7uZW3SDL9tT4+1ffnBXKYgrLtAgMBAAECgYBOkrvNu7bqQ/yKiPl5MOzRzHWW
I0OomxqnC1hkXbe/RGsFI+ueSQi+/Z2fN3XkghgmO6wFx5ds6GpZixgqarIz8z/Z
AixGVx7BgUgAzIZ4OOsm7uLpPs7WEVLWn1I4/59HxnzWX85ShBsfJc4tFb566Bc2
/5SaBurNXlOURFFs9QJBAPUL/qCWZ5JljXEtlLqaumEY54WT6+dJpL0j2bsmvktk
CkMpzqCKy8ymiFPa5FyZDRsZfLQBoHWv7SVKD0wOFMcCQQDtwJcAsOrxWApQ19tr
9wrrv0QB0XPkJjOL85x/I+6Q6CMd2YQs8ze2ex+J45VWtADQYi2VixgmtI9pNmW7
eJ6rAkAe2s/I8KdB67+PjKm5hVoKd9RPIX0GtmMj3avAwPQdEg+ovU7jMBbRQfbQ
eDNg5XSdAOyOzdWie/BkTZr3fJ5pAkEAr9OVGOK97ZxRjboyGRNMfVXdOwRV4YorJ
5j9URkZ5gNrcVY/uixuX4TEvAte3MrbOP03MLmL+imlQAdxD4h/zHwJBANY0vxVf
8tzwPdXcNWK8ZCqmWLR8sDTrzRdwNejBraYb00yEngGy1uALsDNevXtzrRkh8dzV
QI5y+RliuFYWd14=
-----END PRIVATE KEY-----
IpaC8/W8s3UL9wDuz8pRUA3bG3jE0Ch0MqCiVd3LXHBXSDRVckvD20cUEnBkiG0N85NfY6rv
M0iyb4fNkic4BhmLQg6AsV4L8LEIptSwPJwlVqJprqh7MHN+R9y/PekSmpZYAxitTaFFfgJP
DhGYl45TmWLj2vhGoOQy/INK9boy=
今晚八点学校小树林见
这个秘钥要放在 ~/.ssh/authorized_keys
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.58.201
相互面秘钥工作流程
```

#### 5. 7. 主机名与主机标识

```
错误原因:
Cannot determine realm for numeric host
解决方案1--本次
ssh -v -o GSSAPIAuthentication=no root@192.168.189.201
解决方案2--所有
修改/etc/ssh/ssh_config文件的配置，以后则不会再出现此问题
最后面添加：
StrictHostKeyChecking no
UserKnownHostsFile /dev/null
```

### 6. 日期与时间

#### 6. 1. 时间命令

```
查看时区
ll /etc/localtime
/etc/localtime -> ../usr/share/zoneinfo/America/Los_Angeles
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
date
查看当前系统时间
cal 查看日历
cal 2020
修改时间
date -s 11:11:11
date -s 2019-11-11
date -s '2019-11-11 11:11:11'
```

#### 6. 2. 日期自动同步

```
自动同步时间
yum install ntp -y
ntpdate cn.ntp.org.cn
本地搭建NTP服务
开启本地NTP服务器
service ntpd start
# vi /etc/ntp.conf
客户端同步时间
ntpdate 192.168.188.100
```

### 7.用户-组-权限

#### 7. 1. 用户

```
新增用户
useradd luckyboy
会创建同名的组和家目录
设置密码
passwd luckyboy
删除用户
userdel -r luckyboy
级联删除家目录和组
#========权限控制============
restrict default kod nomodify notrap nopeer noquery 拒绝IPV4用户
restrict -6 default kod nomodify notrap nopeer noquery 拒绝IPV6用户
restrict 210.72.145.44 授权国家授时中心服务器访问本地NTP
restrict 133.100.11.8 授权133.100.11.8访问本地NTP
restrict 127.0.0.1
restrict -6 ::1
restrict 192.168.188.2 mask 255.255.255.0 nomodify 本地网段授权访问
#=========源服务器===========
server cn.ntp.org.cn prefer 指定上级更新时间服务器，优先使用这个地址
#=========差异分析===========
driftfile /var/lib/ntp/drift
keys /etc/ntp/keys
修改用户信息
usermod -l luckyss luckyls 修改用户名
家目录和组名称是不会被修改的
usermod -L luckyss 锁定用户名
usermod -U luckyss 解锁用户名
常用文件
cat /etc/shadow
用户名和密码
cat /etc/passwd
用户名，编号,组编号,家目录，命令，目录
6.5系统0-499 普通 500+
7.6系统0-999 普通 1000+
切换账户
su luckyboy
```

#### 7. 2. 组

```
创建组
groupadd lucky
删除组
groupdel lucky
修改组名字
groupmod -n school lucky
查看用户对应的组
groups
groups schoolboy
当我们创建用户的时候，会默认创建一个同名的主组
修改用户的组
usermod -g lucky schoolboy (主组)
usermod -G lucky schoolls (附属组)
```

#### 7. 3. 权限

```
查看文件的权限
drw-r-xr-x 9 n1 m1 4096 Nov 13 00:30 apache-tomcat-7.0.61
三组权限，每组 3 个字母
r :读取权限
w :写入权限
x :执行权限
-:没有权限
root :所属用户(属主)
root：所属的组（属组）
权限的UGO模型
三组权限
属主的权限：属组的权限：其他的权限
所有说：将来修改文件的权限 可以从rwx和ugo两个方面进行修改
修改文件的权限
修改文件所属
chown n1 /var/lucky1
chown n1:m1 /var/lucky2
修改文件夹时，让子目录迭代修改
chown -R n1:m1 school
chgrp m2 lucky3
当用户的组被修改之后，需要重新登录才能获取新组的权限
修改文件的rwx
chmod o+w lucky4
chmod ug+rw lucky4
chmod ugo-rw lucky4
（权限RWX分别对应数字 4 2 1 5= 4+0+1 r-x）
chmod 664 lucky4 ->(rw- rw-r--)
```

#### 4.授权7

```
我们可以将管理用的权限分配给普通用户
文件位置在 vim /etc/sudoers
但是修改这个文件需要使用命令
visudo
修改 Line 99
n1 ALL=(root) /sbin/useradd
n1 ALL=(root) /sbin/*
如何使用
su n1
sudo chkconfig iptables off
```

### 8. 控制器与控制器

#### 8. 1. 管道

```
将前面命令的结果作为参数传递给后面的命令
grep
强大的文本搜索工具
cat profile | grep if
ls / | grep ^t
```

#### 8. 2. 控制器

```
改变数据输出的位置，方向
0 in 1 out 2 err
ls / 1> lucky 标准输出
ls / > lucky 标准输出
ls abcd 2>lucky 错误输出
> 替换 >> 追加
ls / 1>> lucky
ls / 1> lucky
结合使用
ls /etc /abc > lucky 2>&1
ls /etc /abc >> lucky 2>&1
信息黑洞
ls /etc /abc >> /dev/null 2>&1
```

### 9. Linux的系统进程

#### 9. 1. 进程信息

```
ps -ef
UID PID PPID C STIME TTY TIME CMD
UID 所属用户
PID 当前进程编号
PPID 当前进程编号的父进程编号
ps -ef | grep redis
ps -aux
所有信息
ps -aux --sort -pcpu
top
当前服务器内存使用率
```

#### 9. 2. 后台流程

```
只需要在命令的后面添加一个 & 符号
ping http://www.baidu.com >> baidu &
jobs -l
可以查看当前的后台进程
但是只有当前用户界面可以获取到
nohup 可以防止后台进程被挂起
nohup ping http://www.baidu.com >> baidu 2>&1 &
```

#### 9. 3.杀害过程

```
kill -9 17599
```

### 10. Linux的软件安装

#### 10. 1. 环境变量

当执行一个命令的时候，默认我们从当前路径开始查找

如果当前路径找不到的命令，从环境变量$PATH寻找文件

/etc/profile 中的 $PATH 的配置文件

window 路径与路径之间的连接用;(分号)

Linux路径与路径之间用：（冒号）连接

Linux 每次修改完成之后，需要重新加载文件源 /etc/profile

#### 10. 2. 软件的安装方式

```
解压就可以使用
使用安装包安装(window-exe Linux-rpm)
自己下载安装包
使用统一的软件帮助我们安装
通过源码安装
```

#### 10. 3. RPM安装

```
RedHat Package Manager,它属于红帽的一种包管理方式
通过RPM命令安装软件
rpm -ivh jdk-7u67-linux-x64.rpm
可以查询软件
rpm -qa | grep jdk
rpm -q jdk
卸载
rpm -e jdk-1.7.0_67-fcs.x86_64
需要手动配置Java的环境变量
vim /etc/profile
重新加载配置文件
source /etc/profile
```

#### 10. 4. 压缩包解压安装

```
解压文件
tar -zxf apache-tomcat-7.0.61.tar.gz
拷贝到/opt/school目录下
mkdir -p /opt/lucky
cp -r apache-tomcat-7.0.61 /opt/school
启动tomcat
cd /opt/school/apache-tomcat-7.0.61/bin/
./startup.sh
```

#### 10. 5. YUM安装

##### 10. 5. 1. yum的作用

```
可以帮我们管理RPM包
可以帮我们安装软件，
如果软件有其他依赖，会帮我们安装依赖后在安装软件
类似于Maven
```

##### 10. 5. 2. yum 命令

```
search 查询命令或者软件
info
查看包的信息
list / list jdk
查询安装的rpm包，或者只查询某一周
```

##### 10. 5. 3. 更换yum源

```
首先安装wget
yum install wget -y
将系统原始配置文件失效
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
使用Wget获取阿里yum源配置文件
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.r
epo
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.r
epo
清空以前yum源的缓存
yum clean all
获取阿里云的缓存
yum makecache
export JAVA_HOME=/usr/java/jdk1.7.0_67
export PATH=$JAVA_HOME/bin:$PATH
```

#### 10. 6. 安装Mysql数据库

```
Mysql的下载地址
https://downloads.mysql.com/archives/community/
```

### 11. Linux的三剑客

#### 11. 1. 普通剑客

```
cut
用指定的规则来切分文本
cut -d':' -f1,2,3 passwd | grep school
sort
sort lucky
对文本中的行进行排序
sort -t' ' -k2 lucky
#----------安装Mysql依赖【perl net-tools】
yum install perl net-tools -y
#----------卸载mariadb
rpm -qa | grep mariadb
rpm -e --nodeps mariadb-libs-5.5.60-1.el7_5.x86_64
#----------安装mysql
tar -xvf mysql-8.0.18-1.el7.x86_64.rpm-bundle.tar
rpm -ivh mysql-community-common-8.0.18-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-8.0.18-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-8.0.18-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-8.0.18-1.el7.x86_64.rpm
#----------启动mysql
systemctl start mysqld
#----------查找密码并登陆Mysql
cat /var/log/mysqld.log | grep password
mysql -u root -p
#----------修改Mysql密码 8.0版本输入命令：
set global validate_password.policy=LOW;
set global validate_password.length= 6 ;
#更改加密方式
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER;
#更新用户密码
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
#刷新权限
FLUSH PRIVILEGES;
#----------修改Mysql密码 5.7版本输入命令：
set global validate_password_policy=LOW;
set global validate_password_length= 6
alter user root@localhost identified by '123456';
#----------修改Mysql链接地址
use mysql;
update user set host='%' where user = 'root';
commit;
exit;
systemctl restart mysqld;
#----------使用Navicat连接Mysql
对每一行的数据进行切分，按照第二列进行排序
sort -t' ' -k2 -r lucky
逆序
sort -t' ' -k2 -n lucky
按照数值大小进行排序,如果有字母，字母在前
wc
统计单词的数量
wc lucky
4 15 79 lucky
-l line
-w word 以空格来分割单词
-c char
```

#### 11. 2. 剑客 1号：grep

```
可以对文本进行搜索
同时搜索多个文件
从文档中查询指定的数据
grep adm passwd
grep school passwd lucky
显示匹配的行号
grep -n school passwd
显示不匹配的忽略大小写
grep -nvi root passwd --color=auto
使用正则表达式匹配
grep -E "[1-9]+" passwd --color=auto
```

#### 11. 3. 剑客2号：sed

```
sed 是Stream Editor（字符流编辑器）的缩写，简称流编辑器
Sed软件从文件或管道中读取一行，处理一行，输出一行；再读取一行，再处理一行，再输出一
行...
一次一行的设计使得sed软件性能很高
vi命令打开文件是一次性将文件加载到内存
了解即可
https://www.cnblogs.com/chensiqiqi/p/6382080.html
行的选择模式
10 第十行
m,n --> 第m行到第n行 [m,n]
m,+n-->第一行到第四行 [m,m+n]
m~n-->从m行开始，依次累加n
m,$ -->从m开始到最后一行
/school/ -->匹配到school的行
/u1/,/u4/-->从匹配u1到匹配u4
增
sed '2a luckyisgood' passwd
sed '2i luckyisgood' passwd
打印到控制台
sed -i '2a luckyisgood' passwd
直接修改到文件
删
sed '3,10d' passwd
改
整行替换
sed '3,20c hahaha' passwd
sed '3~1c hehehe' passwd
字符替换
sed '1,5s/root/lucky/g' passwd
sed '1,5s#/#-#g' passwd
```

#### 11. 4. 剑客 3 号：awk

```
它不是一个剑客，它是一门语言
了解即可
https://www.cnblogs.com/chensiqiqi/p/6481647.html
模式与动作
awk -F ":" 'NR>=2&&NR<=6' /etc/passwd
awk -F ":" '{print NR,$1}' /etc/passwd
awk -F ":" 'NR>=2&&NR<=6 {print NR,$1}' /etc/passwd
awk -F ":" 'NR==1{print NR,$1}NR==2{print NR,$NF}' /etc/passwd
```