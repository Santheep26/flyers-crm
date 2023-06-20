import mongoose, { model } from "mongoose";

const validateEmail = function(email : any) {
    var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validate.test(email)
};
const clientSchema = new mongoose.Schema({
    companyName : {
        type : String,
        required: [true, "Please add the companyName"],
    },
    contactPersonFirstName : {
        type : String,
        required: [true,"please add the contact person Firstname"],
    },
    contactPersonMiddleName :{
        type : String,
       // required : [true,"please add the contact person Lastname"]
    },
    contactPersonLastName : {
        type : String,
        required : [true,"please add the contact person Lastname"]

    },
    contactPersonDesignation : {
        type : String,
    },
    primaryContactNumber : {
        type: Number,
        required: [true,"please add the primary contact number"]

    },
    secondaryContactNumber : {
        type: Number,
       // required: [true,"please add the secondary contact number"]

    },
    contactPersonEmailId : {
        type : String,
        required: [true,"please add the contact person EmailId"],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique : true
    },
    companyEmailId : {
        type : String,
        required : [true, " Please add the Company EmailId"],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique : true
    },
    country : {
        type : String,
        required : [true, "Please Select the country"]
    },
    state : {
        type : String,
        required : [true, "Please Select the State"]
    },
    timeZone: {
        type : String,
        required : [true, "Please add the TimeZone"]
    },
    companyDomain : {
        type : String,
        required : [true, "Please add the domain"]
    },
    companyUrl : {
        type : String,
        required : [true, "Please add the Company Url "]
    }
},
{
    versionKey : false,
    timestamps : true,
})
const clientModel = model("Client", clientSchema);

export default clientModel;