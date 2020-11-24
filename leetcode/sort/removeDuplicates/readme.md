[26. 删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

- 读题
    number[] nums 
    原地删除重复项
    返回移除后的新长度

- 解题 
    1. 方法一
    - 判断数组元素是否是同一个元素，若是，则删除除第一个元素之外的元素，若不是，则遍历该数组
    - 遍历数组时，首先判断该元素与数组末尾元素是否相同，若相同，则删除该元素之后的所有元素，并跳出循环，若不相同，则使用双指针进行遍历
    - 若该元素与下一个元素相等时，右指针往后挪一位，并且统计个数+1
    - 若该元素与下一个元素不相等时，判断其统计个数是否为0，若为0，则左右指针均向后移一位，若不为0时，则删除数组中左指针之后个数为统计个数的元素，并将数组元素的长度-统计个数，右指针指向左指针后一位，统计个数初始化为0，判断结束后左右指针向后挪一位
        ```
        nums.splice(i + 1, len - 1) // 第一个元素表示从何处添加/删除，第二个元素表示删除多少元素
        ```
    - 遍历结束后，返回数组的长度

    2. 方法二：双指针
    - 左指针指向下标0，右指针指向下标1
    - 遍历数组，若右指针指向的元素不等于左指针指向的元素，则左指针往后移一位，并将右指针指向的元素赋值给左指针指向的元素，遍历
    - 遍历结束后，返回左指针指向的下标+1