<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>寄生组合继承</title>
    </head>
    <body>
        <h1>寄生组合继承：寄生式继承以及组合（原型链和借用构造函数继承）继承两种方式的结合</h1>
        <script type="text/javascript">
            window.onload=function(){
                /*
                 * 前面说过组合继承是js里最常见的继承方式，不过他也有自己的不足：无论在什么情况下，都会调用两次超类的构造函数
                 * ①在创建子类原型的时候②在子类构造函数内不
                 * 如下代码 
                 */
                //超类
                /*function SuperType(name){
                    this.name=name;
                    this.friends=['ALLEN','LAMEJ'];
                }
                //添加超类原型方法
                SuperType.prototype.sayName=function(){
                    alert(this.name);
                };
                //子类
                function SubType(name,age){ 
                    //第二次调用父类构造函数
                    SuperType.call(this,name);//借用构造函数模式 进行继承 
                    this.age = age;
                }
                SubType.prototype = new SuperType();//第一次调用父类构造函数（因为创建对象会先初始化原型）
                SubType.prototype.sayAge=function(){
                    alert(this.age);
                };
                var sub = new SubType('ALLEN',23);
                sub.friends.push('NIMA');
                var sub2 = new SubType('ALLEN2',23);
                alert(sub.friends);//没被共享
                alert(sub2.friends);*/
                
                /*
                 * 分析此继承过程，在第一次调用SuperType()时，会在SubType.prototype上面创建两个属性 name，friends（而这两个属性都是来自超类）
                 * 而第二次调用SuperType() 时，会在SubType的实例如sub上面创建两个实例属性 name,friends（这两个属性来源于超类的实例属性）
                 * 结果就是sub有两种name，colors 一组在SubType的原型上，一组在实例上
                 * 为了解决这一问题，寄生组合继承应运而生！！！！
                 */
                
                /*
                 * 寄生组合继承：通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。
                 * 背后的基本思路：不必为了指定子类的原型而调用超类的构造函数，我们需要的无非就是超类原型的一个副本而已！
                 * 本质上就是使用【寄生式继承】来继承【超类型的原型】，然后将结果指定给子类型的原型！
                 * 如下代码：
                 * */
                function object(obj){
                    function Fun(){};
                    Fun.prototype=obj;
                    return new Fun();
                };
                
                function inheritPrototype(subType,superType){
                    var prototype = object(superType.prototype);//创建对象
                    prototype.constructor=subType;//增强对象
                    subType.prototype=prototype;//指定对象
                };
                 //超类
                function SuperType(name){
                    this.name=name;
                    this.friends=['ALLEN','LAMEJ'];
                }
                //添加超类原型方法
                SuperType.prototype.sayName=function(){
                    alert(this.name);
                };
                //子类
                function SubType(name,age){ 
                    //第二次调用父类构造函数
                    SuperType.call(this,name);//借用构造函数模式 进行继承 
                    this.age = age;
                }
                inheritPrototype(SubType,SuperType);
                SubType.prototype.sayAge=function(){
                    alert(this.age);
                };
                
                var sub = new SubType();
                var sub1 = new SubType();
                sub.friends.push('AAA');
                alert(sub.friends);
                alert(sub1.friends);
                alert(sub instanceof SubType);//true
                alert(sub instanceof SuperType);//true
                alert(SubType.prototype.isPrototypeOf(sub));//true
                alert(SuperType.prototype.isPrototypeOf(sub));//true
                
                /*
                 * PS:这种模式的高效体现在只调用一次SuperType的构造函数，并且避免了在SubType.prototype上创建不必要的多余的属性
                 * 与此同时原型链还能不变！
                 * 还可以使用instanceof 和 isPrototypeOf
                 * 所以这才是引用类型最理想的继承范式！！！！
                 */
            };
        </script>
    </body>
</html>

