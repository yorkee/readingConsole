#! /usr/bin/env node

import EmailNotification from "gmailNotification";
import fs from "fs";

var content = fs.readFileSync(process.env['HOME'] + "/.gmailNotification");
var setting = JSON.parse(content);

setting = Object.assign(	{
		to: ["sender@somethign.com"],
		from: "test@gmail.com", 
		password: "", 
		heading: "test",
		strings: ["error", "timeout"]
	},
	setting
)

var stdin = process.openStdin();

// the string that should alert and send out notification
// note, it execute in a loop for every chunk of data we get.  so try to keep this small.

let emailNotify = new EmailNotification(
	setting.to, 
	setting.heading,
	setting.from, 
	setting.password);


stdin.on('data', function(chunk) {

	console.log(chunk.toString());
	if (setting.strings.some(function(v) { 
		return chunk.indexOf(v) >= 0; 
	})) {
	  	emailNotify.sendMail("error:  "+ chunk.toString());
	  	console.log("READING CONCOLE DETECTION!  oh, we got error!  send an email out now!");
	}


  // if (chunk.includes("error")){
  // 	emailNotify.sendMail("error");
  // 	console.log("oh, we got error");
  // } else if (chunk.includes("sky is falling")){
  // 	emailNotify.sendMail("sky is falling");
  // 	console.log("omg we got problem!!!!");
  // }
});

