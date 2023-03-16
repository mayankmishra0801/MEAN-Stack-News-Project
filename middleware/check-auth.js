const jwt = require('jsonwebtoken')

module.exports = (req,res,next) =>{
  
  try{
    
 const token = req.headers.authorization.split('Bearer')[1];
 console.log("token",token)
  //  return res.json(token);

const decode = jwt.verify(token,"webBatch")

  req.userData = decode
 

  // return  res.json(decode);
  
  next();


} catch(error){
  console.log(error)
  res.json({success: false, message:"Auth Failed!"})
}
}

