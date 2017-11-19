---
layout: post
category: tutorial
title:  "极简教程 | 8分钟搭建自己的海外私有VPN服务器"
tags: [vpn]
---
本教程介绍如何使用海外VPS搭建VPN服务器。无需任何命令，不需要懂技术，完全傻瓜式操作，任何人都可以看懂。

<!-- more -->

海外VPS服务商很多，当然也可以选择国内云服务商的海外服务器，但是国内的价钱很贵，国内一个月的价钱在国外可以租用将近一年。所以本教程中选择的VPS服务商是 
[https://bandwagonhost.com][1]
如果上述地址无法访问，可以尝试下面的镜像地址
[ https://bwh1.net ][2]
打开上述地址后可看到一个上世纪90年代风格的网页，点击register进入注册页面注册一个账号。
![][image-1]
注册账号大家肯定都会
![][image-2]
填写完基本信息后，需要输入验证码勾选协议然后提交，验证码那里需要注意的是这个网站验证码API使用的是谷歌的，所以如果你刷不出来验证码的话，呃，你可能需要一个VPN，国内某些VPN提供商有限时免费的账号，大家可以暂时使用把验证码刷出来。
![][image-3]
然后使用新注册的账号登录网站，购买最便宜的VPS。  
![][image-4]
购买流程大同小异，我这里购买的是一年。
![][image-5]
![][image-6]
然后付款就好了，这个网站支持支付宝，一年20刀很便宜。
![][image-7]
支付完成后，去服务器管理页面，进入服务器控制台。
![][image-8]
![][image-9]
点击控制台最下方的Shadowsocks Server，安装ss服务器
![][image-10]
安装完ss服务器之后就可以在控制台看到VPN的相关信息了。然后配置自己电脑上的小飞机就可以科学上网了。
![][image-11]
不会配置小飞机的也没关系，在上面那个页面下方就有小飞机的使用说明。


以上就是简单的配置一下就可以搭建自己的VPN实现科学上网的方法。大家可以看到我们全程都没有登录我们购买的VPS，也没有任何linux命令，不需要任何服务器配置。这个网站貌似就是为搭VPN而生的，这也是我为什么选择这个VPS服务商写这个教程的原因，因为选择这个VPS服务商，不懂技术的人也可以一步步配置出自己的VPN。

好了，教程方面我就写完了，接下来就是吐槽时间了。

在国内想上网都得费死劲这个事我就不吐槽了，谁叫咱生活在长城内呢！但是！某些VPN服务商也太烂了，去年年初我刚把我在海外的服务器停了，改用国内的VPN服务商的服务，我买了两年的VPN服务，按理应该在明年的春天我的VPN服务才到期，结果今天我发现不但VPN服务用不了了，连服务商的官网都踏马没了。

国内这些厂商果然还是不靠谱啊，我还是回归到老方法自己搭VPN用啊！

最后，还是放上1987年9月20日20点55分中国用互联网向世界发出的第一封电子邮件的内容：

Across the Great Wall we can reach every corner in the world.

![][image-12]  



[1]:	[https://bandwagonhost.com] "[https://bandwagonhost.com]"
[2]:	https://bwh1.net

[image-1]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn1.jpg
[image-2]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn2.jpg
[image-3]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn3.jpg
[image-4]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn4.jpg
[image-5]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn5.jpg
[image-6]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn6.jpg
[image-7]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn7.jpg
[image-8]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn8.jpg
[image-9]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn9.jpg
[image-10]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn10.jpg
[image-11]:	http://ojtm3l2wh.bkt.clouddn.com/image/vpn11.jpg
[image-12]:	http://ojtm3l2wh.bkt.clouddn.com/weixin/qrcode.jpg
