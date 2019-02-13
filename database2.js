const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient;

var _rm;
const mongoconnect2=(callback)=>{
    MongoClient.connect('mongodb+srv://sanjay:sanjayji@cluster0-semln.mongodb.net/hotel?retryWrites=true',{ useNewUrlParser: true })
.then(client=>{
    console.log('Connected')
    _rm=client.db()
    callback()
})
.catch(err=>{
    console.log(err)
})
}
const getrm=()=>{
    if(_rm){
        return _rm;
    }
    throw 'No database found'
}



exports.mongoconnect2 = mongoconnect2
exports.getrm = getrm