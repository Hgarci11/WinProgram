var food = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']
food.push('fruit loops');
food[4] = 'fair trade coffee';
food.splice(2,2, 'rice', 'beans');

var cart = [];
cart.push(food.pop());
cart.push(food.shift());

while(food.lenght >0)
    cart.push(food.pop());

cart.sort().reverse();
console.log("My cart contains: ", cart.join(' , '));


