const mongoose = require("mongoose");

const homestaySchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    state:{
        type:String,
        required:true
    },

    country:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    image:{
        type:String
    },

    category:{
        type:String,
        enum:[
            "Mountain",
            "Forest",
            "Beach",
            "Village",
            "Camping",
            "Luxury"
        ]
    },

    ecoScore:{
        type:Number,
        default:5
    },

    amenities:[
        String
    ],

    maxGuests:{
        type:Number,
        default:2
    },

    rating:{
        type:Number,
        default:5
    }
},
{
timestamps:true
});

module.exports=mongoose.model("Homestay",homestaySchema);