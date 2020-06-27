var inquirer = require('inquirer');
var mysql      = require('mysql');

var main = function() {
    //set up private variables
    var connection = getConnection();

    //display the current inventory

    //ask for user input
    var questions = [
        {
            type: 'input',
            name: 'productId',
            message: 'Please select a product by Product Nr.',
            validate: function(value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a product number';
              },
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many items would you like to buy?',
            validate: function(value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a quantity number';
              },
            filter: Number
        }
    ]

    inquirer.prompt(questions).then(answers => {
        
        console.log(answers);
      });

    
}

    //perform the requested data operation

    //run main again to return to the beginning
    


// build a connection object to mysql
var getConnection = function(){

}

// get data function to retrieve the current
// inventory from the database
var getData = function(connection) {

}

// display function to "write" the inventory as 
// a table to the screen.
var displayData = function(data) {
    
}

// get the user input
var getUserInput = function(){
    var questions = [
        {
            type: 'input',
            name: 'productId',
            message: 'Please select a product by Product Nr.',
            validate: function(value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a product number';
              },
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many items would you like to buy?',
            validate: function(value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a quantity number';
              },
            filter: Number
        }
    ]

    inquirer.prompt(questions).then(answers => {
        
        return answers;
      });
}

// place an order based on user selection
// of product
var placeOrder = function(id, quantity, connection){

}

// update the inventory after an order has been place 
// for a specified product.
var updateInventory = function(id, quantity, connection) {

}


//start the program by running the main function.
main();