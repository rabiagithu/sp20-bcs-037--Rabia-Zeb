/**P1 */
let args=[2,3,1,6,7];
let m=0;
let x=parseInt(args[0]);
let y=parseInt(args[1]);
for(let i=0;i<y;i++)
{
    m=args[1]
}
//console.log((y+1),"kth digit from the last is="+m);

/**P2 */

var value = 23618;
sum = value.toString().split('').map(Number).reduce(function(a,b){return a+b},0);
//console.log(sum);

/**P3 */

let arr=[2,3,6,1,7];
function filter_function(numb){
if(numb%2===0){
    return numb;
}
}
let arr_filtered= arr.filter(filter_function);
//console.log(arr_filtered)


function reduce_func(arr_filtered,numb){
    return arr_filtered+numb;
}
let result=arr.reduce(reduce_func);
//console.log(result);

/**P4 */

var a;
//onsole.log("number\tSquare\tCube\n");
//console.log("===================\n");

for(a=0;a<=10;a++){
//console.log(a,a*a,a*a*a);
}
/*P7*/
function first_last_1(nums){
    var end_pos=nums.length-1;
    return nums[0] == 1 || nums[end_pos] == 1;
}

//console.log(first_last_1([1,3,5]));
//console.log(first_last_1([1,3,5,1]));
//console.log(first_last_1([2,4,6]));


/**p8 */
function alphabet_order(str)
{
    return str.split('').sort().join('');
} 
//console.log(alphabet_order("COMSATS"));


/**p5 */
var str = prompt("Enter the Input","");
if(!(isNaN(str)))
{
var num,rev=0,remainder;
num = parseInt(str);
while(num!=0) {
remainder = num%10;
num = parseInt(num/10);
rev = rev * 10 + remainder;
}
console.log("Reverse of "+str+" is "+rev);
}
else
{
str = str.toUpperCase();
for(var i = 0; i < str.length; i++) {
var chr = str.charAt(i);
if(chr == 'A' || chr == 'E' || chr == 'I' || chr == 'O' || chr == 'U')break;
}
if( i < str.length )
console.log("The position of the left most vowel is "+(i+1));
else
console.log("No vowel found in the entered string");
}

/**p6  */
var form = document.getElementById("guessNumber");
form.onsubmit = checkInput;
var button = document.getElementById("guessNumber");

button.onclick = checkInput;

function checkInput() {	

var input = document.getElementById('myNumber').value;

input = parseInt(input);

if((input <  1) || (input > 999) || (isNaN(input))) { 
 alert('Enter a whole number between 1 & 999');
} else {
  guessNumber();
}
}
function guessNumber() {
  
var output = document.getElementById('output');
  
    document.getElementById("Introduction").style.display = "none";
    document.getElementById('intro').style.display = "block";

	output.innerHTML = "<ol>";
	output.innerHTML += "<li>";
    	output.innerHTML += "</ol>";
}
