2-arguments.js
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

// const count = process.argv[2];
// if(args.length === 0){
//   console.log('No Agument found');
// } else if(args.length ===1){
//   console.log(Arguments found);
// } else{
//   console.log(Arguments found);
// }