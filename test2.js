var fs=require('fs');

S = require("./index");

var content=fs.readFileSync('weike.txt').toString();

var translated=S.t2s(content);

fs.writeFileSync('result.txt',translated);