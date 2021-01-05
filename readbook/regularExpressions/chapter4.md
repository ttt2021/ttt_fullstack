# 正则表达式必知必会
# 第四章 使用元字符

- 4.1 再谈转义

- 4.2 匹配空白字符

- 4.3 匹配特定的字符类型
- 4.3.1 匹配数字（与非数字）
  1. \d 任何一个数字字符 等价于[0-9]
  2. \D 任何一个非数字字符 等价于[^0-9]
- 4.3.2 匹配字母数字（与非字母数字）
  1. \w 任何一个字母数字字符或下划线字符 等价于[a-zA-Z0-9_]
  2. \W 任何一个非字母数字字符或下划线字符 等价于[^a-zA-Z0-9_]
- 4.3.3 匹配空白字符 （与非空白字符）
  1. \s 任何一个空白字符 等价于[\f\n\r\t\v]
  2. \S 任何一个空白字符 等价于[^\f\n\r\t\v]
- 4.3.4 匹配十六进制或八进制数值

- 4.4 使用POSIX字符类