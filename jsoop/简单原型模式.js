<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>简单原型模式</title>
	</head>
	<body>
		<h1>简单原型模式</h1>
		<script type="text/javascript">
			window.onload = function(){
				function Person(){};
				
				Person.prototype={
					//constructor:Person,
					name:'ALlen',
					age:23,
					sayName:function(){
						alert('My name is '+this.name);
					}
				};
				
				var person1 = new Person();
				alert(person1 instanceof Object);//true
				alert(person1 instanceof Person);//true
				alert(person1.constructor);//这个属性来源于原型链，原则上来讲指向Person，但是此处会指向Object，因为我们重写了Person.prototype对象
				alert(person1.constructor == Person);//false
				alert(person1.consturctor == Object);//true,测试时是False不知道为何？
				
				
				/*
				 * 加上 constructor:Person, 后 person1.consturctor就会指向Person
			     */
			};
		</script>
	</body>
</html>
