<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-组合模式</title>
    </head>
    <body>
    	<h1>设计模式-组合模式</h1>
        <P>
        组合模式（Composite）将对象组合成树形结构以表示“部分-整体”的层次结构，组合模式使得用户对单个对象和组合对象的使用具有一致性。
 
        常见的场景有asp.net里的控件机制（即control里可以包含子control，可以递归操作、添加、删除子control），类似的还有DOM的机制，一个DOM节点可以包含子节点，不管是父节点还是子节点都有添加、删除、遍历子节点的通用功能。所以说组合模式的关键是要有一个抽象类，它既可以表示子元素，又可以表示父元素。
        </p>

    	<script type="text/javascript">
    		window.onload=function(){

                //①模拟 抽象类
                var MenuComponent=function(){};
                MenuComponent.prototype.getName=function(){
                    throw new Error('该方法必须被重写！');
                };
                MenuComponent.prototype.getDescription=function(){
                    throw new Error('该方法必须被重写！');
                };
                MenuComponent.prototype.getPrice=function(){
                    throw new Error('该方法必须被重写！');
                };
                MenuComponent.prototype.isVegetarian=function(){
                    throw new Error('该方法必须被重写！');
                };
                MenuComponent.prototype.print=function(){
                    throw new Error('该方法必须被重写！');
                };
                MenuComponent.prototype.add=function(){
                    throw new Error('该方法必须被重写！');
                };
                MenuComponent.prototype.remove=function(){
                    throw new Error('该方法必须被重写！');
                };
                MenuComponent.prototype.getChild=function(){
                    throw new Error('该方法必须被重写！');
                };

                //②创建基本的菜品项
                var MenuItem=function(sName,sDescription,bVegetarian,nPrice){
                    MenuComponent.apply(this);
                    this.sName=sName;
                    this.sDescription=sDescription;
                    this.bVegetarian=bVegetarian;
                    this.nPrice=nPrice;
                };
                MenuItem.prototype=new MenuComponent();
                MenuItem.prototype.getName=function(){
                    return this.sName;
                };
                MenuItem.prototype.getDescription=function(){
                    return this.sDescription;
                };
                MenuItem.prototype.getPrice=function(){
                    return this.nPrice;
                };
                MenuItem.prototype.isVegetarian=function(){
                    return this.bVegetarian;
                };
                MenuItem.prototype.price=function(){
                    console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
                };

                var Menu=function(sName,sDescription){
                    MenuComponent.apply(this);
                    this.aMenuComponents=[];
                    this.sName=sName;
                    this.sDescription=sDescription;
                    this.createIterator=function(){
                        throw new Error('This method must be overwritten');
                    };
                };


                //③创建菜品
                Menu.prototype=new MenuComponent();
                Menu.prototype.add = function (oMenuComponent) {    
                    // 添加子菜品    
                    this.aMenuComponents.push(oMenuComponent);
                };

                Menu.prototype.remove = function (oMenuComponent) {    
                    // 删除子菜品    
                    var aMenuItems = [];    
                    var nMenuItem = 0;    
                    var nLenMenuItems = this.aMenuComponents.length;    
                    var oItem = null;    
                    for (; nMenuItem < nLenMenuItems; ) {        
                        oItem = this.aMenuComponents[nMenuItem];        
                        if (oItem !== oMenuComponent) {            
                            aMenuItems.push(oItem);        
                        }       
                        nMenuItem = nMenuItem + 1;    
                    }    
                    this.aMenuComponents = aMenuItems;
                };
                Menu.prototype.getChild = function (nIndex) {    
                //获取指定的子菜品    
                    return this.aMenuComponents[nIndex];
                };
                Menu.prototype.getName = function () {    
                    return this.sName;
                };
                Menu.prototype.getDescription = function () {    
                    return this.sDescription;
                };
                Menu.prototype.print = function () {    
                // 打印当前菜品以及所有的子菜品    
                    console.log(this.getName() + ": " + this.getDescription());    
                    console.log("--------------------------------------------");    
                    var nMenuComponent = 0;    
                    var nLenMenuComponents = this.aMenuComponents.length;    
                    var oMenuComponent = null;    
                    for (; nMenuComponent < nLenMenuComponents; ) {        
                        oMenuComponent = this.aMenuComponents[nMenuComponent];
                        oMenuComponent.print();        
                        nMenuComponent = nMenuComponent + 1;    
                    }
                };

                //④创建指定的菜品
                var DinnerMenu = function () {    
                    Menu.apply(this);
                };
                DinnerMenu.prototype = new Menu();
                var CafeMenu = function () {    
                    Menu.apply(this);
                };
                CafeMenu.prototype = new Menu();
                var PancakeHouseMenu = function () {    
                    Menu.apply(this);
                };
                PancakeHouseMenu.prototype = new Menu();

                //⑤创建菜单本
                var Mattress = function (aMenus) {    
                    this.aMenus = aMenus;
                };
                Mattress.prototype.printMenu = function () {    
                    this.aMenus.print();
                };

                //调用

                var oPanCakeHouseMenu = new Menu("Pancake House Menu", "Breakfast");
                var oDinnerMenu = new Menu("Dinner Menu", "Lunch");
                var oCoffeeMenu = new Menu("Cafe Menu", "Dinner");
                var oAllMenus = new Menu("ALL MENUS", "All menus combined");
                oAllMenus.add(oPanCakeHouseMenu);
                oAllMenus.add(oDinnerMenu);
                oDinnerMenu.add(new MenuItem("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89));
                oDinnerMenu.add(oCoffeeMenu);oCoffeeMenu.add(new MenuItem("Express", "Coffee from machine", false, 0.99));
                var oMattress = new Mattress(oAllMenus);
                console.log("---------------------------------------------");
                oMattress.printMenu();
                console.log("---------------------------------------------");
    		};
    	</script>
    </body>
</html>