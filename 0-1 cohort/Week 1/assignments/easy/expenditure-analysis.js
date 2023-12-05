/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = new Set(
    transactions.map((transaction) => transaction.category)
  );
  const output = categories.map((category) => {
    return transactions.reduce((acc, transaction) => {
      if (transaction.category === category) {
        acc += transaction.price;
      }
      return { category: acc };
    }, 0);
  });

  return output;
}

module.exports = calculateTotalSpentByCategory;
