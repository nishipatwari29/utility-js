const minimum = (a,b) => {
    if (a<b)
        return a;
    else return b;
}
const findmin = (array,n ) => {
    if(n==1)
        return array[0];
    else return minimum(array[n-1],findmin(array,n-1));
}
const min = (array) => {
    if(array.length == 0)
        return undefined;
    else {
        return findmin(array,array.length);
    }
}
module.exports=min;