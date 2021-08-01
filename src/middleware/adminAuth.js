const adminAuth=(req,res,next)=>{
    try {
        if (
          !(req.body.username === "admin" && req.body.password === "saanp")
        ) {
          return res.status(400).send("Wrong Credentials, Pls Contact Our Team");
        }
        next();
      } catch (error) {
        res.status(404).send(error);
      }
    }

module.exports = adminAuth