<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-命令模式</title>
    </head>
    <body>
    	<h1>设计模式-命令模式</h1>
        <script type="text/javascript" src="../JQuery/jquery-1.8.2.js"></script>
    	<script type="text/javascript">
            /*
            命令模式(Command)的定义是：用于将一个请求封装成一个对象，从而使你可用不同的请求对客户进行参数化；对请求排队或者记录请求日志，以及执行可撤销的操作。也就是说改模式旨在将函数的调用、请求和操作封装成一个单一的对象，然后对这个对象进行一系列的处理。此外，可以通过调用实现具体函数的对象来解耦命令对象与接收对象。
            */
            $(function(){
                var CarManager={
                    requestInfo:function(model,id){
                        return 'The infomation for '+model+' with ID '+id+'is foobar';
                    },
                    buyVehicle:function(model,id){
                        return 'You have successfully purchased item'+id+', a'+model;
                    },
                    arrangeViewing:function(model,id){
                        return 'You have successfully booked a viewing of '  + model + ' ( ' + id + ' ) ';
                    }
                };

                CarManager.execute=function(command){
                    return CarManager[command.request](command.model,command.id);
                }
                
                console.log(CarManager.execute({ request: "arrangeViewing", model: 'Ferrari', id: '145523' })); 
                console.log(CarManager.execute({ request: "requestInfo", model: 'Ford Mondeo', id: '543434' })); 
                console.log(CarManager.execute({ request: "buyVehicle", model: 'Ford Escort', id: '543434' })); 
                
            })();//加上括号后，后面的代码都不会被执行！为何？？(因为此处会报缺少函数的错误，所以不会执行下面的啦)
            
            /*
            alert('Running....');

            $(document).ready(function(){
                alert('NIMA');
            });

            window.onload=function(){
                alert('LET ME FUCK YOU！')
            };
            */
    	</script>
    </body>
</html>