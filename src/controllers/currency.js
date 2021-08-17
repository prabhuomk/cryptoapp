const Currency = require ("../models/currency");


const addCurrency = async(name,symbol,type)=>{

    const doc=await new Currency({name,symbol,type}).save();
    return doc;

};

const getCurrency =async()=>{

    const doc=await Currency.find().exec();
    return doc;
};

const getCurrencyById =async(_id)=>{

    const doc=await Currency.find(_id).exec();
    return doc;
};

const currentPrice =async(_id)=>{

    const doc=await Currency.find({_id},{currentPrice:1 , _id:0}).exec();
    return doc;
};

module.exports ={addCurrency,
    getCurrency,getCurrencyById,
    currentPrice

};