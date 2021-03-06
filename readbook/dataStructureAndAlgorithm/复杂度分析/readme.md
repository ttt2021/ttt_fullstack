## 复杂度(渐进复杂度)分析 ————————— 时间复杂度、空间复杂度

- 复杂度 -------- 用来分析算法执行效率与数据规模之间的增长关系

- 时间复杂度(渐进时间复杂度)表示方法 ------- 代码执行时间随数据规模增长的变化趋势
  1. 所有代码的执行时间 T(n) 与 每行代码的执行次数 n 成正比
  2. T(n) = O(f(n))
    - T(n) 代码执行的时间
    - n 数据规模的大小
    - f(n) 每行代码执行的次数总和
    - O 代码执行的时间T(n)与f(n)表达式成正比

- 如何分析时间复杂度
  1. 只关注循环执行次数最多的一段代码  忽略常量、低阶、系数
  2. 加法法则：总复杂度 = 量级最大的那段代码的复杂度
  3. 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积

- 几种常见时间复杂度量级
  - 多项式量级
    1. 常量阶      O(1)
      一般情况下，只要算法中不存在循环语句、递归语句，其时间复杂度是O(1)
    2. 对数阶      O(logn)
    3. 线性阶      O(n)
    4. 线性对数阶   O(nlogn)  归并排序、快速排序
    5. 平方阶 O(n^2)、立方阶 O(n^3)、…… 、K次方阶 O(n^k)  
  - 非多项式量级   np算法问题
    6. 指数阶 O(2^n)
    7. 阶乘阶 O(n!)

- 空间复杂度(渐进空间复杂度)分析 --------- 算法的存储空间与数据规模之间的增长关系

- 复杂度分析法则
  1. 单段代码看高频
  2. 多段代码取最大
  3. 嵌套代码求乘积
  4. 多个规模求加法


- 最好情况时间复杂度
  在最理想的情况下，执行这段代码的时间复杂度

- 最坏情况时间复杂度
  在最糟糕的情况下，执行这段代码的时间复杂度

- 平均情况时间复杂度 (加权平均时间复杂度/期望时间复杂度)
  代码在不同情况下复杂度出现量级差别，则用代码所有可能情况下执行次数的加权平均值表示

- 均摊时间复杂度(摊还分析法)
  1. 代码在绝大多数情况下是低级别复杂度，只有极少数情况是高级别复杂度
  2. 低级别和高级别复杂度出现具有时序规律，均摊结果一般都等于低级别复杂度

- find() 函数和 insert() 函数的区别
  1. find() 函数在极端情况下，复杂度才为 O(1)
    insert() 函数在大部分情况下，时间复杂度都是 O(1)，只有个别情况下，复杂度才比较高，为 O(n)
  2. insert() 函数 O(1)时间复杂度的插入和O(n)时间复杂度的插入出现的频率是非常有规律的，有一定的前后时序关系，一般都是一个O(n)插入之后紧跟着一个n-1个O(1)插入操作