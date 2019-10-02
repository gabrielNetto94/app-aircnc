const User = require('../models/User');

module.exports = {
    async store(req, res){
        const email = req.body.email; //ou const { email } = req.body;
        
        let user = await User.findOne({email});
            if(!user){
                 user = await User.create({ email });
            }else{
                return res.json({message:'User already exists',user})
            }
        return res.json(user);
    }
};