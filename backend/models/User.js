const mongoose = require("mongoose")

const homeAddressSchema = new mongoose.Schema(
    {
        fullname: {type: String, required: true},
        housenumber: {type: String, required: true},
        building: {type: String, required: true},
        street: {type: String, required: true},
        city: {type: String, required: true},
        postcode: {type: String, required: true},
    },
    {timestamps: true}
);

const workAddressSchema = new mongoose.Schema(
    {
        fullname: {type: String, required: true},
        housenumber: {type: String, required: true},
        building: {type: String, required: true},
        street: {type: String, required: true},
        city: {type: String, required: true},
        postcode: {type: String, required: true},
    },
    {timestamps: true}
);

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        tel: {type: String, required: true},
        isAdmin: {
            type: Boolean,
            default: false
        },
        homeAddress: {type:homeAddressSchema},
        workAddress: {type:workAddressSchema},
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema)


