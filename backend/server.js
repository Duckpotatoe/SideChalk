const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest:'uploads/'});
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
app.use(cors({ origin: 'http://localhost:8080' }));

app.use(express.json({limit: '50mb'}));

app.post('/api/analyze', upload.single('image'), (req, res) => {
    console.log(req.body.imageID);
    console.log(req.file);
    res.json(req.body); //next up is to not end the res but res with the updated analysis
});


app.listen(port, (err) => {
    if (err) console.log(err);
    console.log("Server listening on PORT:", port);
});
