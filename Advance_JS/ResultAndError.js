saveToDBPromise("Fatima Gul")
  .then((result) => {
    console.log("result : ", result);
    console.log("promise1 resolved");
    return saveToDBPromise("hello world");
  })
  .then((result) => {
    console.log("result : ", result);
    console.log("promise2 resolved");
  })
  .catch((error) => {
    console.log("error of promise : ", error);
    console.log("some promise rejected");
  });
