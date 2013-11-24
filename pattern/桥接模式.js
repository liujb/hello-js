<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-桥接模式</title>
    </head>
    <body>
    	<h1>设计模式-桥接模式</h1>
        <p>桥接模式（Bridge）将抽象部分与它的实现部分分离，使它们都可以独立地变化。</p>
    	<script type="text/javascript">
    		window.onload=function(){
                //桥接模式最常用在事件监控上，先看一段代码：（模拟）
                addEvent(element,'click',getBeerById);

                function getBeerById(e){
                    var id=this.id;
                    asyncRequest('GET','beer.url?id='+id,function(res){
                        console.log('Requseted Beer: '+res.reqponseText);
                    });
                };
                ////这个函数必须依赖浏览器上下文,所以改造一下，如下：

                function getBeerById(id,callback){
                    asyncRequest('GET','beer.url?id='+id,function(res){
                        callback(res.responseText);
                    });
                };

                addEvent(element,'click',getBeerByIdBridge);
                function getBeerByIdBridge(e){
                    getBeerById(this.id,function(beer){
                        console.log('Requseted beer:'+beer);
                    });
                };
                //这里的getBeerByIdBridge就是我们定义的桥，用于将抽象的click事件和getBeerById连接起来，同时将事件源的ID，以及自定义的call函数（console.log输出）作为参数传入到getBeerById函数里。
    		};
    	</script>
    </body>
</html>