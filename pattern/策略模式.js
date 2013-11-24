<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-策略模式</title>
    </head>
    <body>
    	<h1>设计模式-策略模式</h1>
    	<script type="text/javascript">
    		window.onload=function(){
    			var validator={
                    types:{},
                    messages:[],
                    config:{},
                    validate:function(data){
                        var prop,msg,type,checker,result;
                        this.messages=[];//清空
                        for(prop in data){
                            if(data.hasOwnProperty(prop)){
                                type=this.config[prop]; // 根据key查询是否有存在的验证规则
                                checker=this.types[type]; // 根据key查询是否有存在的验证规则
                                if(!type){
                                    continue;
                                }
                                if(!checker){
                                    throw{
                                        name:'ValidationError',
                                        message:'no handler to validate type '+type
                                    };
                                }
                                result=checker.validate(data[prop]); // 使用查到到的单个验证类进行验证
                                if(!result){
                                    msg='Invalid value for *'+prop+'*, '+checker.instructions;
                                    this.messages.push(msg);
                                }
                            }
                        }
                        return this.hasErrors();
                    },
                    hasErrors:function(){
                        return this.messages.length !==0;
                    }
                };

                validator.types.isNonEmpty={
                    validate:function(value){
                        return value !==';'
                    },
                    instructions:'传入的值不能为空！'
                };
                validator.types.isNumber={
                    validate:function(value){
                        return !isNaN(value);
                    },
                    instructions:'传入的值只能是合法的数字'
                };
                // 验证给定的值是否只是字母或数字
                validator.types.isAlphaNum = {    
                    validate: function (value) {        
                        return !/[^a-z0-9]/i.test(value);    
                    },    
                    instructions: "传入的值只能保护字母和数字，不能包含特殊字符"
                };

                var data = {    
                    first_name: "Tom",    
                    last_name: "Xu",    
                    age: "unknown",    
                    username: "TomXu"
                };
                validator.config = {    
                    first_name: 'isNonEmpty',    
                    age: 'isNumber',    
                    username: 'isAlphaNum'
                };

                validator.validate(data);
                if(validator.hasErrors()){
                    console.log(validator.messages.join('\n'));
                }
    		};
    	</script>
    </body>
</html>