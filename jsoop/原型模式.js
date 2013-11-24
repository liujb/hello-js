<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>测试原型模式</title>
	</head>
	<body>
		<h1>测试原型模式</h1>
		<script type="text/javascript">
			window.onload=function(){
				
				/*
				 * ①定义：不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中
				 * ②每个函数（function）都有一个原型（prototype）属性，这个属性是一个指针，指向一个对象
				 * 而这个对象的用途是包含可以由特定类型的所有实例【共享的】属性和方法
				 * 
				 */
				function Person(){};
				Person.prototype.name = 'Allen';
				Person.prototype.age = 23;
				Person.prototype.sayLove = function(){
					alert(this.name +' Love wife');
				};
				var person1 = new Person();
				person1.sayLove();
				
				var person2 = new Person();
				//person2.sayLove();
				
				//alert(Person.prototype.isPrototypeOf(person1));//因为person1的内部有一个属性（_proto_）指向Person.prototype所以都返回true
				//alert(Person.prototype.isPrototypeOf(person2));
				
				/*
				 *理解原型模式：所有原型对象都有一个属性constructor，该属性指向构造函数
				 * 如Person.prototype.constructor 指向Person
				 * 当调用构造函数创建一个新的实例时，该实例的内部包含一个指针（内部属性）_proto_
				 * 它指向构造函数的原型对象
				 * 如Person person = new Person();person._proto_ 指向的是Person.prototype
				 * 
				 */
				
				
				/*
				 * 每当代码读取某个对象的属性时，会先从对象实例本身开始搜索，如果搜到了则返回，否则会继续搜素原型对象
				 * 也就是说当为对象实例添加一个属性时，这个属性会屏蔽原型对象中保存的同名属性。
				 * 我们可以通过对象实例访问保存在原型中的值，但是却不能通过对象实例重写原型中的值。
				 */
				person1.name='Allen2';//会屏蔽掉原型中的name
				person1.sayLove();
				
				/*
				 * 换句话说为对象实例添加与原型同名属性，添加的这个属性只会阻止我们访问原型中的那个属性，但不会修改那个属性
				 * 即将这个属性设置为null
				 * 可以使用delete操作符来删除对象实例的属性，从而恢复重新对原型属性的访问 
				 */
				delete person1.name;
				alert(person1.name);
				
				/*使用hasOwnProperty()方法可以检测一个属性是存在于对象实例中还是原型中*/
				
				alert(person1.hasOwnProperty('name'));//false 因为之前已经delete了person1.name
				
								
			};
		</script>
	</body>
</html>
