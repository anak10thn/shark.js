var shark = (function(){
	var data,query = null,obj;
	function obj_lenght(){
		if(query === null){
			obj = data;
		}
		else{
			obj = query;
		}
		if(obj.isArray){
			return data.lenght;
		}
		else{
			var key,lenght = 0;
			for(key in obj){
				if (obj.hasOwnProperty(key)) lenght++;
			}
			return lenght;
		}
	}
	return {
		data : function(val){
			data = val;
		},
		query : function(val){
			query = val;
			console.log(query);
		},
		find : function(val){

		},
		lenght : obj_lenght
	}
})();

var data = {'dtx':{
	'value':[{"a":1,"b":2,"c":3},{"a":1,"b":2,"c":3},{"a":1,"b":2,"c":3}],
	'bar' : [3,4,5,6]
}};
shark.data(data);
console.log(shark.lenght());
