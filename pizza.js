let orderCount = 0;
const takeOrder = (size, topping1, topping2, topping3, topping4) => {
 console.log(`${size}Pizza with ${topping1} ${topping2} ${topping3} ${topping4}`);
 orderCount++;
console.log( orderCount)
}
takeOrder("large ", "Pineapple", "Sausages", "Onions", "Peppers");
