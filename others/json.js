var obj = {
	name: "allen",
	age: 23,
	love: "basketball"
};

var json_str = JSON.stringify(obj);
var json_obj = JSON.parse(json_str);
console.log("JSON.stringify: " + json_str);
console.log("JSON.parse: " + json_obj);