
// External libraries used:
//   Google Fonts — Roboto typeface loaded via CDN <link> in each HTML page
//   jQuery 4.0.0  — https://code.jquery.com/jquery-4.0.0.min.js (loaded only on index.html)
//   Leaflet 1.9.4 — https://unpkg.com/leaflet@1.9.4 (loaded only on explore.html)

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

/*
findTheBanana(L1);
findTheBanana(L2);
*/

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


// Leaflet Map

if (document.getElementById("map")) {
  var map = L.map('map').setView([40.4444, -79.9428], 15);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([40.4444, -79.9428]).addTo(map)
    .bindPopup('MonoMuse Museum')
    .openPopup();
}


// ── Part 3: Hamburger Nav Toggle ──

function toggleNav() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('responsive');
}


// ── Part 6: Buy Tickets Form ──

function showForm(date) {
  document.getElementById("purchaseForm").style.display = "block";
  document.getElementById("buyDate").value = date;
  document.getElementById("purchaseForm").scrollIntoView({ behavior: "smooth" });
}

// Calculate and display running ticket total ($18 per ticket)
function updatePrice() {
  var qty = parseInt(document.getElementById("buyQuantity").value) || 1;
  var total = qty * 18;
  document.getElementById("totalPrice").textContent = "Total: $" + total.toFixed(2);
}

// Validate form fields and redirect to confirmation page on success
function placeOrder() {
  var valid = true;

  var dateVal = document.getElementById("buyDate").value;
  var dateErr = document.getElementById("dateError");
  if (!dateVal) {
    dateErr.style.display = "block";
    valid = false;
  } else {
    dateErr.style.display = "none";
  }

  var typeVal = document.getElementById("ticketType").value;
  var typeErr = document.getElementById("typeError");
  if (!typeVal) {
    typeErr.style.display = "block";
    valid = false;
  } else {
    typeErr.style.display = "none";
  }

  var qtyVal = parseInt(document.getElementById("buyQuantity").value);
  var qtyErr = document.getElementById("quantityError");
  if (!qtyVal || qtyVal < 1 || qtyVal > 10) {
    qtyErr.style.display = "block";
    valid = false;
  } else {
    qtyErr.style.display = "none";
  }

  var emailVal = document.getElementById("buyEmail").value;
  var emailErr = document.getElementById("emailError");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    emailErr.style.display = "block";
    valid = false;
  } else {
    emailErr.style.display = "none";
  }

  var zipVal = document.getElementById("buyZip").value;
  var zipErr = document.getElementById("zipError");
  if (zipVal && !/^[0-9]{5}$/.test(zipVal)) {
    zipErr.style.display = "block";
    valid = false;
  } else {
    zipErr.style.display = "none";
  }

  if (!valid) return;

  var mailingVal = document.getElementById("mailingList").checked ? "Yes" : "No";
  var totalVal = (qtyVal * 18).toFixed(2);

  // Save order to sessionStorage and navigate to confirmation page
  sessionStorage.setItem("orderDate", dateVal);
  sessionStorage.setItem("orderType", typeVal);
  sessionStorage.setItem("orderQty", qtyVal);
  sessionStorage.setItem("orderEmail", emailVal);
  sessionStorage.setItem("orderMailing", mailingVal);
  sessionStorage.setItem("orderTotal", "$" + totalVal);

  window.location.href = "confirmation.html";
}

// Populate confirmation page with sessionStorage order data
function loadConfirmation() {
  var fields = {
    confDate:    "orderDate",
    confType:    "orderType",
    confQty:     "orderQty",
    confEmail:   "orderEmail",
    confMailing: "orderMailing",
    confTotal:   "orderTotal"
  };
  for (var id in fields) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = sessionStorage.getItem(fields[id]) || "—";
    }
  }
}


// ── Part 4: Active Navigation ──

function ActiveNav() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (window.location.href === link.href) {
      link.classList.add("active");
    }
  });
}

ActiveNav();


// ── Part 5: Read More / Read Less (jQuery) ──

if (typeof $ !== 'undefined') {
  $("#readMore").click(function() {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
  });

  $("#readLess").click(function() {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
  });
}


// Gallery Slideshow

var currentSlide = 0;
var captions = [
  "Gallery Hall — Natural Light Wing",
  "Ancient Artifacts — Special Exhibition",
  "Grand Interior — Architecture & Art",
  "Contemporary Installations — Main Gallery"
];

function changeSlide(direction) {
  var slides = document.querySelectorAll(".gallery-img");
  if (!slides.length) return;

  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");

  var caption = document.getElementById("galleryCaption");
  if (caption) caption.textContent = captions[currentSlide];
}
