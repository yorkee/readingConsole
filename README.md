# readingConsole
A simple spike for reading whats on console.


## why???

we are tring to have a program screen the console output, if there is any sign of error or problem, we can do something about it. 


## this looks like a hack!

Yes it is.  On the other hand, It takes me 1/2 hr just to kick-start it.  I suspect it takes only another 1/2 hr to integrate with gmail-notification (git@github.com:yorkee/gmailNotification.git)

It takes longer for me to setup logstash / kanaba and I can't even make use of it like these tools.

## ok... so how to use it?

first, if anything change, compile.  `npm run transpile`

running `node lib/index.js` will just capture anything pipe to it.  In real life, you can do `<whatever-awesome-command-you-run-that-produce-console-output> | node lib/index.js` then modify the if statement in index.js to do whatever you want.  

## to use it in a more friendly way

1. `npm install -g git+ssh://git@github.build.ge.com/212581716/readingConsole.git`

2. `vi ~/.gmailNotification` , put in the following:
		`{
			"to": ["email_receptient@ge.com"],
			"from": "emailFrom@gmail.com", 
			"password": "gmail password",
			"heading": "email header",
			"strings": ["phases", "to capture"]
		}`

3. someCommandThatOutputLongConsole | consolemail

4. check email.

## testing

Since this is simple enough to consider as a short-handed script, I am not going to put a test suite, unless it grow bigger.  the way I test it is to create a test.js just randomly create console output, and let index.js to capture.  If you see it capturing error, and seeing the sky is falling, it is doing its job.
