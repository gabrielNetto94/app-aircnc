const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],

    user: {//user que criou o spot
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    toJSON: {
        virtuals: true,
    }
});

//este não está no banco, será apenas computado pelo javascript
SpotSchema.virtual('thumbnail_url').get(function(){ 
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);