/**
 * 对所有基本包装类型的实例调用 typeof都会返回 object
 * 所有基本包装类型的实例在布尔环境中都会转化成true
 * 使用new String("msg");创造的是object对象，而使用var str = "msg";创造的是string对象
 */
var ss = new String('ss');
ss.Color = 'Green';
console.log("ss.Color: " + ss.Color); //Green
console.log("typeof new String('sss'): " + typeof ss); //object
console.log("strObj instanceof Object: " + (ss instanceof Object));
console.log("strObj instanceof String: " + (ss instanceof String));

var ss = 'ssss';
ss.color = 'xxxx';
console.log("'ss'.color: " + ss.color); //undefined
console.log("'ss'.instanceof Object: " + (ss instanceof Object));
console.log("'ss'.instanceof String: " + (ss instanceof String));


/**
 * 引用类型于基本操作类型的主要区别在于对象的生存期。
 * 使用new操作符创建的实例在执行流离开当前作用域之前一直存在内存中
 * 而自动创建的基本包装类型的“对象”，只存在于一行代码执行的瞬间，然后立刻被销毁
 */
var ss = new String('Hello,String!');
ss.color = 'red';
console.log("new String('Hello,String!'): " + ss); //let me fuck you!
ss = null;
console.log('After ss = null,ss is: ' + ss); //null