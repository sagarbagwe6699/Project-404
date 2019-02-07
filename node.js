const express=require('express')
var bodyParser=require('body-parser')
const mongoconnect=require('./database').mongoconnect
const getdb=require('./database').getdb
const app=express()
mongoconnect(client=>{
        console.log(client)
})
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var rest=[];

app.post('/login',async(req,res,next)=>{
    console.log(req.body.message)
        const db=getdb()
        var rex=null
        try{
        rex=await db.collection('user').find({name:req.body.message}).toArray()
        console.log(rex);
        if(rex.length!=0)
            rest[0]=rex[0]
        else
            rest=[]
        }
        catch(err){
            console.log(err)
        }
    console.log(rest)
    if(rest.length!=0)
    {
        if(rest[0].pass===req.body.password)
            res.json(rest[0].name)
        else
            res.json(false)
    }
    else
        res.json(false)
      
})

app.post('/signup',async(req,res,next)=>{
    const db=getdb()
    var rex=null
    try{
        rex=await db.collection('user').find({name:req.body.message}).toArray()
        console.log(rex);
        if(rex.length==0)
        {
            const result=await db.collection('user')
            .insertOne({name:req.body.message,pass:req.body.password})
            console.log(result)
        }
        else
            res.json(false)
        }
        catch(err){
            console.log(err)
        }
        res.json(req.body.message)
})

/*function habibi(msg){
    
    const db=getdb()
    db.collection('user')
    .find({name:"sanjay"}).toArray()
    .then(rex=>{console.log(rex);
        rest.push(rex[0])
    return rex})
    return 'l'
}*/

app.listen(3001,()=>{console.log('now conn')})

