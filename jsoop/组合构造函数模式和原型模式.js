<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>组合使用构造函数模式和原型模式</title>
	</head>
	<body>
		<h1>组合使用构造函数模式和原型模式</h1>
		<script type="text/javascript">
			window.onload=function(){
				/*
				 * 单独使用原型模式的缺点
				 * ①省略了为构造函数传递初始化参数这一环节，结果所有实例在默认情况下都将取得相同的属性值，这还不是最大的问题。
				 * ②原型最大的问题是由其共享的本性所导致的。PS：
				 * 原型中所有属性都是被很多实例共享的，这种共享对于函数非常合适，对于那些包含基本值的属性页说得过去，然而对于引用类型值得属性来讲，
				 * 问题就比较突出了。以下例子
				 */
				
				function Person(){};
				Person.prototype={
					constructor:Person,
					name:'Allen',
					age:23,
					friends:['gangbi','laomao','paodong'],
					sayFriends:function(){
						var friends = this.friends.join(',');
						alert(friends);
					}
				};
				
				var person1 = new Person();
				var person2 = new Person();
				person1.friends.push('csb');
				person1.sayFriends();//
				person2.sayFriends();
				
				alert(person1.friends==person2.friends);//true 很狗血的事情啊！！！
				
				/*
				 * 组合构造函数模式和原型模式是创建对象最常见的方式
				 * 构造函数模式用于定义实力属性，而原型模式用于定义共享属性以及方法
				 * 另外这种模式还支持向构造函数传递参数，可谓集两种模式之长
				 * 认可度最高的一种创建引用类型的模式！！！
				 */
				function OtherPerson(name,age,job){
					this.name=name;
					this.age=age;
					this.job=
					this.friends=['gangbi','laomao'];
				}
				OtherPerson.prototype={
					constructor:OtherPerson,
					sayName:function(){
						alert(this.name);
					}
				};
				
				var p1 = new OtherPerson('allen',23,'software engeer');
				var p2 = new OtherPerson('gangbi',23,'duck');
				p1.friends.push('aaa','xxx');
				alert(p1.friends);//'gangbi','laomao','aaa','xxx'
				alert(p2.friends);//'gangbi','laomao'
				alert(p1.friends==p2.friends);//false
				
			};
		</script>
	</body>
</html>
