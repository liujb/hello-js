<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-装饰者模式</title>
    </head>
    <body>
    	<h1>设计模式-装饰者模式</h1>
    	<script type="text/javascript">
    		window.onload=function(){
    			/*
                装饰者提供比继承更有弹性的替代方案。 装饰者用用于包装同接口的对象，不仅允许你向方法添加行为，而且还可以将方法设置成原始对象调用（例如装饰者的构造函数）。装饰者用于通过重载方法的形式添加新功能，该模式可以在被装饰者前面或者后面加上自己的行为以达到特定的目的。
                */
                function Macbook(){
                    this.const=function(){
                        return 3000;
                    };
                };

                function Memory(macbook){
                    this.const=function(){
                        return macbook.const()+75;
                    };
                };

                function BlurayDrive(macbook){
                    this.const=function(){
                        return macbook.const()+200;
                    };
                };

                function Insurance(macbook){
                    this.const=function(){
                        return macbook.const()+250;
                    };
                };

                var myMacbook=new Insurance(new BlurayDrive(new Memory(new Macbook())));
                console.log(myMacbook.const());//3525。不能理解啊！！！

                /*
                另一个示例：不明白了！
                */
                function ConcreateClass(){
                    this.performTask=function(){
                        this.preTask();
                        console.log('doing something...');
                        this.postTask();
                    };
                };

                function AbstractDecorator(decorated){
                    this.performTask=function(){
                        decorated.performTask();
                    };
                };

                function ConcreateDecoratorClass(decorated){
                    this.base=AbstractDecorator;
                    this.base(decorated);

                    decorated.preTask=function (argument) {
                        console.log('pre-calling....');
                    };

                    decorated.postTask=function(){
                        console.log('Post-calling...');
                    };
                };

                var concreate=new ConcreateClass();
                var decorated1=new ConcreateDecoratorClass(concreate);
                //decorated1.performTask();
                var decorated2=new ConcreateDecoratorClass(decorated1);
                decorated2.performTask();//

                /*
                又一个示例！
                */
                var tree=tree||{};
                tree.decorated=function (argument) {
                    console.log('Make sure the tree won\'t fall');
                };
                tree.getDecorator=function (deco) {
                    tree[deco].prototype=this;
                    return new tree[deco];
                };
                tree.RedBalls=function () {
                    this.decorated=function(){
                        this.RedBalls.prototype.decorated();
                        console.log('Put on some red balls');
                    };
                };
                tree.BlueBalls=function() {
                    this.decorated=function() {
                        this.BlueBalls.prototype.decorated();
                        console.log('Put on some blue balls');
                    }
                };
                tree.Angel=function(){
                    this.decorated=function(){
                        this.Angel.prototype.decorated();
                        console.log('an angel on the top');
                    };
                };        
                tree = tree.getDecorator('RedBalls');
                //tree=tree.getDecorator('BlueBalls');
                tree = tree.getDecorator('Angel'); 
                tree.decorated(); 

                /*
                总结：
                装饰者模式是为已有功能动态地添加更多功能的一种方式，把每个要装饰的功能放在单独的函数里，然后用该函数包装所要装饰的已有函数对象，因此，当需要执行特殊行为的时候，调用代码就可以根据需要有选择地、按顺序地使用装饰功能来包装对象。优点是把类（函数）的核心职责和装饰功能区分开了。
                */
    		};
    	</script>
    </body>
</html>