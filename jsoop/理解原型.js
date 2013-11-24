<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>深入理解原型</title>
	</head>
	<body>
		<h1>深入理解原型</h1>
		<script type="text/javascript">
			window.onload = function(){
				
				/*
				 * 原型与in操作符
				 */
				
				function Person(){};
				Person.prototype.name='Allen';
				Person.prototype.age=23;
				Person.prototype.sayName=function(){
					alert('My name is '+this.name);
				};
				
				var person1 = new Person();
				person1.sayName();
				alert(person1.hasOwnProperty('name'));//false hasOwnProperty(propertyName)表示属性是否存在于对象实例中
				alert('name' in person1);//true in操作符表示通过对象能够访问给定的属性时 返回true
				
				/*自定义函数 表示属性是否存在于原型中*/
				function hasPrototypeProperty(obj,propertyName){
					return (propertyName in obj)&&(!obj.hasOwnProperty(propertyName));
				};
				person1.name='Allen2';
				alert(hasPrototypeProperty(person1,'name'));//false 因为添加了实例属性，所以会优先访问实例属性
				
				delete person1.name;
				alert('have delete person1.name,now is prototype property?'+hasPrototypeProperty(person1,'name'));//true 删除了实例属性
				
				/*
				 * for-in能够返回对象的可访问的、可枚举的的属性；其中包括对象实例中的属性以及原型中的属性，即使给属性打上[DotEnum]标记
				 * 因为根据规定，所有开发人员定一定的属性都是可枚举的--只有IE除外
				 * 如下代码在IE中不能弹出内容(经测试IE9可以弹出内容)
				 */
				var obj = {
					toString:function(){
						return 'My object';
					}
				}
				for(var prop in obj){
					if("toString"==prop){
						alert('Found property');
					}
				}
				
				
			};
		</script>
	</body>
</html>
