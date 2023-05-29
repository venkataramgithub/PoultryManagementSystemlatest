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
router.post('/getUpdatefeedconsumptioneapi',(req,res)=>{
	connection.query("select * from feedconsumption where sl=?",[req.body.id],(error,result)=>{
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
router.post('/Updatefeedconsumptionapi',(req,res)=>{
	connection.query("update feedconsumption set EmployeeAssigned=?,Quantity=?,Price=?,Date=? where sl=?",[req.body.employeedassigned,req.body.quantity,req.body.price,req.body.date,req.body.id],(error,result)=>{
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
router.post('/getUpdatesalespersonapi',(req,res)=>{
	connection.query("select * from salespersondetails where id=?",[req.body.id],(error,result)=>{
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
router.post('/Updatesalespersonapi',(req,res)=>{
	connection.query("update salespersondetails set FirstName=?,LastName=?,Phone=?,State=?,Location=?,OrganizationName=? where id=?",[req.body.firstname,req.body.lastname,req.body.phone,req.body.state,req.body.location,req.body.organizationname,req.body.id],(error,result)=>{
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
router.post('/getUpdatepurchasepersonapi',(req,res)=>{
	connection.query("select * from purchasepersondetails where id=?",[req.body.id],(error,result)=>{
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
router.post('/Updatepurchasepersonapi',(req,res)=>{
	connection.query("update purchasepersondetails set FirstName=?,LastName=?,Phone=?,State=?,Location=?,OrganizationName=? where id=?",[req.body.firstname,req.body.lastname,req.body.phone,req.body.state,req.body.location,req.body.organizationname,req.body.id],(error,result)=>{
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
router.post('/getUpdatepayrollapi',(req,res)=>{
	connection.query("select * from expense where sl=?",[req.body.id],(error,result)=>{
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
router.post('/Updatepayrollapi',(req,res)=>{
	connection.query("update expense set EmployeeName=?,ExpenseName=?,Amount=?,Date=? where sl=?",[req.body.employeename,req.body.expensename,req.body.amount,req.body.date,req.body.id],(error,result)=>{
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
router.post('/getUpdateemployeeapi',(req,res)=>{
	connection.query("select * from employee where Workerid=?",[req.body.id],(error,result)=>{
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
router.post('/Updateemployeeapi',(req,res)=>{
	connection.query("update employee set Name=?,Phone=?,Job=?,Salary=? where Workerid=?",[req.body.name,req.body.phone,req.body.job,req.body.salary,req.body.id],(error,result)=>{
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
router.post('/getUpdatedailypricesapi',(req,res)=>{
	connection.query("select * from dailyprices where sl=?",[req.body.id],(error,result)=>{
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
router.post('/Updatedailypricesapi',(req,res)=>{
	connection.query("update dailyprices set date=?,EggPrice=?,ChickenPrice=? where sl=?",[req.body.date,req.body.eggprice,req.body.chickenprice,req.body.id],(error,result)=>{
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
router.post('/deleteeggsalesapi',(req,res)=>{
	connection.query("delete from eggsales where sl=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deleteeggproductionapi',(req,res)=>{
	connection.query("delete from eggsproduction where sl=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deletebirdsalesapi',(req,res)=>{
	connection.query("delete from birdssales where sl=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deletebirdpurchaseapi',(req,res)=>{
	connection.query("delete from birdspurchase where sl=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deletemortalityeapi',(req,res)=>{
	connection.query("delete from mortality where sl=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deletefeedpurchaseapi',(req,res)=>{
	connection.query("delete from feedpurchase where sl=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deletefeedconsumptionapi',(req,res)=>{
	connection.query("delete from feedconsumption where sl=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deletesalespersonapi',(req,res)=>{
	connection.query("delete from salespersondetails where id=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deletedailypricesapi',(req,res)=>{
	connection.query("delete from dailyprices where sl=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deleteemployeeapi',(req,res)=>{
	connection.query("delete from employee where Workerid=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deletepayrollapi',(req,res)=>{
	connection.query("delete from expense where sl=?",[req.body.deleteid],(error,result)=>{
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
router.post('/deletepurchasepersonapi',(req,res)=>{
	connection.query("delete from purchasepersondetails where id=?",[req.body.deleteid],(error,result)=>{
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
router.get('/getdashdailypricesapi',(req,res)=>{
	connection.query("select * from dailyprices",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
			console.log(error);
		}
		else{
			res.send({
				result:result[result.length-1],
			});
		}
	});
});
router.get('/getbalancesapi',(req,res)=>{
	connection.query("select count(*) as totalcustomers from salespersondetails",(error,result)=>{
		if(error){
			res.send({
				err:error
			});
			console.log(error);
		}
		else{
			connection.query("select count(*) as totalsales from birdssales",(error2,result2)=>{
				if(error2){
					res.send({
						err:error2
					});
				}
				else{
					connection.query("select sum(NumberofDeaths) as totalmortality from mortality",(error3,result3)=>{
						if(error3){
							res.send({
								err:error3
							});
						}
						else{
							connection.query("select sum(Quantity) as feed from feedpurchase",(error4,result4)=>{
								if(error4){
									res.send({
										err:error3
									});
								}
								else{
									connection.query("select sum(Quantity) as feedconsumed from feedconsumption",(error5,result5)=>{
										if(error5){
											res.send({
												err:error5
											});
										}
										else{
											connection.query("select sum(noofeggs) as eggproduced from eggsproduction",(error6,result6)=>{
												if(error6){
													res.send({
														err:error6
													});
												}
												else{
													connection.query("select sum(NumberofEggs) as eggsaled from eggsales",(error7,result7)=>{
														if(error7){
															res.send({
																err:error7
															});
														}
														else{
															connection.query("select sum(NoofChicks) as chickensaled from birdssales",(error8,result8)=>{
																if(error8){
																	res.send({
																		err:error8
																	});
																}
																else{
																	connection.query("select sum(NoofChicks) as chickenpurchased from birdspurchase",(error9,result9)=>{
																		if(error9){
																			res.send({
																				err:error9
																			});
																		}
																		else{
																			res.send({
																				result:result,
																				result2:result2,
																				result3:result3,
																				result4:result4,
																				result5:result5,
																				result6:result6,
																				result7:result7,
																				result8:result8,
																				result9:result9
																			});
																		}
																	})
																}
															});
														}
													});
												}
											});
										}
									});
								}
							});
						}
					});
				}
			});
		}
	});
});
module.exports=router;