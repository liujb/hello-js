#Functions
square = (x) -> x * x;
console.log square(5)

#Functions arguments with default value
output = (param1, param2 = 'fuck you') ->
	console.log "param1 value is #{param1}, param2 value is #{param2}"
output(null, null)

#Objects and Arrays
arr = [1, 2, 3, 4]
obj =
	age : 23
	name : 'allen'

console.log arr.join('..')


