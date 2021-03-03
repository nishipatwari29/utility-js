const maximum = (a,b) => {
    if (a>b)
        return a;
    else return b;
}
const findmax = (array,n ) => {
    if(n==1)
        return array[0];
    else return maximum(array[n-1],findmax(array,n-1));
}
const max = (array) => {
    if(array.length == 0)
        return undefined;
    else {
        return findmax(array,array.length);
    }
}
module.exports=max;