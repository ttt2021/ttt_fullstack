[面试题 05.01. 插入](https://leetcode-cn.com/problems/insert-into-bits-lcci/)

- 读题
    number N = 1024(10000000000)
    number M = 19(10011)
    number i
    number j
    M 插入 N j->i 位
    return number

- 解题
    1. 暴力 
    - 将整数转换成二进制字符串，并获取其长度
        var a = N.toString(2)
    - 计算插入的长度
        var len = Math.abs(i - j) + 1
    - 分两大类进行插入
        - 若插入的字符串长度小于填充长度时，需要给插入的字符串前面添上相差长度的0
          然后对其分两种情况：
            (1) 若从下标为0开始插入时，将字符串N切割成两个子串，然后将需插入的字符串M与字符串N的后一段子串相连接
                insertA = a.slice(0, lena - j)
                rightA = a.slice(lena - j)
                result = b.concat(rightA)
            (2) 若不从下标为0开始插入时，则将字符串N切割成三个子串，然后将第一个子串与需插入的字符串相连接，然后再与第三个子串项相连接
                leftA = a.slice(0, lena - j - 1)
                insertA = a.slice(lena - j, lena - i)
                rightA = a.slice(lena - i)
                result = leftA.concat(b).concat(rightA)
        - 若被插入的字符串长度比最大的比特位小时，现将被插入字符串进行填充，然后将其切割成两个子串，插入字符串与第二个子串相连接
    - 将插入后的二进制字符串转换成十进制整数
        parseInt(result, 2)

    2. 函数使用
    - 将十进制整数转成二进制字符串，然后再将其分割成字符串数组，并将其进行翻转
    - 循环比特位所在的数组元素，将需要插入的数组元素通过判断其是否存在进行插入，若存在，则插入需要插入的数组元素，若不存在，则用0填充
    - 插入完成后，先将字符串数组翻转，然后转成字符串，并去除字符之间的逗号
    - 最后将处理好的二进制字符串转成十进制的整数