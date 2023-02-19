
function FiberNode(
    tag:string,
    pendingProps:string,
    key:null|string,
    mode:string
){
    //作为静态的数据结构的属性
    this.tag = tag;  //fiber对应的组件类型function/class/host
    this.key = key;  //key属性
    this.elementType =null; // 大部分情况同type，某些情况不同，比如FunctionComponent使用React.memo包裹
    this.type =null;// 对于 FunctionComponent，指函数本身，对于ClassComponent，指class，对于HostComponent，指DOM节点tagName
    this.stateNode = null; // Fiber对应的真实DOM节点

    //用于连接其他Fiber节点，形成fiber树
    this.return =null;  //指向父级的fiber节点
    this.child =null;  //指向子fiber
    this.sibling =null;  //指向右边第一个兄弟的fiber
    this.index =0;

    this.ref = null;

    //作为动态的工作单元的属性  // 保存本次更新造成的状态改变相关信息
    this.pendingProps = pendingProps;
    this.memoizedProps = null;
    this.updateQueue = null;
    this.memoizedState =null;
    this.dependencies = null;

    this.mode = mode;

    this.effectTag = 'NoEffect';
    this.nextEffect = null;

    this.firstEffect =null;
    this.lastEffect =null;

    //调用优先级相关
    this.lanes = 'NoLanes';
    this.childLanes = 'NoLanes';

    //指向该fiber树在下一次更新对应的fiber树
    this.alternate = null
}
