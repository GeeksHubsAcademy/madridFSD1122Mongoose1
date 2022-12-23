
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    carId: {
        type: Schema.Types.ObjectId, ref: 'Car',
        required: true
    },
    fechaInicio: {
        type: Date
    },
    fechaFin: {
        type: Date
    },
    importe: { 
        type: Number
    }

});

const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;