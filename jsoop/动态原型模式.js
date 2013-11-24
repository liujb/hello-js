<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>动态原型模式</title>
    </head>
    <body>
        <h1>动态原型模式</h1>
        <script type="text/javascript">
            window.onload=function(){
                /*
                 * 动态原型模式 把所有的信息都封装在构造函数中，而通过在构造函数中初始化原型（必要时）
                 * 同时又使用了构造函数和原型的有点。换句话说可以通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型
                 * 如下代码：
                 */
                function Person(name,age,job){
                    //Property
                    this.name=name;
                    this.age=age;
                    this.job=job;
                    
                    //method
                    if(typeof this.sayName != "function"){
                        Person.prototype.sayName=function(){
                            alert(this.name);
                        };
                    }
                    
                }
                var person = new Person('Allen',23,'software engineer');
                person.sayName();
                
                /*
                 * 这里对原型的修改可以立即反映到所有实例中，因此这种方法非常完美。
                 * 其中if语句检查的可以是初始化之后应该存在的任何属性和方法--不必用一大堆if语句检查每个属性和每个方法（不大明白！）
                 * 在使用动态原型模式时，不能使用对象字面量来重写原型。
                 */
            };
        </script>
    </body>
</html>

