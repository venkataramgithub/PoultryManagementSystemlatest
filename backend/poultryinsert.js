const express=require("express");
const connection=require("./connection");
const router=express.Router();

router.post("/birdsaleapi",(req,res)=>{
	connection.query("insert into birdssales set?",req.body,(err,result)=>{
		if(err){
			res.send({
				error:err,
			});
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/dailypricesapi",(req,res)=>{
	connection.query("insert into dailyprices(date,EggPrice,ChickenPrice) values(?,?,?)",[req.body.date,req.body.eggprice,req.body.chickenprice],(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/employeeapi",(req,res)=>{
	connection.query("insert into employee(Name,Phone,Job,Salary) values(?,?,?,?)",[req.body.employeename,req.body.phone,req.body.job,req.body.salary],(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/payrollapi",(req,res)=>{
	connection.query("insert into expense set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/salespersonapi",(req,res)=>{
	connection.query("insert into salespersondetails set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/purchasespersonapi",(req,res)=>{
	connection.query("insert into purchasepersondetails set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/mortalityapi",(req,res)=>{
	connection.query("insert into mortality set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/feedpurchaseapi",(req,res)=>{
	connection.query("insert into feedpurchase set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/feedconsumptionapi",(req,res)=>{
	connection.query("insert into feedconsumption set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/eggproductionapi",(req,res)=>{
	connection.query("insert into eggsproduction set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/eggsalesapi",(req,res)=>{
	connection.query("insert into eggsales set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/birdssaleapi",(req,res)=>{
	connection.query("insert into birdssales set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.post("/birdspurchaseapi",(req,res)=>{
	connection.query("insert into birdspurchase set ?",req.body,(err,result)=>{
		if(err){
			res.send({
				err:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.get('/getmortalityapi',(req,res)=>{
	connection.query("select * from mortality",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/geteggsalesapi',(req,res)=>{
	connection.query("select * from eggsales",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/geteggsproductionapi',(req,res)=>{
	connection.query("select * from eggsproduction",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/getbirdsalesapi',(req,res)=>{
	connection.query("select * from birdssales",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});		}
	});
});

router.get('/getbirdspurchaseapi',(req,res)=>{
	connection.query("select * from birdspurchase",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/getfeedpurchaseapi',(req,res)=>{
	connection.query("select * from feedpurchase",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/getfeedconsumptionapi',(req,res)=>{
	connection.query("select * from feedconsumption",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/getsalespersonapi',(req,res)=>{
	connection.query("select * from salespersondetails",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/getpurchasepersonapi',(req,res)=>{
	connection.query("select * from purchasepersondetails",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/getpayrollapi',(req,res)=>{
	connection.query("select * from expense",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/getemployeeapi',(req,res)=>{
	connection.query("select * from employee",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.get('/getdailypricesapi',(req,res)=>{
	connection.query("select * from dailyprices",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/searchsalespersonapi',(req,res)=>{
	connection.query("select * from salespersondetails where id=?",[req.body.search],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/searcheggsalesapi',(req,res)=>{
	connection.query("select * from eggsales where Date>=? and Date<=?",[req.body.fromdate,req.body.todate],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/searcheggproductionapi',(req,res)=>{
	connection.query("select * from eggsproduction where Date>=? and Date<=?",[req.body.fromdate,req.body.todate],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/searchbirdsalesapi',(req,res)=>{
	connection.query("select * from birdssales where Date>=? and Date<=?",[req.body.fromdate,req.body.todate],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/searchidapi',(req,res)=>{
	connection.query("select * from birdssales where id=?",[req.body.search],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/searchpurchaseidapi',(req,res)=>{
	connection.query("select * from birdspurchase where Date>=? and Date<=?",[req.body.fromdate,req.body.todate],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/searchpurchaseapi',(req,res)=>{
	connection.query("select * from birdspurchase where id=?",[req.body.search],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/searchpurchaspersoneapi',(req,res)=>{
	connection.query("select * from purchasepersondetails where id=?",[req.body.search],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/searchmortalityapi',(req,res)=>{
	connection.query("select * from mortality where Date>=? and Date<=?",[req.body.fromdate,req.body.todate],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});
router.post('/searchpayrollapi',(req,res)=>{
	connection.query("select * from expense where Date>=? and Date<=?",[req.body.fromdate,req.body.todate],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});
router.post('/searchdailypricesapi',(req,res)=>{
	connection.query("select * from dailyprices where Date>=? and Date<=?",[req.body.fromdate,req.body.todate],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/getUpdateeggsalesapi',(req,res)=>{
	connection.query("select * from eggsales where sl=?",[req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});

router.post('/Updateeggsalesapi',(req,res)=>{
	connection.query("update eggsales set NumberofEggs=?,Amount=?,Date=? where sl=?",[req.body.numberofeggs,req.body.amount,req.body.date,req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				submit:true
			});
		}
	});
});

router.post('/getUpdateeggsproductionapi',(req,res)=>{
	connection.query("select * from eggsproduction where sl=?",[req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});
router.post('/Updateeggproductionapi',(req,res)=>{
	connection.query("update eggsproduction set noofeggs=?,date=? where sl=?",[req.body.numberofeggs,req.body.date,req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				submit:true
			});
		}
	});
});
router.post('/getUpdatebirdproductionapi',(req,res)=>{
	connection.query("select * from birdssales where sl=?",[req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});
router.post('/Updatebirdsalesapi',(req,res)=>{
	connection.query("update birdssales set NoofChicks=?,Amount=?,Date=? where sl=?",[req.body.numberofchicks,req.body.amount,req.body.date,req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				submit:true
			});
		}
	});
});
router.post('/getUpdatebirdpurchaseapi',(req,res)=>{
	connection.query("select * from birdspurchase where sl=?",[req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});
router.post('/Updatebirdpurchaseapi',(req,res)=>{
	connection.query("update birdspurchase set NoofChicks=?,Amount=?,Date=? where sl=?",[req.body.numberofchicks,req.body.amount,req.body.date,req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				submit:true
			});
		}
	});
});
router.post('/getUpdatemortalityapi',(req,res)=>{
	connection.query("select * from mortality where sl=?",[req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});
router.post('/Updatemortalityapi',(req,res)=>{
	connection.query("update mortality set NumberofDeaths=?,Date=? where sl=?",[req.body.numberofdeaths,req.body.date,req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				submit:true
			});
		}
	});
});
router.post('/getUpdatefeedpurchaseapi',(req,res)=>{
	connection.query("select * from feedpurchase where sl=?",[req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				result:result
			});
		}
	});
});
router.post('/Updatefeedpurchaseapi',(req,res)=>{
	connection.query("update feedpurchase set Quantity=?,Price=?,Date=? where sl=?",[req.body.quantity,req.body.price,req.body.date,req.body.id],(error,result)=>{
		if(error){
			res.send({
				err:error
			});
		}
		else{
			res.send({
				submit:true
			});
		}
	});
});
module.exports=router;