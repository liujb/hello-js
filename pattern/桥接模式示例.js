<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-桥接模式示例</title>
    </head>
    <body>
    	<h1>设计模式-桥接模式示例</h1>
        <p>我们要构建一个队列，队列里存放了很多ajax请求，使用队列（queue）主要是因为要确保先加入的请求先被处理。任何时候，我们可以暂停请求、删除请求、重试请求以及支持对各个请求的订阅事件。</p>
    	<script type="text/javascript">
    		//①异步请求的函数封装
            var asyncRequest=(function(){

                function handleReadyState(o,callback){
                    var poll=window.setInterval(function(){
                        if(o&&o.readyState==4){
                            window.clearInterval(poll);
                            if(callback){
                                callback(o);
                            }
                        }
                    },50);
                };

                var getXHR=function(){
                    var http;
                    try{
                        http=new XMLHttpRequest;
                        getXHR=function(){
                            return new XMLHttpRequest;
                        };
                    }catch(e){
                        var msxml=['MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP','Microsoft.XMLHTTP'];
                        for(var i=0;len=msxml.length;i<len;i++){
                            try{
                                http = new ActiveXObject(msxml[i]);
                                getXHR=function(){
                                    return new ActiveXObject(msxml[i]);
                                };
                                break;
                            }catch(e){ }
                        }
                    }
                    return http;
                };

                return function(method,uri,callback,postData){
                    var http=getXHR();
                    http.open(method,uri,true);
                    handleReadyState(http,callback);
                    http.send(postData||null);
                    return http;
                };

            })();

            //②定义一个通用的添加方法（函数）的方法
            Function.prototype.method=function(name,func){
                this.prototype[name]=func;
                return this;
            };

            //③添加关于数组的2个方法，一个用于遍历，一个用于筛选
            if(!Array.prototype.forEach){
                Array.method('forEach',function(fn,thisObj){
                    var scope=thisObj||window;
                    for(var i=0,len=this.length;i<len;i++){
                        fn.call(scope,this[i],i,this);
                    }
                });
            }

            if(!Array.prototype.filter){
                Array.method('filter',function(fn,thisObj){
                    var scope=thisObj||window;
                    var a=[];
                    for(var i=0,len=this.length;i<len;i++){
                        if(!fn.call(scope,this[i],i,this)){
                            continue;
                        }
                        a.push(this[i]);
                    }
                    return a;
                });
            }

            //④观察者系统：观察者在队列的事件中扮演着重要角色
            window.DED=window.DED||{};
            DED.util=DED.util||{};
            DED.util.ObServer=function(){
                this.fns=[];
            };
            DED.util.ObServer.prototype={
                subscribe:function(fn){
                    this.fns.push(fn);
                },
                ubsubscribe:function(fn){
                    this.fns=this.fns.filter(function(el){
                        if(el!==fn){
                            return el;
                        }
                    });
                },
                fire:function(o){
                    return this.fns.forEach(function(el){
                        el(o);
                    });
                }
            };

            //⑤队列主要实现方法
            DED.Queue=function(){
                this.queue=[];
                this.onComplete=new DED.util.ObServer;
                this.onFailure=new DED.util.ObServer;
                this.onFlush=new DED.util.ObServer;

                this.retryCount=3;
                this.currentRetry=3;
                this.paused=false;
                this.timeout=5000;
                this.conn={};
                this.timer={};
            };

            DED.Queue.method('flush',function(){
                if(!this.queue.length){
                    return;
                }
                if(this.paused){
                    this.paused=false;
                    return;
                }
                var that=this;
                this.currentRetry++;

                var abort=function(){
                    that.conn.abort();
                    if(that.currentRetry==that.retryCount){
                        that.onFailure.fire();
                        that.currentRetry=0;
                    }else{
                        that.flush;
                    }
                };

                this.timer=window.setTimeout(abort,this.timeout);

                var callback=function(o){
                    window.clearInterval(that.timer);
                    that.currentRetry=0;
                    that.queue.shift();
                    that.onFlush.fire(o.responseText);
                    if(that.queue.length==0){
                        that.onComplete.fire();
                        return;
                    }
                    that.flush();
                };

                this.conn=asyncRequest(this.queue[0]['method']
                    ,this.queue[0]['uri']
                    ,callback
                    ,this.queue[0]['params']);
            }).method('setRetryCount',function(count){
                this.retryCount=count;
            }).method('setTimeout',function(time){
                this.timeout=time;
            }).method('add',function(o){
                this.queue.push(o);
            }).method('pause',function(){
                this.paused=true;
            }).method('dequeue',function(){
                this.queue.pop();
            }).method('clear',function(){
                this.queue=[];
            });

            //调用
            var q=new DED.Queue;
            q.setRetryCount(5);
            q.setTimeout(1000);
            q.add({method:'GET',uri:'/path/to/file.php?ajax=true'});
            q.add({method:'GET',uri:'/path/to/file.php?ajax=true&woe=e'});
            q.flush();
            q.paused();
            q.clear();
            
    	</script>
    </body>
</html>