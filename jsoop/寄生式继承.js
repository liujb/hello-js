<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>寄生式继承</title>
    </head>
    <body>
        <h1>寄生式继承</h1>
        <script type="text/javascript">
            window.onload=function(){
                
                /*
                 * 寄生式继承于原型式思路继承紧密相关
                 * 创建一个用于封装继承过程的函数，该函数在内部以某种方式来增强对象。
                 */
                
                //此函数不是必须的，这就是原型式继承的核心函数
                function object(obj){
                    function Fun(){};
                    Fun.prototype=obj;
                    return new Fun();
                }
                
                //创建对象，并增强对象
                function createAnther(original){
                    var clone = object(original);//让original对象作为新返回对象的原型对象
                    clone.sayHi=function(){
                        alert('Hi');
                    };
                    return clone;
                }
                
                //创建一个对象
                var person = {
                    name:'ALLEN',
                    friends:['ALLEN','GEEEN']
                };
                
                //otherPerson不仅具有person的所有属性和方法还有自己的方法sayHi()
                var otherPerson = createAnther(person);
                
                otherPerson.friends.push("ALLEN2");
                alert(person.friends);//'ALLEN','GEEEN','ALLEN2'
                alert(otherPerson.friends);//'ALLEN','GEEEN','ALLEN2' 还是会共享原型属性
                otherPerson.sayHi();//hi
                
                /*
                 * PS:在主要考虑对象而不是自定义类型和构造函数的情况下，寄生式继承也是一种有用的模式！
                 * 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率，这一点与构造函数类似！
                 */
            };
        </script>
    </body>
</html>

