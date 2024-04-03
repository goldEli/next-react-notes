/**
 * link
 */
class LinkNode {
  value;
  next = null;
  constructor(value) {
    this.value = value;
  }
}

class Link {

  head;

  append(value) {

    if (!this.head) {
      this.head = new LinkNode(value);
      return;
    }

    // this.head.next = new LinkNode(value)
    let current = this.head;

    while (current) {
      if (current.next === null) {
        current.next = new LinkNode(value);
        break;
      }
      current = current.next;
    }

  }

  display() {

  }

}

/**

1. 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

key 就是元素的唯一身份，在 diff 的时候, 才知道哪一个移动到了哪里，哪一个被删除了
基于key创建map，用于后续的对比,移动 删除等操作

2. ['1', '2', '3'].map(parseInt) what & why ?

parseInt 有两个参数，第二个参数是基数 10 表示10进制

 */

/**
 
3. 什么是防抖和节流？有什么区别？如何实现？

防抖一般用于实时搜索，n秒后执行，如果在执行前再次触发，则重新计时
节流一般用于刷新按钮的触发频率防止多次点击，设置的时间间隔内只会触发一次，不管你点了几次
 */


function debounce(interval, cb) {
  let timer
  return function () {
    clearTimeout(timer)
    setTimeout(() => {
      cb.apply(this, arguments)
    }, [interval])
  }

}

function throttle(interval, cb) {
  let canRun = true
  return function () {
    if (!canRun) return
    canRun = false
    cb.apply(this, arguments)
    setTimeout(() => {
      canRun = true
    }, [interval])
  }
}

/**
介绍下 Set、Map、WeakSet 和 WeakMap 的区别

Set 类似于数据 我有时会用来去重

Map 储存key value 相对于 Object key类型更多 提供了一个工具方法 比如 set has remove 方便操作

WeakSet WeakMap 弱引用, 避免内存泄漏  

WeakMap 只能用对象作为key ，null除外，不计入垃圾回收
 */

/**
 深克隆
*/

export function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj
}





