var app= require('./app_config.js'),
dataController= require('./controller/dataController.js'),
validator = require('Validator');
function valid(attribute){
    return validator.trim(validator.scape(req.data(atribute)));
}

function responseJSON(resp){
    res.json(resp);
}
app.get('/',function(req,res){
    res.end('Servidor on!');
});



app.get('/questions',function(req,res){
      var question = req.body; 
    var query =connection.query('SELECT * FROM question', (err, rows, fields) => {
       

        if (err) console.error(err);

        res.jsonp(rows);
    });
    console.log(query.sql);

    }); 

app.get('/questions:id',function(req,res){
    var question = req.body;
    var query =connection.query('SELECT * FROM question where id=?',[req.question.id],(err,rows,fields) => {
       
        if (err) {
            //INVALID
            console.error(err);
            res.sendStatus(404);
        }else{
            if(rows.length){
                res.jsonp(rows);
            }else{
                //ID NOT FOUND
                res.sendStatus(404);
            }
        }
    });
    console.log(query.sql);
})

app.post('options',function(req,res){
    var option = req.body; // maybe more carefully assemble this data
	        console.log(req.body)
	        var query = connection.query('INSERT INTO option SET ?', [option], (err, result) => {
	            if(err){
	                console.error(err);
	                res.sendStatus(404);
	            }else{
	                res.status(200);
	               
	                res.end();
	            }
	        });
	        console.log(query.sql);
	    });

    app.put('option',function(req,res){
        var option= req.body;
        var query = connection.query('UPDATE option SET ? WHERE id=?', [data, req.option.id], (err, result) => {
        if (err) {
            //INVALID
            console.error(err);
            res.sendStatus(404);
        }else{
            if(rows.length){
                res.jsonp(rows);
            }else{
                //ID NOT FOUND
                res.sendStatus(404);
            }
        }
    });
    console.log(query.sql);
})
        
    
        app.delete('/datas/:id', function(req, res) {
            connection.query('DELETE FROM data WHERE id=? LIMIT 1', [req.data.id], (err, result) => {
	            if(err){
	                console.log(err);
	                res.sendStatus(404);
	            }else{
	                res.status(200).jsonp({affectedRows:result.affectedRows}).end();
	            }
	        });
	        console.log(query.sql)
	    });
          
        


app.get('/questions',function(req,res){
    var question = req.body;
    var query= ('SELECT * FROM question', (err, rows, fields) => {
       if(err){
	                console.error(err);
	                res.sendStatus(404);
	            }else{
	                res.status(201);
	               
	                res.end();
	            }
	    
	        console.log(query.sql);
            }) })
    
 
app.get('/questions:id',function(req,res){
    var query =connection.query('SELECT * FROM question where id=?',[req.question.id],(err,rows,fields) => {
       
        if (err) {
            //INVALID
            console.error(err);
            res.sendStatus(404);
        }else{
            if(rows.length){
                res.jsonp(rows);
            }else{
                //ID NOT FOUND
                res.sendStatus(404);
            }
        }
    });
    console.log(query.sql);
});




app.post('questions',function(req,res){
    var data = req.body; // maybe more carefully assemble this data
	        console.log(req.body)
	        var query = connection.query('INSERT INTO question SET ?', [question], (err, result) => {
	            if(err){
	                console.error(err);
	                res.sendStatus(404);
	            }else{
	                res.status(200);
	               
	                res.end();
	            }
	        });
	        console.log(query.sql);
	    });

    app.put('questions',function(req,res){
        var question= req.body;
        var query = connection.query('UPDATE question SET ? WHERE id=?', [question, req.question.id], (err, result) => {
        if (err) {
            //INVALID
            console.error(err);
            res.sendStatus(404);
        }else{
            if(rows.length){
                res.jsonp(rows);
            }else{
                //ID NOT FOUND
                res.sendStatus(404);
            }
        }
    });
    console.log(query.sql);
})
        
        
    
 app.delete('/datas/:id', function(req, res) {
    var data = req.body;
    connection.query('DELETE FROM data WHERE id=? LIMIT 1', [req.data.id], (err, result) => {
        if(err){
            console.log(err);
            res.sendStatus(404);
        }else{
            res.status(200).jsonp({affectedRows:result.affectedRows}).end();
        }
    });
    console.log(query.sql)
});
  
    

app.get('/datas',function(req,res){
    var query= ('SELECT * FROM question', (err, rows, fields) => {
        if(err){
                     console.error(err);
                     res.sendStatus(404);
                 }else{
                     res.status(201);
                    
                     res.end();
                 }
         
             console.log(query.sql);
             }) });

app.get('/datas/:id',function(req,res){
    var query =connection.query('SELECT * FROM data where id=?',[req.data.id],(err,rows,fields) => {
       
        if (err) {
            //INVALID
            console.error(err);
            res.sendStatus(404);
        }else{
            if(rows.length){
                res.jsonp(rows);
            }else{
                //ID NOT FOUND
                res.sendStatus(404);
            }
        }
    });
    console.log(query.sql);
});



app.post('datas',function(req,res){
    var data = req.body; // maybe more carefully assemble this data
    console.log(req.body)
    var query = connection.query('INSERT INTO data SET ?', [data], (err, result) => {
        if(err){
            console.error(err);
            res.sendStatus(404);
        }else{
            res.status(200);
           
            res.end();
        }
    });
    console.log(query.sql);
});

    app.put('datas',function(req,res){
        
        var data = req.body;
        var query = connection.query('UPDATE data SET ? WHERE id=?', [data, req.data.id], (err, result) => {
        if (err) {
            //INVALID
            console.error(err);
            res.sendStatus(404);
        }else{
            if(rows.length){
                res.jsonp(rows);
            }else{
                //ID NOT FOUND
                res.sendStatus(404);
            }
        }
    });
    console.log(query.sql);
})