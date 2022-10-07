// Function to check if brackets are balanced
function areBracketsBalanced(expr) {
  let stack = [];

  for (const char of expr) {
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
      continue;
    }

    // So the stack cannot be empty at this point because its just starting
    if (stack.length == 0) return false;

    let check;

    switch (char) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;
      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  return stack.length == 0;
}

let expr = '([{}])';

if (areBracketsBalanced(expr)) {
  console.log('Balanced');
} else {
  console.log('Not Balanced');
}