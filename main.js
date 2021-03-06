var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );




// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
// */
 var numPurchase = 0;
 /*
  transactions.each do |transaction|
    puts transaction.type
  end
 */
function checkPurchaseTransaction(transaction){
  if (transaction.type === 'purchase'){
    numPurchase++;
  }
}

transactions.forEach(checkPurchaseTransaction)

 // transactions.forEach(function(transaction){
 //   console.log(transaction.type);
 //
 //   if (transaction.type === 'purchase') {
 //     numPurchase++;
 //   }
//  }
// )

//   function a (transactions.forEach(transactions.type === 'purchases'));{
//
//     // function callbackfn(transactions.type, index, trans)
//
//
// }

console.log( 'The total number of purchases is:', numPurchase);


// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.

  HINT(S):
  - Don't forget that 'purchases' can also be made in 'cash'!
*/

function numberOfCashSales(transaction){
return transaction.type === 'sale' && transaction.paymentMethod === 'cash';

}
var numCashSales = transactions.filter(numberOfCashSales).length;
  console.log( 'The total number of cash sales is:', numCashSales );


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.

  HINT(S):
  - Make sure to exclude any 'sales' made by 'credit'!
*/
function numOfPurchaseSales(transaction){
  return transaction.type === 'purchase' && transaction.paymentMethod === 'credit';
}
var numCreditPurchases = transactions.filter(numOfPurchaseSales).length;

console.log( 'The total number of credit purchases is:', numCreditPurchases );


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/
var uniqueVendors = [];

function vendors(transaction){
  // console.log(transaction.vendor)
  if (transaction.vendor)
    uniqueVendors.push(transaction.vendor)

}

transactions.forEach(vendors)
console.log( 'The unique vendors are:', uniqueVendors );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/
var allCustomers = [];

function trans(transaction){
  if (transaction.customer)
    allCustomers.push(transaction.customer)
}

transactions.forEach(trans)

console.log( 'All customers are:', allCustomers );

allCustomers ==
[ 'Isaac Asimov',
  'CJ Cherryh',
  'Frederik Pohl',
  'Neal Stephenson',
  'Isaac Asimov' ]

var uniqueCustomers =
  allCustomers.filter(function(customer, index, self) {
    console.log(`${index} == ${self.indexOf(customer)}`)
    return index == self.indexOf(customer);
            1    ==  1
  })

customer = 'Isaac Asimov'
index    = 0
self     =
[ 'Isaac Asimov',
  'CJ Cherryh',
  'Frederik Pohl',
  'Neal Stephenson',
  'Isaac Asimov' ]


uniqueCustomers = ['isaac', 'cj'],

console.log( 'The unique customers are:', uniqueCustomers );
// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
*/
var bigSpenders = [];
// for each requires an argument hence transaction
transactions.forEach(function(transaction){

  if (transaction.type === "sale" && transaction.items.length >= 5){

var spenderData = {};
  spenderData['name'] = transaction.customer
  spenderData['numItems'] = transaction.items.length
    bigSpenders.push(spenderData);

  }

}
)

console.log( 'The "big spenders" are:', bigSpenders );


// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of the *first* 'sale' transaction.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
// */
//     type: 'sale',
//     paymentMethod: 'cash',
//     customer: 'Isaac Asimov',
//     items: [
//       { name: 'Byte', price: 1.00 },
//       { name: 'Bit', price: 0.125 }
//     ]
//   }
var totals = []
var sumSales;
  transactions.forEach(function(transaction){
    if (transaction.type === "sale"){
      var total = 0;

    for (var i = 0; i < transaction.items.length; i++)
    total += transaction.items[i].price;
    }

    if (totals.length <= 0) {
      totals.push(total);
    }


})
sumSales = totals[0];

// # if it hits return - it will stop
// var firstSale = transactions[0]
//
//
// console.log(firstSale)
// var salesItems = firstSale.items.map(function(item){
//   return item ['price'];
// });
//
// console.log(salesItems);
// //
// var sumSales = salesItems.reduce(function(sum, value) {
//   console.log(sum, value);
//   return sum + value;
//   console.log(sumSales)
// }, 0);
// //
console.log( 'The sum of all sales is:', sumSales );

// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/
//
var sumPurchases;
// var newArray = transactions.filter(function(transaction){
//   if (transaction.type === 'purchase');
// });
//
// console.log(newArray)
// var salesItems = newArray.forEach(function(item){
// return item ['price'];
// });
//
// console.log(salesItems);
//
// var sumPurchases = salesItems.reduce(function(sum, value) {
//   console.log(sum, value);
//   return sum + value;
//   console.log(sumPurchases)
// }, 0);
console.log( 'The sum of all purhcases is:', sumPurchases );
//

// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/
var netProfit;

console.log( 'The net profit is:', netProfit );


// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/
var mostItems;

console.log( 'The most items sold in a single transaction is:', mostItems );


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/
var sumOfSmallestPurchase;

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );


// // --------------------------------------------------
// // QUESTION 01
// // --------------------------------------------------
// /*
//   Calculate the total number of 'sales'.
//
//   HINT(S):
//   - Not all transactions are 'sales'.
// */
// var numSales = transactions.type === 'sale';
//  return numSales.length
//
//

//
//
