const functions = require("firebase-functions");
const express=require('express');
const cors=require("cors");
const { response } = require("express");
const stripe=require('stripe')('sk_test_51INv8tIeTWDkEzfhhC1KwbxDQ8uftMVV674vttSMDTHJAp9y6YuHXBhoXhIY8kk8fcLFiXTaFGxljqDeuqXesU2400wve8uUPb')
const app=express();
app.use(cors({origin:true}));
app.use(express.json());
app.get('/',(request,response)=>response.status(200).send('hello world'));
app.post('/payments/create',async(request,response)=>{
    const total=request.query.total;
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:usd
    })
})
response.status(201).send({
    clientSecret:paymentIntent.client_secret,
})
exports.api=functions.https.onRequest(app);