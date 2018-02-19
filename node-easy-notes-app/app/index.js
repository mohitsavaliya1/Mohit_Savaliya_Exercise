let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
	res.json({"message": "welcome!"});
});

require('./notes/routes/note.routes.js')(app);
require('./Users/routes/user.routes.js')(app);
require('./Groups/routes/group.routes.js')(app);

app.listen(3000, ()=>{
	console.log("localhost started at port no. 3000");
})

module.exports = app;
