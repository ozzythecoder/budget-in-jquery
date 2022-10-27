$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function readyNow() {
  
  // display budget
  let el = $('#budgetOut');
  el.empty();
  el.append(budget);

  // init display
  calculateRemainingBudget();

  // handle click event
  $( '#addPurchase' ).on( 'click', addPurchase );
}

function addPurchase() {
  // get user input and create new object  
  let newPurchase = {
    name: $( '#purchaseNameIn' ).val(),
    price: Number($( '#purchasePriceIn' ).val())
  }
  
  // if either property is missing, abort mission
  if (!newPurchase.name || !newPurchase.price) { return false };

  // push new purchase into array
  purchases.push(newPurchase);
  
  // empty inputs
  $( '#purchaseNameIn' ).val( '' )
  $( '#purchasePriceIn' ).val( '' )
  
  calculateRemainingBudget();
  displayPurchases();
}

function calculateRemainingBudget() {
  // add up expenses
  let totalExpenses = 0;
  for (let purchase of purchases) {
    totalExpenses += purchase.price
  }

  let newBudgetOut = budget - totalExpenses;

  // push newBudgetOut to the DOM
  $( '#remainingBudgetOut' ).empty;
  $( '#remainingBudgetOut' ).text(newBudgetOut);
}

function displayPurchases() {
  // empty purchase list
  $('ul').empty();
  
  // loop over array
  for (let purchase of purchases) {
    // append each purchase to an <li> tag
    $('ul').append(
      '<li>' + purchase.name + ': $' + purchase.price + '</li>'
      )
  }

}