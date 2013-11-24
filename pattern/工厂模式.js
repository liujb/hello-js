<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-工厂模式</title>
    </head>
    <body>
    	<h1>设计模式-工厂模式</h1>
    	<script type="text/javascript">
    		window.onload=function(){

                /*
                工厂模式介绍：工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的    时候指定自己的对象类型。这个模式十分有用，尤其是创建对象的流程赋值的时候，比如依赖于很多设置文件等。并且，你会经常在程序里看到工厂方法，用于让子类类定义需要创建的对象类型。

                以下代码是工厂模式？不大好理解。
                */
    			var Car=(function(){
                    var Car=function(model,year,miles){
                        this.model=model;
                        this.year=year;
                        this.miles=miles;
                        this.output=function(){
                            console.log('NIMA!');
                        };
                    };
                    return function(model,year,miles){
                        return new Car(model,year,miles);
                    };
                })();

                var tom = new Car("Tom", 2009, 20000);
                var dudu = new Car("Dudu", 2010, 5000);
                tom.output();

                /*
                稍微好理解了点！
                */
                var factoryManager={};
                factoryManager.productA=function(){
                    console.log('this is A！');
                };
                factoryManager.productB=function(){
                    console.log('this is B！');
                };

                factoryManager.factory=function(productType){
                    return new factoryManager[productType];//真正的工厂方法！
                };

                var a=factoryManager.factory('productA');//调用

                /*
                案例：假如我们想在网页面里插入一些元素，而这些元素类型不固定，可能是图片，也有可能是连接，甚至可能是文本，根据工厂模式的定义，我们需要定义工厂类和相应的子类，
                */

                var page=page||{};
                page.dom=page.dom||{};
                //处理image
                page.dom.image=function(){
                    this.insert=function(where){
                        var img=document.createElement('img');
                        img.src = this.url;        
                        where.appendChild(im);
                    };
                };
                //处理text
                page.dom.text=function(){
                    this.insert=function(where){
                        var txt=document.createTextNode(this.url);
                        where.appendChild(txt);
                    };
                };
                //处理Link
                page.dom.link=function(){
                    this.insert=function(where){
                        var lnk=document.createElement('a');
                        lnk.href=this.url;
                        lnk.appendChild(document.createTextNode(this.url));        
                        where.appendChild(lnk);
                    };
                };
                //定义工厂类
                page.dom.factory=function(elementType){
                    return new page.dom[elementType]
                };             

                //使用方式
                var lnk=page.dom.factory('link');
                lnk.url='http:www.baidu.com';
                lnk.insert(document.body);
    		};
    	</script>
    </body>
</html>