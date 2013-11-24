<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>使用原型链继承</title>
    </head>
    <body>
        <h1>使用原型链继承</h1>
        
        <script type="text/javascript">
            window.onload =function(){
                /*
                 * 回顾构造函数、原型、实例之间的关系
                 * 构造函数有一个prototype属性，该属性是一个指针 指向原型对象prototype
                 * 原型对象又有一个属性constructor（内部指针）指向构造函数
                 * 实例中有一个隐含（内部）属性_proto_，该属性会指向原型对象
                 */
                
                //父类
                function SuperType(){
                    this.property=true;
                };
                //给父类原型添加方法
                SuperType.prototype.getSuperValue=function(){
                    return this.property;
                };
                
                //子类
                function SubType(){
                    this.subproperty=false;
                };
                //将子类原型对象重写为父类对象（本质为重写原型对象）
                SubType.prototype=new SuperType();
                //给子类原型添加方法（这代码一定要放在上一段代码之后！！！）
                SubType.prototype.getSubValue=function(){
                    return this.subproperty;
                };
                
                /*
                 * 以上代码创建了两个类型：SuperType，SubType，每个类型分别有一个属性和方法
                 * 而SubType继承了SubperType，级城市通过重写SubType的原型对象，代之以一个新的SuperType实例
                 * 换句话说原来存在于SuperType的实例中的所有方法和成员，现在也存在于SubType.prototype中了
                 * 当var sub = new SubType();执行后，sub指向SubType的原型，而【SubType的原型指向SuperType的原型】
                 * PS：sub.getSuperValue() 会经历三个搜索步骤①搜索实例②搜索SubType.prototype③搜索SuperType.prototype④搜索Object.prototypr
                 * 因为Object是所有类型的根类！！！
                 * 
                 * 一句话SubType继承了SuperType，SuperType继承了Object，当调用sub.toString()时，实际上是调用Object.prototype中的toString()
                 */
                
                
                //声明一个子类对象
                var sub = new SubType();//初始化一个子类对象
                alert(sub.getSuperValue());//true 子类对象访问父类属性，会先从sub的实例属性中搜索，而后SubType.prototype搜索，而后SuperType.protptype
                alert(sub.getSubValue());//false 访问自己的属性
                
                /*通过instanceof操作符可以确定原型和实例之间的关系*/
                alert(sub instanceof Object);//true 可以说sub是Object对象
                alert(sub instanceof SubType);//true //子类是父类对象的一个实例
                alert(sub instanceof SuperType);//true
                
                /*同样也可以使用isPrototypeOf()方法来确定原型和实例之间的关系，只要是原型链中出现过的原型，都可以说是该原型链所拍省的实例的原型*/
                alert(Object.prototype.isPrototypeOf(sub));//true 
                alert(SubType.prototype.isPrototypeOf(sub));//true
                alert(SuperType.prototype.isPrototypeOf(sub));//true
                
                /*
                 * 注意：
                 * ①子类有时候需要重写超类中某个方法，或者需要添加超类中不存在的某个方法，一定要在替换原型的语句之后
                 * ②通过原型链实现继承时，不能使用对象字面量创建原型方法如：
                 * SubType.prototype=new SuperType();
                 * //这句话会导致上一行代码无效
                 * SubType.prototype={
                 *     
                 * };
                 */
                
                alert(sub.constructor==SuperType);//true 因为SubType的原型指向的是SuperType的原型对象，而SuperType.prototype.constructor肯定指向SuperType
                alert(typeof sub);//object 
                
            };
        </script>
    </body>
</html>

