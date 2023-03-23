const router = require('express').Router();

const User =  require('../models/user');

const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');

 const checkAuth = require('../middleware/check-auth');




router.post('/register',(req,res)=>{
    bcrypt.hash(req.body.password,10,(err, hash)=>{
        if(err){
             return res.json({success:false,message:"Hash Error!"})
        }else{

            const user = new User({
      
                displayName: req.body.displayName,
                email: req.body.email,
                password: hash,
                mobileNumber:req.body.mobileNumber,
                companyName:req.body.companyName
        
        
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
    // res.json("Login Work")
   console.log(req.cookies)
  User.find({email:req.body.email}).exec().then((result) => {
   if(result.length < 1){
    return res.json({success:false , message: "User Not Found !!"})
  }
  const user = result[0]
  bcrypt.compare(req.body.password, user.password, (err, ret)=>{
    if(ret){
        const payload ={
            userId: user._id,
            
        }
     const token =  jwt.sign(payload,"webBatch");
                    res.cookie('auth',token)
             return res.json({success:true,token:token,message:"Login Successful."})
        }
        // return res.json({success:true, message:"Login Successful."})
    else{
       
        return  res.json({success:false,message:"Password does not Match!!"})
    }
  })

  }).catch(err => {
    res.json({success: false, message:"Authentication Failed!!"})
  } )

})

router.get('/profile', checkAuth, (req,res)=>{
    // const userId = "6412d2959407446f48d3c86e";

    const userId = req.userData.userId;
    User.findById(userId).exec().then((result)=>{
         res.json({success:true,data:result})  
    }).catch(err=>{
        res.json({success:false,message:"Server error"})
    })


// try{
//     let user = await User.findById({_id:userId});
//     if(user) {
//         console.log("hghf",user)
//         res.json({success:true,data:user}) 
//     }
//     else{
//         res.json({success:false,message:"internal error"})
//     }
// }catch(err){
//     console.log(err)
//     res.json({success:false,message:"Server error"})
// }
})





module.exports = router