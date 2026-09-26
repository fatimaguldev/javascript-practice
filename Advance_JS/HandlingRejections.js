fakeDatabaseCall()
  .then((result) => {
    console.log("Step 1 Success:", result);
    return fakeDatabaseCall(); // Another network call
  })
  .then((result2) => {
    console.log("Step 2 Success:", result2);
  })
  .catch((error) => {
    //  This single catch handles rejections from BOTH step 1 and step 2
    console.error("A promise in the chain rejected:", error.message);
  });
