const Spot = require('../models/Spot');
const User = require('../models/User')

module.exports = {

    async index(req, res){
        
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res){
        const { filename } = req.file; //pega o nome do arquivo da requisição http
        const { company, techs, price } = req.body; //pega do corpo da requisição
        const { user_id } = req.headers; //pega do header da requisição

        const user = await User.findById(user_id);

        if(!user){
            return res.status(404).json({error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company: company,
            techs: techs.split(',').map( tech => tech.trim()), //percorre a string splitada e remove os espaços em branco com o "trim()"
            price: price
        })
        
        return res.json(spot);
    }
};