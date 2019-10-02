const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({//model 
    
    date: String,
    approved: Boolean,
    user: {//user que solicitou o booking
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot:{//company solicitada
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }

})

module.exports = mongoose.model('Booking', BookingSchema);