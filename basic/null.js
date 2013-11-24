/*
 * ①只有一个值null
 * ②null值表示一个空对象指针，所以typeof null 返回object（记住！！！）
 * ③如果定义的变量将用于保存对象，那么最好将此变量初始化为null
 */
var obj = null;
console.log("typeof null is: " + typeof obj); //object
console.log("null==false is: " + (null == false));

/*
 * undefined派生自null，但是两者用途却完全不同
 * undefined用于来检测某个变量是否初始化或者是否声明
 * null的作用是，某个需要保存为对象的变量还没有真正保存对象之前，该明确使用null值
 */
console.log(undefined == obj); //true
console.log(undefined === obj); //false