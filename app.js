const express = require('express');
const app = express();
const userRouter = require('./routes/user.router');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/users', userRouter)
app.listen(5000, ()=>{
    console.log(`App listen 5000`)
})

// const fs = require('fs');
//
// fs.readFile(`${__dirname}/dataBase/users.json`, ((err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     let user = JSON.parse(data.toString());
//     console.log(user);
// }));