<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-观察者模式</title>
    </head>
    <body>
    	<h1>设计模式-观察者模式</h1>
        <p>
        观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。
        <br />
        使用观察者模式的好处：
        1.支持简单的广播通信，自动通知所有已经订阅过的对象。
        2.页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。
        3.目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。
        </p>
    	<script type="text/javascript">
    		window.onload=function(){
    			var pubsub={};
                (function(q){
                    var topics={},
                        subUid=-1;

                    //发布方法
                    q.publish=function(topic,args){
                        if(!topics[topic]){
                            return false;
                        }
                        setTimeout(function(){
                            var subscribers=topics[topic],
                                len=subscribers?subscribers.length:0;
                            while(len--){
                                subscribers[len].func(topic,args);
                            }
                        },0);
                        return true;
                    };

                    //订阅方法
                    q.subscribe=function(topic,func){
                        if(!topics[topic]){
                            topics[topic] = [];
                        }
                        var token=(++subUid).toString();
                        topics[topic].push({token:token,func:func});
                        return token;
                    };

                    //退订方法
                    q.unsubscribe=function(token){
                        for(var m in topics){
                            if(topics[m]){
                                for(var i=0,len=topics[m].length;i<len;i++){
                                    if(topics[m][i].token===token){
                                        topics[m].splice(i,1);
                                        return token;
                                    }
                                }
                            }
                        }
                        return false;
                    };

                    q.testMethod=function(){
                        console.log('Test');
                    };

                }(pubsub))

                //订阅一个观察者
                var testScuscribe=pubsub.subscribe('example',function(topics,data){
                    console.log(topics+": "+data);
                });
                
                //发布通知
                pubsub.publish('example','Hello,word!');
                pubsub.publish('example',['Test','test1','test2']);
                pubsub.publish('example',[{'color':'blue'},{text:'hellp'},{'NIMA':'fuck'}]);
                //退订
                setTimeout(function(){
                    pubsub.unsubscribe(testScuscribe);
                },0);//不加此句，前面的都输不出来！
                
                pubsub.publish('example','Hello,word!');
    		};
    	</script>
    </body>
</html>