var express = require('express');
var router = express.Router();
const {addCurrency,
  getCurrency,getCurrencyById,currentPrice} = require("../controllers/currency")

  const{createPrice,
    getCurrencyData}=require("../controllers/priceData");
const Currency = require('../models/currency');

/* GET home page. */
router.get('/currencies/all', async(req, res )=> {
  try{
    const currencies = await getCurrency();
    res.status(200).send(currencies);

  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});
router.get('/currency/:id', async(req, res )=> {
  try{
     const{id}=req.params;
     const currency=await getCurrencyById(id);
    res.status(200).send(currency);

  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/currency/price/:id', async(req, res )=> {
  try{
     const{id}=req.params;
     const price=await currentPrice(id);
    res.status(200).send(price);

  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});
router.get('/currency/data/:id', async(req, res )=> {
  try{
     const{id}=req.params;
     const data=await getCurrencyData(id);
    res.status(200).send(data);

  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/currencies/create', async(req, res )=> {
  try{
    const {name,symbol,type}=req.body;
     await addCurrency(name,symbol,type);
    res.status(200).json({message: "currency got added"});

  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/currencies/addprice', async(req, res )=> {
  try{
    const {currency,date,price}=req.body;
     await createPrice(currency,date,price);
    res.status(200).json({message: "price got added"});

  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
