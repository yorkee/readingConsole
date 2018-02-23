setTimeout(function(){
  console.log("everything is fine");
}, 2000);

setTimeout(function(){
  console.log("there is little error because of error");
}, 4800);

setTimeout(function(){
  console.log("the sky is falling!!!");
}, 6200);

setTimeout(function(){
  console.log("the rest are just fine...");
}, 8000);

setTimeout(function(){
  console.log("this is also just fine...");
}, 10000);

setTimeout(function(){
  console.log("nothing going on here.");
}, 12000);

setTimeout(function(){
  console.log("hahaha Error.  sky is falling again!");
}, 13000);

setTimeout(function(){
  console.log("the rest are just fine...");
}, 14000);

setTimeout(function(){
  console.log("just fine...");
}, 15000);

setTimeout(function(){
  console.log("just fine again...");
}, 18000);


process.on("SIGPIPE", process.exit);

