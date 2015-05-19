var _ = {

// indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.

	average: function (arr){
		var total = 0;

		for(var i in arr){
			total += arr[i];
		}
		return total/arr.length;
	},

	contains: function(arr, value){
		for(var i in arr){
			if(arr[i] == value){
				return true;
			}
		}
	},

	first: function (arr){
		for(var i in arr){
			return arr[i];
		}
	},

	last: function (arr){	
		return arr.pop();
		
	},

	max: function (arr){
    var max=0;
    	for(var i in arr){
      		if(arr[i]>max){
        	max = arr[i];
      		}
    	}
    	return max;
	},

	min: function (arr){
	var min = arr[0];
		for(var i in arr){
			if(arr[i]<min){
			min=arr[i];
			}
		}
		return min;
	},

	difference: function (a, b) {
	var seen = [], diff = [];
		for ( var i = 0; i < b.length; i++)
	  		seen[b[i]] = true;
		for ( var i = 0; i < a.length; i++)
	  		if (!seen[a[i]])
	      	diff.push(a[i]);
				return diff;
	},

	indexOf: function (inputArray, inputValue){
  		for(var i=0; i<inputArray.length; i++)
    	if(inputArray[i] === inputValue){
      	console.log(i);
    	} else {
    	return -1;
    	}
	},

	pluck: function (array, value){
	var arr = [];
		for(var i in array){
		arr.push(array[i][value])
		}
		console.log(arr);
	},

	shuffle: function (arr){
		for(var i=0; i<50; i++){
		var rand1 = Math.floor(Math.random()*arr.length);
		var rand2 = Math.floor(Math.random()*arr.length);
		var temp = arr[rand2];
		arr[rand2] = arr[rand1];
		arr[rand1] = temp;	
		}	
	},

	sample: function(arr, num){
	var rand;
		if(num){
		var result = [];
		for(var i=0; i<num; i++){
			rand = Math.floor = (Math.random() * arr.length);
			result.push(arr[rand]);
			}
			console.log(result);
		}else{
			rand = Math.floor = (Math.random() * arr.length);
			console.log(arr[rand]);
		}
	},

	each: function (arr, func){
		for(var i in arr){
			func(arr[i]);
		}
	},

	compact: function (arr){
		var temp=[];
		for(var i in arr){
			if(typeof arr[i] !== "undefined"){
				temp.push(arr[i]);
			}
		}
		return temp;
	}

};

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.pluck(stooges, 'name');

// console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]));
// //=> [1, 3, 4]

// console.log(_.average([4,6,1,1]));

// console.log(_.contains([7,55,99], 99));

// console.log(_.first([5, 4, 3, 2, 1]));

var numbers = [10, 5, 100, 2];
// console.log(_.max(numbers));

// console.log(_.min(numbers));

// console.log(_.last(numbers));

// _.each(numbers, console.log);

console.log(_.compact([1, "hello", undefined, 3, undefined]));
// => [1, "hello", 3]







