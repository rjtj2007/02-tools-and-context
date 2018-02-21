Explain how hoisting allows the `printGreeting` function to be called before
where it's actually written in the file.

*The pringGreeting function creates a placeholder during the complie phase for the call before the function is run.
```js
printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}
```

Explain why this function called `printGoodbye` can't be executed until after
it's actually written in the file.

*The printGoodbye call is written as an arrow function and therefore will not recognize the call before the function is run during the execution phase.

```js
printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();
```