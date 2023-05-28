const mysql=require("mysql");
const connection=mysql.createConnection({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'',
	database:'newpoultry'
});
connection.connect((err)=>{
	if(err){
		console.log("Database is not connected");
	}
	else{
		console.log("Database is connected");
	}
});

module.exports=connection;