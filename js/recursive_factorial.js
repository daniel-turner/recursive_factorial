function recursive_factorial(number) {

  var parsedNumber = parseInt(number);

  if(typeof parsedNumber !== "number") {

    return "Invalid input.";
  }

  if(isNaN(parsedNumber)) {

    return "Invalid input.";
  }

  function recurse(number) {

    if(number < 1) {

      return 1;
    }

    return number * recurse(number - 1);
  }

  var out = recurse(parsedNumber);

  console.log(out);

  return out;
}

module.exports = recursive_factorial;