
app = require("./app");
var http = require('http');

app.set("data_dir", "public/test_data/");
app.set("data_dir_web", "test_data/");

var server = http.createServer(app).listen(process.env.PORT, function() {
    console.log('Express server listening on port ' + process.env.PORT);
});