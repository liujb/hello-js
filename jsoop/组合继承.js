<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>组合继承</title>
    </head>
    <body>
        <h1>组合继承</h1>
        <script type="text/javascript">
            window.onload=function(){
                /*
                 * 组合继承指的是将原型链和借用构造函数的技术组合到一起，从而发挥两者之长
                 * 其思想是：使用原型链实现对原型属性和方法的继承，而通过借用构造函数实现对实例属性的继承
                 */
                //父类
                function SuperType(name){
                    this.name=name;
                    this.colors=['red','blue','green'];
                }
                //添加父类原型方法
                SuperType.prototype.sayName=function(){
                    alert(this.name);
                };
                //子类
                function SubType(name,age){
                    //在子类的构造函数内调用父类的构造函数（借用构造函数继承）
                    //使用call方法表示在this作用域内调用SuperType的构造函数
                    SuperType.call(this,name);
                    this.age=age;
                };
                //继承方法
                SubType.prototype = new SuperType();
                //给子类的原型添加方法
                SubType.prototype.sayAge=function(){
                    alert(this.age);
                };
                
                var subType = new SubType('ALLEN',23);
                subType.colors.push('CAONIMA');
                alert(subType.colors);//'red','blue','green',CAONIMA
                subType.sayName();//ALLEN
                subType.sayAge();//23
                
                
                var otherSub = new SubType('GANGBI',23);
                alert(otherSub.colors);//'red','blue','green'
                otherSub.sayName();//GANGBI
                otherSub.sayAge();//23
                
                alert(subType.sayName==otherSub.sayName);//true 他们共享同一个方法
                alert(subType.sayAge==otherSub.sayAge);//true
                
                alert(subType instanceof SubType);//true 
                alert(SuperType.prototype.isPrototypeOf(subType));//true 
                
                var superType = new SuperType('NIMA');
                superType.sayName();//NIMA
                
                
                /*
                 * PS:组合继承避免了原型链以及借用构造函数带来的缺陷，融合了他们的优点，所以常用作js中的继承模式
                 */
            };
        </script>
    </body>
</html>

