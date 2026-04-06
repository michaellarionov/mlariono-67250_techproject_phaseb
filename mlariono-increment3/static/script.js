
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
  var result = x1 + x2;
  console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
  if (C.length < z) {
    console.log(z);
  }
  console.log(C);
} else {
  console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Banana") {
      alert("Banana found!");
    }
  }
}

findTheBanana(L1);
findTheBanana(L2);

/*
function findTheBanana(arr) {
  arr.forEach(function(item) {
    if (item === "Banana") {
      alert("Banana found!");
    }
  });
}

findTheBanana(L1);
findTheBanana(L2);
*/

var now = new Date();
var hour = now.getHours();

function greeting(h) {
  var greetingEl = document.getElementById("greeting");
  if (!greetingEl) return;

  if (h < 5 || h >= 20) {
    greetingEl.innerHTML = "Good night! Welcome to the MonoMuse Museum";
  } else if (h < 12) {
    greetingEl.innerHTML = "Good morning! Welcome to the MonoMuse Museum";
  } else if (h < 18) {
    greetingEl.innerHTML = "Good afternoon! Welcome to the MonoMuse Museum";
  } else {
    greetingEl.innerHTML = "Good evening! Welcome to the MonoMuse Museum";
  }
}

greeting(hour);

function addYear() {
  var yearEl = document.getElementById("copyYear");
  if (!yearEl) return;
  yearEl.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
}
