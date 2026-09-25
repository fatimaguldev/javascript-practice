// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "fatima gul",
//   () => {
//     console.log("Success! your data was stored!");
//     savetoDb(
//       "hello world!",
//       () => {
//         console.log("success2: data2 saved");
//         savetoDb(
//           "fatima Gul",
//           () => {
//             console.log("success3: data3 saved");
//           },
//           () => {
//             console.log("failure3: data3 not saved");
//           },
//         );
//       },
//       () => {
//         console.log("failure2: data2 not saved");
//       },
//     );
//   },
//   () => {
//     console.log("Failure: weak connection! your data was not stored");
//   },
// );

// the above code is a callback hell
// now we have to solve this with promises


function savetoDb(data) {
  
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

savetoDb("apna college");

