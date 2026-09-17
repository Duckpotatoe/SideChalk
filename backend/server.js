const express = require('express');
const app = express();
const port = 3000;
/*
app.use basically calls whenever it gets a req/res then moves onto next middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
The next command can be used to route to a seperate thingy


//Upon recieving a req in the form of a URL it will then do said actions
app.get('/api/analyze/subject/:subjectID', (req, res, next) => {
    if (req.params.subjectID == '24'){
        return next('route');
    }
    res.send(req.params);
});
s
app.get('/api/analyze/subject/:subjectID', (req, res) =>{
    res.send('W TEST')
})
*/



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
/*
app.post('/api/analyze', (req, res) => {
    const newUser = req.body;
}) 
*/