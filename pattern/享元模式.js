<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>设计模式-享元模式</title>
    </head>
    <body>
    	<h1>设计模式-享元模式</h1>
        
        <p>享元模式（Flyweight），运行共享技术有效地支持大量细粒度的对象，避免大量拥有相同内容的小类的开销(如耗费内存)，使大家共享一个类(元类)。
 
        享元模式可以避免大量非常相似类的开销，在程序设计中，有时需要生产大量细粒度的类实例来表示数据，如果能发现这些实例除了几个参数以外，开销基本相同的 话，就可以大幅度较少需要实例化的类的数量。如果能把那些参数移动到类实例的外面，在方法调用的时候将他们传递进来，就可以通过共享大幅度第减少单个实例 的数目。
 
        那么如果在JavaScript中应用享元模式呢？有两种方式，第一种是应用在数据层上，主要是应用在内存里大量相似的对象上；第二种是应用在DOM层上，享元可以用在中央事件管理器上用来避免给父容器里的每个子元素都附加事件句柄。

        </p>
    	<script type="text/javascript">
    		window.onload=function(){
    			var Book=function(title,author,genre,pageCount,publisherID,ISBN){
                    this.title=title;
                    this.author=author;
                    this.genre=genre;
                    this.pageCount=pageCount;
                    this.publisherID=publisherID;
                    this.ISBN=ISBN;
                };
                var BookFactory=(function(){
                    var existingBooks={};
                    return {
                        createBook:function(title,author,genre,pageCount,publisherID,ISBN){
                            var existingBook=existingBooks[ISBN];
                            if(existingBook){
                                return existingBook;
                            }else{
                                var book=new Book(title,author,genre,pageCount,publisherID,ISBN);
                                existingBooks[ISBN]=ISBN;
                                return book;
                            }
                        }
                    };
                });

                var BookRecordManager=(function(){
                    var bookRecordDB={};
                    return {
                        addBook:function(id,title.author,genre,pageCount,publisherID,ISBN,checkoutDate,checkoutMember,dueReturnDate,availability){
                            var book = BookFactory.createBook(title,author,genre,pageCount,publisherID,ISBN);
                            bookRecordDB[id]={
                                checkoutMember:checkoutMember,
                                checkoutDate:checkoutDate,
                                dueReturnDate:dueReturnDate,
                                availability:availability,
                                book:book;
                            };
                        },
                        updateCheckoutStatus:function(bookId,newStatus,checkoutDate,checkoutMember,newReturnDate){
                            var record=bookRecordDB[bookId];
                            record.availability=newStatus;
                            record.checkoutDate=checkoutDate;
                            record.checkoutMember=checkoutMember;
                            record.dueReturnDate=newReturnDate;
                        },
                        extenCheckoutPeriod:function(bookID,newReturnDate){
                            bookRecordDB[bookID].dueReturnDate=newReturnDate;
                        },
                        isPastDue:function(bookId){
                            var currentDate=new Date();
                            return currentDate.getTime()>Date.parse(bookRecordDB[bookId].dueReturnDate);
                        }
                    };
                });

    		};
    	</script>
    </body>
</html>