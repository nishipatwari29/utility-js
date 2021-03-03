const filter = function(array,func) {

	var new_array=[];
	for(i=0;i<array.length;i++)
		if(func( array[i]))
			new_array.push(array[i]);
	return new_array;

}
module.exports = filter; 