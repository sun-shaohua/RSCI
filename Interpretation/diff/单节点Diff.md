### 单节点Diff
> 前言: react diff的入口方法是reconcileChildFiber,进行判断是单节点diff还是多节点diff

#### 判断调节
```javascript
const isObject  = typeof newChild  === 'object' && newChild !== null;
```
#### 点节点Diff方法
```javascript
const reconcileSingleElement = (returnFiber,currentFirstChild,element)=>{
    
}
```
从代码可以看出，React通过先判断key是否相同，如果key相同则判断type是否相同，只有都相同时一个DOM节点才能复用。

这里有个细节需要关注下：

当child !== null且key相同且type不同时执行deleteRemainingChildren将child及其兄弟fiber都标记删除。

当child !== null且key不同时仅将child标记删除。
