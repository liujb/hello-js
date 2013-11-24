//给Function的prototype对象添加method方法
//用于扩展其他方法
//总结一下：就是使Function对象的原型对象有一个方法名为method，
//这个方法是用于扩展其他方法的。
//好处是下一次扩展Function时候，不需要键入prototype这个单词
Function.prototype.method = function(name,func){
	if(!this.prototype[name]){	//如果Function的原型对象中不存在名为name的方法
		this.prototype[name] = func;
	}else{}
	return this;
};

//扩展Function方法，名为cao(),传入参数name
//跟C#里的扩展String或者其他类型的方法一个意思
//！这是调用原型对象的method方法
Function.method('cao',function(name){
	console.log('Hi, '+name+' Let me fuck you!');
});

//定义一个function对象
var func = function(){

};

//func对象因为继承自Function对象的原型对象
//所以其可以调用原型对象的cao()方法
func.cao('ALLEN');//Hi, ALLEN Let me fuck you!


//这样做的好处，可以使下一次扩展Object时候，不需要键入prototype这个单词
Object.prototype.method = function(name,func){
	if(!this.prototype[name]){
		this.prototype[name] = func;
	}else{}
	return this;
};

Object.method('fuck',function(){
	console.log('test');
});

var obj = {};
obj.fuck();
//{}.fuck();会报错