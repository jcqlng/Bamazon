var inquirer = require('inquirer');
var mysql = require('mysql');
const util = require('util');


var main = async function(){

    const db = makeDb(getConnection());
    
    try {
      const rows = await db.query('SELECT * FROM bamazon.product');
      buildDisplay(rows);
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'product',
            message: 'What product do you want to order?',
            
          },
          {
            type: 'input',
            name: 'quantity',
            message: 'How many do you want to order?',
            
          }
        ])
        .then(async (answers) => {
          console.log('Placing your order...');
          
          await placeOrder(answers.product, answers.quantity, db);
          main();
        });
    } catch (err) {
      console.log(err);
    } 
      
    

            
    

}


const getConnection = function(){
  let connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'application',
      password : 'Password123',
      database : 'bamazon'
    });
     
    connection.connect();

    return connection;
}

const makeDb = function(connection) {
  //const sql = ;
    return {
      query(sql, args) {
        return util.promisify(connection.query).call(connection, sql, args);
      },
      close() {
        return util.promisify(connection.end).call(connection);
      }
      
    };
}


const buildDisplay = function(data){

    console.log('------------------------------------------------------------------------------------------');
    console.log('| Prod. Nr. | Product Name                | Department Name    | Stock     | Price       |');
    console.log('------------------------------------------------------------------------------------------');

    data.forEach(function(row){
      console.log('|'+ formatField(row.item_id, 11) + '|' + formatField(row.product_name, 30) + '|' + formatField(row.department_name, 20) + '|' + formatField(row.stock_quantity, 11) + '|' + formatField(row.price, 12) + '|');
      console.log('------------------------------------------------------------------------------------------');
    });

}

const formatField = function(value, fieldLength){
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

const placeOrder = async function(id, quantity, db){
  const getQuantity = await db.query(`SELECT stock_quantity FROM bamazon.product WHERE item_id = ${id}`);
  const newQuantity = getQuantity[0].stock_quantity - quantity;
  //console.log(newQuantity)
  const updateInventory = await db.query(`UPDATE bamazon.product SET stock_quantity = ${newQuantity} WHERE item_id = ${id}`);

}

main();