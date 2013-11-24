<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>New Web Project</title>
	</head>
	<body>
		<h1>工厂模式创建对象</h1>
		<script type="text/javascript">
			window.onload = function(){
				
			  /*
			   * 使用函数创建对象并返回对象
			   */
			  function createPerson(name,age,wife){
			  	var obj = new Object();//或者var obj = {};
			  	obj.name = name;
			  	obj.age = age;
			  	obj.wife = wife;
			  	obj.sayLove = function(){
			  		alert(''+this.wife+', Love you very much!');
			  	};
			  	return obj;
			  };
			  
			  var person1 = createPerson('allen',23,'余尚容');
			  person1.sayLove();			
			};
		</script>
	</body>
</html>

