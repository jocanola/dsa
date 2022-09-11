let counter = 0;
function recursiveFunc() {
  debugger;
  if (counter > 3) {
    return "Done";
  }
  counter++;

  recursiveFunc();
}
//fin
