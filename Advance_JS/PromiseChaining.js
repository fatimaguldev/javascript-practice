// improved version of promise

saveToDBPromise("Fatima Gul")
  .then(() => {
    console.log("promise1 resolved");
    return saveToDBPromise("hello world");
  })
  .then(() => {
      console.log("promise2 resolved");
      
  })
  .catch(() => {
    console.log("some promise rejected");
  });
