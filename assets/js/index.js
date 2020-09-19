"use strict";

/* const p1 = new Promise((resolve, reject) => {
  resolve("RESOLVED PROMISE");
});

console.log(p1);

p1.then(
  (string) => {
    console.log("then result:", string);

    const p2 = new Promise((resolve,reject)=>{
        resolve(string);
    })

    return p2;
  },
  (err) => {
    console.error(err);
  })
  .then(
      (test)=>{
          console.log(test);
      }

  ) */

const ul = document.getElementById("ul");

fetch("/user.json")
  .then((res) => res.json())
  .then((arr) => {
    console.log(arr);
    arr.map((obj) => {
      const li = document.createElement("li");
      ul.append(li);
      li.append(JSON.stringify(obj));
    });
  });
