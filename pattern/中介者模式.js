<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-中介者模式</title>
    </head>
    <body>
    	<h1>设计模式-中介者模式</h1>
        <p>
        中介者和观察者
 
到这里，大家可能迷糊了，中介者和观察者貌似差不多，有什么不同呢？其实是有点类似，但是我们来看看具体的描述：
观察者模式，没有封装约束的单个对象，相反，观察者Observer和具体类Subject是一起配合来维护约束的，沟通是通过多个观察者和多个具体类来交互的：每个具体类通常包含多个观察者，而有时候具体类里的一个观察者也是另一个观察者的具体类。
 
而中介者模式所做的不是简单的分发，却是扮演着维护这些约束的职责。
</p>
<p>
中介者和外观模式
 
很多人可能也比较迷糊中介者和外观模式的区别，他们都是对现有各模块进行抽象，但有一些微妙的区别。
 
中介者所做的是在模块之间进行通信，是多向的，但外观模式只是为某一个模块或系统定义简单的接口而不添加额外的功能。系统中的其它模块和外观模式这个概念没有直接联系，可以认为是单向性。

</P>
    	<script type="text/javascript">
    		window.onload=function(){
    			var mediator=(function(){

                    //订阅一个事件，并且提供一个事件触发以后的回调函数
                    var subscribe=function(channel,func){
                        if(!mediator.channels[channel]){
                            mediator.channels[channel]=[];
                        }
                        mediator.channels[channel].push({context:this,callback:func});
                        return this;
                    },
                    //广播事件
                    publish=function(channel){
                        if(!mediator.channels[channel]){
                            return false;
                        }
                        var args=Array.prototype.slice.call(arguments,1);

                        for(var i=0,length=mediator.channels[channel].length;i<length;i++){
                            var subscription=mediator.channels[channel][i];
                            subscription.callback.apply(subscription.context,args);
                        };
                        return this;
                    };

                    return {
                        channels:{},
                        publish:publish,
                        subscribe:subscribe,
                        installTo:function(obj){
                            obj.subscribe=subscribe;
                            obj.publish=publish;
                        }
                    };

                }());

                (function(mediator){

                    function initialize(){
                        mediator.name='Allen';//默认值

                        //订阅一个事件nameChange
                        //回调函数显示修改前后的信息
                        mediator.subscribe('nameChange',function(args){
                            console.log(this.name);
                            this.name=args;
                            console.log(this.name);
                        });
                    }

                    //
                    function updateName(){
                        //广播触发事件，参数为新数据
                        mediator.publish('nameChange','Allen2');
                    }

                    initialize();//初始化
                    updateName();//调用

                }(mediator));

    		};
    	</script>
    </body>
</html>