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
    console.log(req.body.mailid)
        const db=getdb()
        var rex=null
        try{
        rex=await db.collection('user').find({mail:req.body.mailid}).toArray()
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
        {
            var obj={
                fname:rest[0].fname,
                lname:rest[0].lname,
                mail:rest[0].mail,
                pass:rest[0].pass,
                address:rest[0].address
            }
            res.json(obj)
        }
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
        rex=await db.collection('user').find({mail:req.body.mail}).toArray()
        console.log(rex);
        if(rex.length==0)
        {
            const result=await db.collection('user')
            .insertOne({fname:req.body.fname,lname:req.body.lname,mail:req.body.mail,pass:req.body.pass,address:req.body.address})
            console.log(result)
            var obj={
                fname:req.body.fname,lname:req.body.lname,mail:req.body.mail,pass:req.body.pass,address:req.body.address
            }
            res.json(obj)
        }
        else
            res.json(false)
        }
        catch(err){
            console.log(err)
        }
        
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

