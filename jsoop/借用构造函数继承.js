<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>借用构造函数实现继承</title>
    </head>
    <body>
        <h1>借用构造函数实现继承</h1>
        <script type="text/javascript">
            window.onload=function(){
                /*
                 * 背景：原型链的问题
                 * ①之前介绍过，包含引用类型的原型属性会被所有实例共享，这也是为什么在构造函数中，而不是在原型对象中定义属性的原因
                 * 在通过原型进行继承时，原型实际上变成了另一个类型的实例（SubType.prototype=new SuperType()）于是原先的实例属性就顺理成章的变成了原型属性！
                 * ②在创建子类型的时候，没有办法向超类型传递参数
                 
                 //父类
                function SuperType(){
                    this.colors=['red','blue'];
                };
                //子类
                function SubType(){};
                //子类继承父类
                SubType.prototype=new SuperType();
                
                var sub1 = new SubType();
                sub1.colors.push('nima');
                alert(sub1.colors);//'red','blue','nima'
                
                var sub2 = new SubType();
                alert(sub2.colors);//'red','blue','nima'
                */
               
                /*
                 * 借用构造函数继承的思想：在子类的构造函数内部调用超类的构造函数
                 * 如下代码：
                 
                function SuperType(){
                    this.colors=['red','blue','green'];
                };
                function SubType(){
                    //继承了SuperType
                    //使用call方法表示在this作用域内调用SuperType
                    SuperType.call(this);
                };
                
                var sub1 = new SubType();
                sub1.colors.push('nima');
                alert(sub1.colors);//'red','blue','green','nima'
                var sub2 = new SubType();
                alert(sub2.colors);//'red','blue','green'
                */
                
                /*
                 * 使用借用构造函数模式向超类传递参数
                 */
                function SuperType(name){
                    this.name=name;
                };
                function SubType(name){
                    SuperType.call(this,name);
                    this.age=23
                };
                
                var sub = new SubType('ALLEN');
                alert(sub.name);//ALLEN
                
                /*
                 * 借用构造函数的问题：①方法都在构造函数中定义，没有函数复用；②超类原型中定义的函数对子类而言不可见
                 * 所以借用构造函数模式很少单独用于继承
                 */
            };
        </script>
    </body>
</html>

