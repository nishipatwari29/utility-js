const reduce = (array,adder) => {
	var reduceValue = adder;
    for(i=0;i<array.length;i++)
    	reduceValue+=array[i];

    return reduceValue;
}
module.exports = reduce;
