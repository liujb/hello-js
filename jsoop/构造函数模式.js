<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>New Web Project</title>
	</head>
	<body>
		<h1>构造函数模式</h1>
		<script type="text/javascript">
			//window.onload = function(){
				
				/*
				 * ①构造函数可以用来创建特定类型的对象
				 * ②函数以大写字母开头一般都表示构造函数
				 * ③除非特殊说明，否则constructor和instanceof都会在全局作用域（此处window）中查找构造函数
				 */
				function Person(name,age,job,wife){
					this.name=name;
					this.age=age;
					this.wife=wife;
					this.job=job;
					this.sayLove=function(){
						alert(this.name+' love his wife '+this.wife+' very much');
					};
					
					//这样写有一个好处创建多个Person对象时，他们的testMethod()是同一个实例
					this.testMethod = testMethod;
				};
				function testMethod(){
					alert(this.name);
				};
				
				//构造函数方式调用
				var person1 = new Person('Allen',23,'soft engineer','余尚容');
				var person2 = new Person('Allen',23,'soft engineer','余尚容');
				person1.sayLove();
				alert(person1.constructor == Person);//true
				alert(person1 instanceof Object);//true
				alert(person1 instanceof Person);//true
				alert(person1.sayLove==person2.sayLove)//false
				alert(person1.testMethod==person2.testMethod)//true
				
				//普通函数调用
				//当在全局作用域中调用一个函数时，this对象总是指向Global（此处window）对象
				//所以此处使用window来调用
				Person('Allen',23,'soft engineer','余尚容');
				window.sayLove();
				
				//在另一个作用域中调用
				var obj = {};//等于var obj = new Object();
				//Person.call(obj,'Allen',23,'soft engineer','余尚容');
				Person.apply(obj,['Allen',23,'soft engineer','余尚容']);
				obj.sayLove();
				
				
			//};
		</script>
	</body>
</html>

