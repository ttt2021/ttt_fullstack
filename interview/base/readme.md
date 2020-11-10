# 原始类型有几种？
六种，boolean null undefined number string symbol

# null 是对象吗？
是，例外，使用typeof(null)检测是否是对象
000 代码代表的是对象，null 的二进制都是0，所以 null 判断会被判断成对象

# 精度丢失

# 原始类型和对象类型有什么差别？
原始类型存的是值，而对象类型存的是地址(指针)

# typeof能正确判断的类型是？
typeof 只能判断原始类型，null 除外
instanceof 只能判断引用类型

# instanceof 原理

# 类型转换
转为布尔值
转为数字
转为字符串
- 对象转原始值
    对象在转类型的时候回调用内置的 [[ToPrimitive]]
    - 如果已经是原始类型，那就不用转换了
    - 如果不是原始类型，则需要先调用 x.valueOf() 方法，调用完后，若转为了基础类型，就返回值，否则就调用 x.toString()，调用完后，若转为了基础类型，就返回值，若还没有转为原始类型就报错

# 四则运算
加法：运算中其中一方为字符串，另一方一定会转换成字符串，如果一方不是数字或字符串，那就会将它转换成数字或字符串进行运算
除加法外的运算，只要其中一方是数字，另一方一定会转为数字来运算