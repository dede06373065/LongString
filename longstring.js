//给一个不同字符串的数组，比较数组找出最长的
function longstring(str){
    var longest=0
    var index=0
    for(var i=0;i<str.length;i++){
         var newstring=str[i].length
         if(newstring>longest){
             longest=newstring
             index=i
         }
    }
    console.log(longest,str[index])
}


longstring(['abc','ddddd','li','laiudjr','cwoe','oaidjoas'])
