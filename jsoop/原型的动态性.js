<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>原型的动态性</title>
	</head>
	<body>
		<h1>原型的动态性</h1>
		<script type="text/javascript">
			window.onload=function(){
				function Person(){};
				var person = new Person();
				Person.prototype.sayHello=function(){
					alert('Hello,nice to meet you!');
				};
				
				person.sayHello();//没有问题能够直接弹出内容，原因是实例与原型之间的额松散连接关系
				
				function Person2(){};
				var person2 = new Person2();//person2引用的还是最初的原型对象
				Person2.prototype={
					sayName:function(){
						alert('重写原型后，已经切断了构造函数与最初原型的联系！');
					}
				};
				
				//person2.sayName();//error
				/*
				 * PS:重写整个原型对象 就会切断现有原型与任何之前已经存在的对象实例之间的联系
				 */
				
				/*
				 * 原生对象的原型
				 * 通过原生对象的原型 不仅可以区的所有默认方法的引用，还可以定义新方法
				 */
				alert(typeof Array.prototype.sort);//function
				//功能上类似于C#里面的扩展方法
				String.prototype.XXX=function(){
					return 'what you are want to do!';
				};
				alert('xxx'.XXX());
			};
		</script>
	</body>
</html>
