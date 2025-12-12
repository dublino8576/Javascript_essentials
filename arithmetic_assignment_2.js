/* 
customer buys 5 shirts at 100 pounds
discount 50 pounds
additional 10% discount on the remaining amount
*/

const itemNum = 5;
const itemCost = 100;
const total = function calculateBill(itemNum, itemCost) {
  return (itemNum * itemCost - 50) * 0.9;
};

console.log(total(5, 100));
