const Booking = require('../models/Booking');
const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const user = await User.findById(user_id); //verifica se o usuário existe
        if(!user){
            return res.json({message:'User does not exists!'});
        }
        const spot = await Spot.findById(spot_id)//verifica se o spot existe
        if(!spot){
            return res.json({message:'Spot does not exists!'});
        }

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date: date,
        });
        
        //popula o booking que foi retornado apenas com user_id, spot_id e data com o restante das informações com base nos id's
        await booking.populate('spot').populate('user').execPopulate();//explodiu minha mente!

        return res.json(booking);
    },

}