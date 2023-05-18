// Callstack
// Event Loop

/**
 * JavaScript handles async code using callbacks, promise and async/await
 * */

// setTimeout() -> https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// setInterval -> https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// clearTimeout -> https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
// clearInterval -> https://developer.mozilla.org/en-US/docs/Web/API/clearInterval

console.log("1st log");

setTimeout(() => {
  console.log("2nd log");
}, 0);

console.log("3rd log");

/* setInterval example */
// const timer = setInterval(() => {
//   console.log("timer ... ");
// }, 1000);
// const btn = document.querySelector("button");
// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   clearInterval(timer);
// });

// Callbacks ------------
function downloadImage(url, nextCallback) {
  setTimeout(() => {
    // in real life you have a script to download
    console.log(`Downloading ${url} ...`);
    // process the picture once it is completed
    nextCallback(url);
  }, 3000);
}

const url1 = "https://www.someurl.net/1.jpg";
const url2 = "https://www.someurl.net/2.jpg";
const url3 = "https://www.someurl.net/3.jpg";

downloadImage(url1, () => {
  console.log(`Processing ${url1}`);
  downloadImage(url2, () => {
    console.log(`Processing ${url2}`);
    downloadImage(url3, () => {
      console.log(`Processing ${url3}`);
      // Callback Hell ...
    });
  });
});

// Error Handling in Callbacks
// Callback Example 
function downloadImage2(url, nextCallback, failureCallback) {
  const rndNum = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (rndNum > 5) {
      console.log(`Downloading ${url} ...`);
      // process the picture once it is completed
      nextCallback(url);
    } else {
      failureCallback("Error occured!");
    }
  }, 1000);
}

downloadImage2(
  url1,
  function () {
    console.log(`Processing ${url1}`);
    downloadImage2(
      url2,
      function () {
        console.log(`Processing ${url2}`);
        downloadImage2(
          url3,
          function () {
            console.log(`Processing ${url3}`);
          },
          function (err) {
            console.log(err);
          }
        );
      },
      function (err) {
        console.log(err);
      }
    );
  },
  function (err) {
    console.log(err);
  }
);

// PROMISE ------------
// Object -> Fulfilled, Rejected, Pending states

let myPromise = new Promise((resolve, reject) => {
  resolve("FULFILLED!!!");
  //   reject("REJECTED!!!");
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise Example
function downloadImageViaPromise(url) {
  return new Promise((resolve, reject) => {
    const rndNum = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (rndNum > 5) {
        // process the picture once it is completed
        resolve(`Downloading ${url} ...`);
      } else {
        reject("Error occured in promise!!!");
      }
    }, 1000);
  });
}

downloadImageViaPromise(url1)
  .then(() => {
    console.log(`Processing ${url1}`);
    return downloadImageViaPromise(url2);
  })
  .then(() => {
    console.log(`Processing ${url2}`);
    return downloadImageViaPromise(url3);
  })
  .then(() => {
    console.log(`Processing ${url3}`);
  })
  .catch((err) => {
    console.log(err);
  });

// PROMISE VS ASYNC FUNCTIONS
function fetchData() {
  return new Promise((res, rej) => {
    res("HERE IS YOUR DATA");
    // rej("REJECTED");
  });
}

async function fetchData2() {
  return "HERE IS ASYNC FUNCTION";
}

console.log(fetchData()); // Promise
console.log(fetchData2()); // Promise

// ASYNC / AWAIT ------------

// await fetchData2(); // SyntaxError: await is only valid in async functions and the top level bodies of modules

// Async/await Example
function downloadImageViaAsync(url) {
  return new Promise((resolve, reject) => {
    const rndNum = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (rndNum > 5) {
        resolve(`Downloading ${url} ...`);
      } else {
        reject("Error occured in async/await!!!");
      }
    }, 1000);
  });
}

async function handleDownloadImage() {
  try {
    await downloadImageViaAsync(url1);
    console.log(`Processing ${url1}`);

    await downloadImageViaAsync(url2);
    console.log(`Processing ${url2}`);

    await downloadImageViaAsync(url3);
    console.log(`Processing ${url3}`);
  } catch (err) {
    console.log(err);
  }
}

handleDownloadImage();
