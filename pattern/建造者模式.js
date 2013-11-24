<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-建造者模式</title>
    </head>
    <body>
    	<h1>设计模式-建造者模式</h1>
    	<script type="text/javascript">
    		window.onload=function(){
    			/*
    			① 构造着模式的介绍：
    			在软件系统中，有时候面临着“一个复杂对象”的创建工作，其通常由各个部分的子对象用一定的算法构成；由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法确相对稳定。如何应对这种变化？如何提供一种“封装机制”来隔离出“复杂对象的各个部分”的变化，从而保持系统中的“稳定构建算法”不随着需求改变而改变？这就是要说的建造者模式。
    			*/
    			function getBeerById(id,callback){
    				//根据id异步获取数据
    				asyncRequest('GET', 'beer.uri?id=' + id, function (res) {
    					callback(res.responseText);//callback调用response对象
    				});
    			};

    			var el=document.querySeletor('#test');
    			el.addListener('Click',getBeerByIdBridge,false);

    			function getBeerByIdBridge(e){
    				getBeerById(this.id,function(beer){
    					console.log('Response Data:'+beer);
    				});
    			};

    			/*
    			② 小結：建造者模式主要用于“分步骤构建一个复杂的对象”，在这其中“分步骤”是一个稳定的算法，而复杂对象的各个部分则经常变化，其优点是：建造者模式的“加工工艺”是暴露的，这样使得建造者模式更加灵活，并且建造者模式解耦了组装过程和创建具体部件，使得我们不用去关心每个部件是如何组装的。
    			*/
    		};
    	</script>
    </body>
</html>