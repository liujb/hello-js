<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-迭代器模式</title>
    </head>
    <body>
    	<h1>设计模式-迭代器模式</h1>
        <h2>介绍</h2>
        <P>
        迭代器模式(Iterator)：提供一种方法顺序一个聚合对象中各个元素，而又不暴露该对象内部表示。<br />
 
        迭代器的几个特点是：
        1.访问一个聚合对象的内容而无需暴露它的内部表示。
        2.为遍历不同的集合结构提供一个统一的接口，从而支持同样的算法在不同的集合结构上进行操作。
        3.遍历的同时更改迭代器所在的集合结构可能会导致问题（比如C#的foreach里不允许修改item）。
        </P>
    	<script type="text/javascript">
    		window.onload=function(){
                var test=(function(){
                    return {
                        test:function(){
                            alert('OK');
                        }
                    };
                }());
                test.test();

    			var app=(function(){
                    var index=0
                        ,data=[1,2,3,4,5,6]
                        ,length=data.length;
                    return {
                        hasNext:function(){
                            return index<length;
                        },
                        next:function(){
                            if(!this.hasNext()){
                                return null;
                            }
                            var item=data[index];
                            index=index+1;
                            return item;
                        },
                        rewind:function(){
                            index=0;
                        },
                        current:function(){
                            return data[index];
                        }
                    };
                }());

                /**/
                while(app.hasNext()){
                    console.log(app.next());
                }


    		};
    	</script>
    </body>
</html>