function mergesort(array){
	if(array.length == 1)
		return array;
	var partA = mergesort(array.slice(0,array.length/2));
	var partB = mergesort(array.slice(array.length/2));
	var totalArray = [];
	while(true){
		var A = partA[0];
		var B = partB[0];
		totalArray[totalArray.length] = A>B ? partB.shift() : partA.shift();
		if(partA.length == 0){
			totalArray = totalArray.concat(partB);
			return totalArray;
		}
		if(partB.length == 0){
			totalArray = totalArray.concat(partA);
			return totalArray;
		}
	
}} 
var thing = mergesort([8,4,5,6,3,45,33,2,31,2]);
console.log(thing);