<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>测试寄生构造函数模式</title>
    </head>
    <body>
        <h1>测试寄生构造函数模式</h1>
        <script type="text/javascript">
            window.onload=function(){
                /*
                 * 这种模式的思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码
                 * 除了使用构造函数以外，这种模式其实跟工厂模式一模一样
                 */
                function Person(name,age,job){
                    var obj = new Object();
                    obj.name=name;
                    obj.age=age;
                    obj.job=job;
                    obj.sayName=function(){
                        alert(this.name);
                    };
                    
                    return obj;
                };
                
                var person = new Person('ALLEN',23,'Software Engineer');
                //var person = Person('ALLEN',23,'Software Engineer');
                person.sayName();
                
                /*
                 * 这种模式的好处是 可以在特殊情况下用来为对象创建构造函数，假设我们想创建一个具有额外方法的特殊数组
                 */
                function SpecialArray(){
                    var arr = new Array();
                    //添加值
                    arr.push.apply(arr,arguments);
                    //添加方法
                    arr.toPipedString=function(){
                        return this.join('|');
                    };
                    return arr;//返回对象
                };
                
                var arr = new SpecialArray('red','bule');
                alert(arr.toPipedString());
                
                /*
                 * 关于寄生模式：返回的对象与构造函数或者与构造函数的原型没有任何关系
                 * 不能依赖instanceof来确定对象类型
                 */
                alert(arr instanceof Array);//true
            };
        </script>
    </body>
</html>

