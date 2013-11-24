<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>原型式继承</title>
    </head>
    <body>
        <h1>原型式继承</h1>
        <script type="text/javascript">
            window.onload=function(){
                /*
                 * 原型式继承的思想：基于已有的对象创建新对象，同时还不比创建自定义类型
                 * 要求：你必须有一个对象可以作为另一个对象的基础。
                 * 缺点：跟原型模式一样，包含引用类型的属性始终都会被共享
                 */
                function object(obj){
                    function Fun(){};
                    Fun.prototype=obj;
                    return new Fun();//注意此处返回的是new Fun()
                }
                
                var person={
                    name:'ALLEN',
                    friends:['SBGANG','LAOMAO']
                };
                
                var otherPerson = object(person);
                otherPerson.name='NIMAYA';
                otherPerson.friends.push('JIZONG');
                
                alert(otherPerson.name);//NIMAYA
                alert(otherPerson.friends);//'SBGANG','LAOMAO','JIZONG'
                alert(person.friends);//'SBGANG','LAOMAO','JIZONG' 共享了！！！
                
            };
        </script>
    </body>
</html>

