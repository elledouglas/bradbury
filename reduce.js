var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  }

var salesArray = transactions.filter(customers);
var firstSale = salesArray.shift();
  console.log(firstSale);
  var salesItems = firstSale['items'].map(function(item){
    return item ['price'];
  });

  console.log(salesItems);
  //
  var sumSales = salesItems.reduce(function(sum, value) {
    console.log(sum, value)
    return sum + value;
}, 0);
  //
  console.log( 'The sum of all sales is:', sumSales );
