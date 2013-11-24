<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-适配器模式</title>
    </head>
    <body>
    	<h1>设计模式-适配器模式</h1>
        
    	<script type="text/javascript">
    		window.onload=function(){
                //鸭子
                var Duck=function(){};
                Duck.prototype.fly=function(){
                    throw new Error('该方法必须被重写！');
                };
                Duck.prototype.quack=function(){
                    throw new Error('该方法必须被重写！');
                }

                //火鸡
                var Turkey=function(){};
                Turkey.prototype.fly = function() {
                    throw new Error('该方法必须被重写！');
                };
                Turkey.prototype.gobble=function(){
                    throw new Error('该方法必须被重写！');
                };

                //鸭子
                var MallardDuck=function(){
                    Duck.apply(this);
                };
                MallardDuck.prototype=new Duck();
                MallardDuck.prototype.fly=function(){
                    console.log('可以飞翔很长的距离!');
                };
                MallardDuck.prototype.quack=function(){
                    console.log('嘎嘎！嘎嘎！');
                };

                //火鸡
                var WildTurkey=function(){
                    Turkey.apply(this);
                };
                WildTurkey.prototype.fly=function(){
                    console.log('只能飞行比较短的距离！');
                };
                WildTurkey.prototype.gobble=function(){
                    console.log('咯咯！咯咯！');
                };

                //为了让火鸡也支持quack方法，创建一个火鸡适配器
                var TurkeyAdaper=function(oneTurkey){
                    Duck.apply(this);
                    this.oneTurkey=oneTurkey;
                };
                TurkeyAdaper.prototype=new Duck();
                TurkeyAdaper.prototype.quack=function(){
                    this.oneTurkey.gobble();
                };
                TurkeyAdaper.prototype.fly=function(){
                    var nFly=0;
                    var nLengthFly=5;
                    for(;nFly<nLengthFly;){
                        this.oneTurkey.fly();
                        nFly+=1;
                    }
                };

                //方法调用
                var duck=new MallardDuck();
                var turkey=new WildTurkey();
                var adaper=new TurkeyAdaper(turkey);

                //原生鸭子的行为
                duck.fly();
                duck.quack();

                //原生火鸡的行为
                turkey.fly();
                turkey.gobble();

                //适配器火鸡的行为
                adaper.fly();
                adaper.quack();//
    		};
    	</script>
    </body>
</html>