<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-代理模式</title>
    </head>
    <body>
    	<h1>设计模式-代理模式</h1>
    	<script type="text/javascript">
        //代理，顾名思义就是帮助别人做事，GoF对代理模式的定义如下：
        //代理模式（Proxy），为其他对象提供一种代理以控制对这个对象的访问。
        //代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西。

    		window.onload=function(){
    			var wife=function(name){
                    this.name=name;
                };

                var husband=function(wife){
                    this.wife=wife;
                    this.sendGift=function (gift) {
                        alert('Hi '+wife.name+' 你老公給你送礼物了！'+gift);
                    }
                };

                var proxy=function(girl){
                    this.girl=girl;
                    this.sendGift=function (gift) {
                        (new husband(girl)).sendGift(gift);
                    }
                };

                var _proxy=new proxy(new wife('余尚容'));
                _proxy.sendGift('999朵玫瑰');
    		};
    	</script>
    </body>
</html>