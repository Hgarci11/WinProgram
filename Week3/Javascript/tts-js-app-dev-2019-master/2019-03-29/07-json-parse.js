var calculator = {
    add: function(a,b) {
        return a+b;

    }
}

calculator.add(2,3)

console.log(calculator);

var arrayWoW = [
    ['anonymous', 'array'],
    {name: 'anonymous object'},
    function() {return 'Anonymous function'}
]

console.log(arrayWow[0][1]); //array
console.log(arrayWow[1].name); //anonymous
console.log(arrayWoW[2]()); //anonymous function