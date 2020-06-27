var inquirer = require('inquirer');
var mysql      = require('mysql');

var main = function() {
    //set up private variables
    var connection = getConnection();
    
    //display the current inventory
    displayData(connection);


    //ask for user input
    /* var questions = [
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
    }); */

    //perform the requested data operation

    //run main again to return to the beginning
    
}

    
    


// build a connection object to mysql
var getConnection = function(){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'application',
        password : 'Password123',
        database : 'bamazon'
      });
       
      connection.connect();

      return connection;
}

// get data function to retrieve the current
// inventory from the database


// display function to "write" the inventory as 
// a table to the screen.
var displayData = function(connection) {

    var query = 'SELECT * FROM bamazon.product';
    
    
    connection.query(query, function(error, results, fields){
        if(error) throw error;
        
        var data =  {records: results, fields: fields};

        console.log('------------------------------------------------------------------------------------------');
        console.log('| Prod. Nr. | Product Name                | Department Name    | Stock     | Price       |');
        console.log('------------------------------------------------------------------------------------------');
        
        for(var i = 0; i < data.records.length; i++){
            
            console.log('|' 
                + formatField(data.records[i].item_id, 11) + '|' + formatField(data.records[i].product_name, 30) + '|' + formatField(data.records[i].department_name, 20) + '|' + formatField(data.records[i].stock_quantity, 11) + '|' + formatField(data.records[i].price, 12) + '|');
            console.log('------------------------------------------------------------------------------------------');
        }
    });

    
    
    
    var fieldLengths = [11, 30, 20, 11, 12];
    
    // for(var i = 0; i < data.records.length; i++){

    // }
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

var formatField = function(value, fieldLength){
    var formatted = [fieldLength];
    
    var stringified = value.toString();

    for(var i = 0; i < (fieldLength); i++){
        if(i === 0){
            formatted[i] = ' ';
        }else {
            if(stringified[i-1]) {
                formatted[i] = stringified[i-1];
            }else{
                formatted[i] = ' ';
            }
        }
    }

    return formatted.join('');
}


//start the program by running the main function.
main();