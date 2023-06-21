"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const validateEmail = function (email) {
    var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validate.test(email);
};
const clientSchema = new mongoose_1.default.Schema({
    companyName: {
        type: String,
        required: [true, "Please add the companyName"],
    },
    contactPersonFirstName: {
        type: String,
        required: [true, "please add the contact person Firstname"],
    },
    contactPersonMiddleName: {
        type: String,
        // required : [true,"please add the contact person Lastname"]
    },
    contactPersonLastName: {
        type: String,
        required: [true, "please add the contact person Lastname"]
    },
    contactPersonDesignation: {
        type: String,
    },
    primaryContactNumber: {
        type: Number,
        required: [true, "please add the primary contact number"]
    },
    secondaryContactNumber: {
        type: Number,
        // required: [true,"please add the secondary contact number"]
    },
    contactPersonEmailId: {
        type: String,
        required: [true, "please add the contact person EmailId"],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    companyEmailId: {
        type: String,
        required: [true, " Please add the Company EmailId"],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    country: {
        type: String,
        required: [true, "Please Select the country"]
    },
    state: {
        type: String,
        required: [true, "Please Select the State"]
    },
    timeZone: {
        type: String,
        required: [true, "Please add the TimeZone"]
    },
    companyDomain: {
        type: String,
        required: [true, "Please add the domain"]
    },
    companyUrl: {
        type: String,
        required: [true, "Please add the Company Url "]
    }
}, {
    versionKey: false,
    timestamps: true,
});
const clientModel = (0, mongoose_1.model)("Client", clientSchema);
exports.default = clientModel;
