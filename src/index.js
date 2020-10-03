const app = require('./app');

//Initialize Server:
app.listen(app.get('port'),()=>{
    console.log(`Server on PORT ${app.get('port')}`);
});