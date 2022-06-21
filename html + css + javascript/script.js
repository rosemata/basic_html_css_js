console.log('javascript is here');
var number = 10;
var string = "Hello world";
var isRad = true;

document.getElementById('box').innerHTML=string + " CS";

if(number== 10) {
    console.log('Yes!');
}
else {
    console.log('Nope!');
}

for(var i = 0; i < 10; i++) {
    console.log(i)
}

var groceries = ['Milk', 'Eggs', 'Cheese'];

for (var i = 0; i < groceries.length; i++) {
    console.log(groceries[i]);
}

function print_items() {
    for (var i = 0; i < groceries.length; i++) {
        console.log(i+1 +" " +groceries[i]);
    }   
}

print_items();

document.getElementById('box').addEventListener('click', function() {
    alert('I got clicked');
});