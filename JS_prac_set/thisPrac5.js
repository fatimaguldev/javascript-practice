// What is the output of the following code:

const object = {
  message: "Hello,World!",
  logMessage() {
    console.log(this.message);
  },
};
setTimeout(object.logMessage, 1000);

// Why undefined is Logged to the ConsoleWhen you pass a method as a callback to setTimeout(), the function loses its connection to its parent object.The Issue: While the setTimeout() function uses object.logMessage as a callback, it still invokes object.logMessage as a regular function rather than an object method.The Context: During a regular function invocation, the this keyword defaults to the global object.The Environment: In a browser environment, this global object is the window.The Outcome: Inside the logMessage method, console.log(this.message) attempts to read window.message. Because window.message does not exist, it evaluates to undefined and logs it to the console after a delay of 1 second.Common FixesTo fix this issue and retain the correct this context, you can use one of the following methods:Arrow Function: setTimeout(() => object.logMessage(), 1000);Function Binding: setTimeout(object.logMessage.bind(object), 1000);Anonymous Wrapper: setTimeout(function() { object.logMessage(); }, 1000);Please let me know if you would like to:See the complete code example featuring the object and the fixLearn more about how the this keyword behaves in JavaScriptExplore how strict mode ("use strict";) changes this behavior