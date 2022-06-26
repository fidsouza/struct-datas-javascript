import readline from "readline-sync";

function recursiveFunction(someParam) {
  recursiveFunction(someParam);
}

function understandRecursion(doIUnderstandRecursion) {
  let recursionAnswer = readline.question(" Do You Understand Recursion?");
  if (recursionAnswer === "true") {
    return true;
  }
  understandRecursion(recursionAnswer);
}

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fiboMemoization(n) {
  if (n < 1) {
    return 0;
  }
  const memo = [0, 1];
  const fibonnaci = (num) => {
    if (memo[num] != null) return memo[num];
    return (memo[num] = fibonnaci(num - 1) + fibonnaci(num - 2));
  };
  return fibonnaci(n);
}

console.log(`fiboMemoization`, fiboMemoization(2));
