<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>New Web Project</title>
	</head>
	<body>
		<h1>普通方式创建对象</h1>
		<script type="text/javascript">
			window.onload = function(){
				//var person = new Object();
				var person = {};
				person.name = 'allen';
				person.age = 23;
				person.sex = '男';
				person.wife = '余尚容';
				person.sayLove = function(){
				  alert('I love you, my beautify wife '+this.wife+'');
				};
				
				person.sayLove();
				
				//对象表达式（对象字面量）
				var allen = {
					name:'allen',
					age:23,
					wife:'余尚容',
					sayLove:function(){
						alert("【"+this.wife+"】,I Love you very much!");
					}
				};
				
				allen.sayLove();//直接调用对象的方法
				
			};
		</script>
	</body>
</html>