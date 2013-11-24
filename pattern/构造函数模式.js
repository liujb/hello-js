<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-构造函数模式</title>
    </head>
    <body>
        <h1>设计模式-构造函数模式</h1>
        <script type="text/javascript">
            window.onload=function(){
                /*
                ① 最基本的构造函数：缺点是output在每次实例化对象时候都重新定义了
                */
                function Car(model,year,miles){
                    this.model=model;
                    this.year=year;
                    this.miles=miles;
                    this.output=function(){
                        console.log(this.model+" 走了 "+this.miles+" 公里 ");
                    };
                };

                var allen=new Car('FeiLong',2012,3000);
                allen.output();

                /*
                ② 不会重新定义output，这样更节约内存
                */
                function Car(model,year,miles){
                    this.model=model;
                    this.year=year;
                    this.miles=miles;
                    this.output=output;
                };
                function output(){
                    return this.model+" 走了 "+this.miles+" 公里 ";
                };

                var car=new Car('NIMA',2012,200);
                console.log(car.output());

                /*
                ③ 构造函数与原型，所有该构造函数原型的属性在新创建对象上都可用
                */
                function Car2(model,year,miles){
                    this.model=model;
                    this.year=year;
                    this.miles=miles;
                };
                Car2.prototype.output=function(){
                    return this.model+" 走了 "+this.miles+" 公里 ";
                };

                var tom = new Car2("大叔", 2009, 20000);
                console.log(tom.output());

                /*作为函数调用，那么对象将被window对象上*/
                Car('jiangbeiLiu',2012,2000);
                console.log(window.output());
                /*在另外一个对象的作用域内调用*/
                var obj={};
                Car.call(obj,'LAOZI',2012,2222);
                console.log(obj.output());
                /*将构造函数作为函数调用的时，没有创造新对象，而是将this指向window*/
                var jiangbei=Car('jiangbeiLiu2',2012,2000);//没有使用new
                console.log(typeof jiangbei);//undefined
                console.log(window.output());//正确输出
                //console.log(jiangbei.output())//发生错误error‘无法获取属性“output”的值: 对象为 null 或未定义 ’

                /*
                ④ 强制使用new关键字
                */
                function Car3(model,year,miles){
                    if(!(this instanceof Car3)){
                        return new Car3(model,year,miles);
                    }
                    this.model=model;
                    this.year=year;
                    this.miles=miles;
                    this.output3=function(){
                        return this.model+" 走了 "+this.miles+" 公里 ";
                    };
                };

                var _car=Car3('ALLEN Iverson',2012,33333);
                var _car2=new Car3('Kobe',2012,300000);
                console.log(typeof _car);//object
                console.log(_car.output3());
                console.log(typeof _car2);//object
                console.log(_car2.output3());
            };
        </script>
    </body>
</html>

