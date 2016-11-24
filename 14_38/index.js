var expense = {
    type: 'Business',
    amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount;

//  ES6

const {type, amount, asdf} = expense;
console.log(type);
console.log(amount);
console.log(asdf);
