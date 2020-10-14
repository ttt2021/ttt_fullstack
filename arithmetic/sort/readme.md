# javaScript 排序算法

1. 插入排序
- 工作原理
    通过构建有序序列，从后向前扫描已排序的序列，将未排序的数据插入所找的位置。在实现上，采用in-place排序(只需要使用O(1)的额外空间排序)
- 思想与实现
    (1) 从第一个元素开始，第一个元素默认已经被排序
    (2) 取出下一个元素，从排好序的元素序列后面向前扫描
    (3) 比较所扫描到的元素与新元素的大小，若大于新元素，则将所扫描到的元素向后移一位
    (4) 循环重复步骤(3)，直到找到已排序的元素小于或等于新元素
    (5) 将新元素插入到找到元素的后面
    (6) 重复执行步骤(2) ~ 步骤(5)
- 算法分析
    (1) 最佳情况  输入数组按升序排列  T(n) = O(n)
    (2) 最坏情况  输入数组按降序排列  T(n) = O(n2)
    (3) 平均情况  T(n) = O(n2)
    (4) 稳定性    稳定