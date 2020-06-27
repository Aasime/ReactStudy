var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET users listing. */
router.get('/recipe', function(req, res, next) {
  console.log("들어옴")
    db.query("SELECT * FROM recipe", (err,data)=>{//db에서 받아온 값이 data에 저장되는데 send로 보내면
      if(err) throw err;
      res.send(data)
    })
});

router.post('/like', function(req,res,next){
  console.log("좋아요")
  console.log(req.body)
  
  let sum = req.body.id+req.body.num; //that is string

  db.query("select EXISTS (select * from pushLove WHERE push =?) as success",[sum] ,(err,data)=>{ 
    console.log(data[0].success)
    if(data[0].success == 0){
    db.query("UPDATE recipe SET love=love+1 WHERE id =? ",[req.body.num+1],(err,data)=>{ 
      if(err) throw err;
      db.query("INSERT INTO pushLove (push) VALUE(?)", [sum], (err,data)=>{
        res.send("1")
      })
    })
  }
  else{
    res.send("0")
  }
  })
})

router.get(){

  
}

module.exports = router;