<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>测试稳妥构造函数</title>
    </head>
    <body>
        <h1>测试稳妥构造函数</h1>
        <script type="text/javascript">
            window.onload=function(){
                /*
                 * 所谓稳妥对象，就是指没有公共属性，而且其方法也不引用this的对象
                 * 委托对象最适合在一些安全环境中，与寄生模式想类似，但是不同
                 * ①新创建的对象实例不引用this，②不适用new操作符调用构造函数
                 */
                function Person(name,age,job){
                    var o = new Object();
                    //在此处定义私有变量和函数
                    //添加方法
                    o.sayName = function(){
                        alert(name);//注意不是this.name
                    }
                    return o;
                }
                
                var person = Person('ALLEN',23,'Software Engineer');
                person.sayName();
                /*
                 * 变量person保存的就是一个稳妥对象，除了sayName()可以访问其数据成员以外，没有别的代码可以访问器成员
                 * 即使有其他代码给这个对象添加方法或者数据成员，但也不能有别的方法访问其传入到构造函数中的原始数据
                 * 稳妥模式提供的这种安全性，使得其非常适合在某些安全执行环境。
                 */
            };
        </script>
    </body>
</html>

