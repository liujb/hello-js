<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>单例模式</title>
    </head>
    <body>
        <h1>单例模式</h1>
        <script type="text/javascript">
            window.onload=function(){
                
                /*
                 * ①对象字面量就是一个单例模式
                 */
                var mySingleton1 = {    
                    property1: "something",    
                    property2: "something else",    
                    method1: function () {        
                        console.log('hello world');    
                    }
                 };
                
                /*
                 * ②要扩展该对象，你可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。只暴露你想暴露的public成员和方法
                 */
                var mySingleton2=function(){//使用闭包
                    var privateVar='this is private variable';
                    function showVar(){
                        alert(privateVar);
                    };
                    
                    //公有变量和方法，可以访问私有变量
                    return {//返回对象
                        publicMethod:function(){
                            showVar();
                        },
                        publicProp:'this is public property'
                    };
                };
                
                var single2=mySingleton2();
                var otherSingle2=mySingleton2();
                
                alert(single2==otherSingle2);//false 这真的是单例吗？？
                /*alert(single2.publicMethod==otherSingle2.publicMethod);//false
                alert(single2===otherSingle2);//false
                alert(single2.constructor==Object);//true
                alert(single2.constructor==mySingleton2);//false
                single2.publicMethod();//this is private variable*/
                
               /*
                * ③上面的代码很不错了，但如果我们想做到只有在使用的时候才初始化，那该如何做呢？为了节约资源的目的，我们可以另外一个构造函数里来初始化这些代码
                */
               var mySingleton3=(function(){
                   
                   var instance;//单例容器
                   //私有变量和方法
                   var privateVar='this is private variable';
                   function showVar(){
                       alert(privateVar);
                   };
                   //定义单例
                   function init(){
                       return {
                           publicProp:'this is public variable',
                           publicMethod:function(){
                               showVar();
                           }
                       };
                   };
                   //定义外部接口
                   return {
                       getInstance:function(){
                           if(null==instance){
                               instance=init();
                           }
                           return instance;
                       }
                   };
               })();
               
               /*
               var single3 = mySingleton3.getInstance();
               var otherSingle3 = mySingleton3.getInstance();
               alert(single3===otherSingle3);//true，这才是真的单例！！！
               single3.publicMethod();//this is private variable 
               single3.showVar();//error*/
               
               /*
                * ④其实单例一般是用在系统间各种模式的通信协调上，下面的代码是一个单例的最佳实践：
                */
                var singleton=(function(){
                    //传递给单例的一个参数集合
                    function Singleton(args){
                        var args=args||{};
                        this.name='singleton';
                        this.func=function(){
                            alert('the method of single!');
                        };
                    }
                    
                    var instance;//实例容器
                    var _static={
                        //获取实例的方法        
                        //返回Singleton的实例
                        getInstance:function(args){
                            if(null==instance){
                                instance=new Singleton(args);
                            }
                            return instance;
                        }
                    };
                    return _static;//返回对象
                })();
                
                /*
                var single4 = singleton.getInstance();
                var otherSingle4 = singleton.getInstance();
                alert(single4===otherSingle4);//true
                alert(single4.name);//singleton
                single4.func();//'the method of single!'*/
                
            };
        </script>
    </body>
</html>

