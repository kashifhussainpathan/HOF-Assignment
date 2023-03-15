// Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.


const Storeinventory = {
    'webdevelopment': 50.00,
    'javaDSA':20.00,
    'pwcourse':30.00,
     'dsacourse':25.00 
};


const coverttorupess = (price) =>{
    return price *80;
}
const storeInventoryInRupees = Object.fromEntries(
    Object.entries(Storeinventory).map(([item, price]) => [item, coverttorupess(price)])
  );
  
  console.log(storeInventoryInRupees);

