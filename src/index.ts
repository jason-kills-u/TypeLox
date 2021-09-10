if(process.argv.length > 3) {
  console.log("Usage: tlox [script]");
  process.exit(64);
} else if(process.argv.length == 3) {
  runFile(process.argv[2]);
}