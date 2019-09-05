
let orderCount = 0;
const takeOrder = (size, topping1) => {
 console.log(`${size}Pizza with ${topping1}`);
 orderCount++;
console.log( orderCount)
}
takeOrder("large ", "Pineapple");

takeOrder ("Small ", "Pepperoni");

