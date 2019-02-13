const express=require('express')
var bodyParser=require('body-parser')
const mongoconnect2=require('./database2').mongoconnect2
const getrm=require('./database2').getrm
const app=express()
mongoconnect2(client=>{
        console.log(client)
})
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var rest=[];

app.post('/login',async(req,res,next)=>{
    console.log(req.body)
        const rm=getrm()
        var rex2=null;
        try{
        rex2=await rm.collection('room').find({isavailable:true}).toArray()
        // console.log(rex);
        console.log(rex2);
        if(rex2.length!=0)
            rest=rex2
        else
            rest=[]
        }
        catch(err){
            console.log(err)
        }
        console.log("abcdefg")
    console.log(rest)
    if(rest.length!=0)
    {
    res.json(rest)
    }
    else
        res.json(false)
      
})


app.listen(3002,()=>{console.log('now conn')})

