---
layout: post
category: notes
title:  "linux shell编写 常用命令"
tags: [linux]
---

* [1. 数值计算](#calcnum)
* [2. 日期](#date)
* [3. 字符串](#string)
<!-- more -->

# 数值计算   {#calcnum}

## 加 减 乘 除
~~~ shell

r=`expr 4 \* 5` #乘法需转译   
r=$(( 4 * 5 ))  
r=$[ 4 * 5 ]  
n=10  
let m=n*10  
echo $r

~~~


## 求余数

r=$[ 100 % 43 ]  
let r=m%7  
echo $r  

## 乘幂 (如 2 的 3 次方)

r=$(( 2 ** 3 ))  
r=$[ 2 ** 3 ]  
let r=m**2  
echo $r  
注：expr 沒有乘幂  

虽然Bash shell 有四种算术运算方法，但并不是每一种都是跨平台的，建议使用expr。

# 日期   {#date}

date +%s 输出当前时间戳

date -d "11:22:54" 获取指定时间


# 字符串处理   {#string}

## 字符串判空

if [ -z "$str" ] （-n 为非空）

## 字符串截取

lastLog="zifuchuanjiequtest"
${lastLog:0:8}

[参考博客连接](http://www.cnblogs.com/xwdreamer/p/3823463.html)

</span>
