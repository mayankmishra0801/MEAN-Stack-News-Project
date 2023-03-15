const router = require('express').Router();

const User =  require('../models/user');

const bcrypt = require('bcrypt');




router.post('/register',(req,res)=>{
    bcrypt.hash(req.body.password,10,(err, hash)=>{
        if(err){
             return res.json({success:false,message:"Hash Error!"})
        }else{

            const user = new User({
      
                displayName: req.body.displayName,
                email: req.body.email,
                password: hash,
        
        
            })

            user.save()
            .then((_)=>{
                res.json({success:true,message:"Account has been created"})
            })
            .catch((err)=>{
                if(err.code === 11000){
                    return res.json({success:false, message:"Email Already  Exist!" })
                }
                res.json({success:false,message:"Authentication Failed !!"})
            })
        
            // res.json("Register Work")
       }});
            
    }
    
)
    


  

//     user.save()
//     .then((_)=>{
//         res.json({success:true,message:"Account has been created"})
//     })
//     .catch((err)=>{
//         if(err.code === 11000){
//             return res.json({success:false, message:"Email Already  Exist!" })
//         }
//         res.json({success:false,message:"Authentication Failed !!"})
//     })

//     // res.json("Register Work")
// });
router.post('/login',(req,res)=>{
    res.json("Login Work")
})



module.exports = router