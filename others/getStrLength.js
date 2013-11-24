/*
获取字符串的长度，中文算两个字符
*/
function getStrLength(str){
    var count = 0;
    if(str){
        for(var i=0,len=str.length;i<len;i++){
            var c = str.charCodeAt(i);
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)){
                count++;
            }else{count += 2;}
        };
    }else{}
    return count;
};

console.log(getStrLength('fuck,you!刘江北！'));//17