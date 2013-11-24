<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-职责链模式</title>
    </head>
    <body>
    	<h1>设计模式-职责链模式</h1>
        <P>
        职责链模式（Chain of responsibility）是使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系。将这个对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理他为止。
 
		也就是说，请求以后，从第一个对象开始，链中收到请求的对象要么亲自处理它，要么转发给链中的下一个候选者。提交请求的对象并不明确知道哪一个对象将会处理它——也就是该请求有一个隐式的接受者（implicit receiver）。根据运行时刻，任一候选者都可以响应相应的请求，候选者的数目是任意的，你可以在运行时刻决定哪些候选者参与到链中。
		</P>
    	<script type="text/javascript">
    		window.onload=function(){
    			var NO_TOPIC=-1;
                var Topic;
                function Handler(s,t){
                	this.successor=s||null;
                	this.topic=t||0;
                };
                Handler.prototype={
                	handle:function(){
                		if(this.successor){
                			this.successor.handle();
                		}
                	},
                	has:function(){
                		return this.topic != NO_TOPIC;
                	}
                };

                var app=new Handler({
                	handle:function(){
                		console.log('app handle');
                	}
                },3);
                var dialog= new Handler(app,1);

                /*
                dialog.handle = function () {        
                	console.log('dialog before ...')        
                	// 这里做具体的处理操作        
                	//Handler.prototype.handle.call(this);
                	console.log('dialog after ...')    
            	};*/
                var button= new Handler(dialog,2);

                /*
                button.handle = function () {    
                	console.log('button before ...')    
                	// 这里做具体的处理操作    
                	//Handler.prototype.handle.call(this);    
                	console.log('button after ...');
                };*/

                button.handle();



    		};
    	</script>
    </body>
</html>
