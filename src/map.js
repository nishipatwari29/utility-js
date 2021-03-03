const map = (array,func) => {
    if(array.length<1)
        return [];
    var mapped =[];
    for(i=0;i<array.length;i++)
        mapped[i]=func(array[i]);
    return mapped;
}
module.exports=map;