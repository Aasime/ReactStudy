var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var db = require('../db/db');

router.post('/', function(req, res, next) {
    let obj={};
    console.log(req.body)
    db.query('select EXISTS (select * from userinfo WHERE id = ? AND pw =?) as success',[req.body.id, req.body.pw],(err,data)=>{
        if(data[0].success){
            obj['isLoggined'] = true; //세션 저장용  
            res.send("1")
        }         
        else{
            obj['isLoggined'] = false;
            res.send("0")
        }
    })
});

router.post('/SignUp', (req,res,next)=>{
    console.log(req.body)
    db.query('INSERT INTO userinfo (id,pw,email) VALUES(?,?,?)',[req.body.signid, req.body.signpw,req.body.email],(err,data)=>{
        if(err) throw err;
        res.send("회원가입 들어갔습니당"); 
    })
});

module.exports = router;
