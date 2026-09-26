// 1. First declaration and call
let request = saveToDBPromise("apna ghar");
request
  .then(() => {
    console.log("promise resolved");
  })
  .catch(() => {
    console.log("promise rejected");
  });


