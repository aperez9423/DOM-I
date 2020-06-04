const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav section
let nav1 = document.querySelector('nav a:nth-child(1)');
nav1.textContent = siteContent.nav["nav-item-1"];

let nav2 = document.querySelector('nav a:nth-child(2)');
nav2.textContent = siteContent.nav["nav-item-2"];

let nav3 = document.querySelector('nav a:nth-child(3)');
nav3.textContent = siteContent.nav["nav-item-3"];

let nav4 = document.querySelector('nav a:nth-child(4)');
nav4.textContent = siteContent.nav["nav-item-4"];

let nav5 = document.querySelector('nav a:nth-child(5)');
nav5.textContent = siteContent.nav["nav-item-5"];

let nav6 = document.querySelector('nav a:nth-child(6)');
nav6.textContent = siteContent.nav["nav-item-6"];

//cta section
let circleImage = document.getElementById ("cta-img");
circleImage.setAttribute('src', siteContent["cta"]["img-src"]);

document.querySelector("h1").textContent = siteContent.cta["h1"];

document.querySelector("button").textContent = siteContent.cta["button"];

// maincontent
let middleImage = document.getElementById ("middle-img");
middleImage.setAttribute('src', siteContent ["main-content"]["middle-img-src"]);

let headingList = document.querySelectorAll('h4');

headingList[0].textContent = siteContent['main-content']['features-h4'];
headingList[1].textContent = siteContent['main-content']['about-h4'];
headingList[2].textContent = siteContent['main-content']['services-h4'];
headingList[3].textContent = siteContent['main-content']['product-h4'];
headingList[4].textContent = siteContent
['main-content']['vision-h4'];

let paragraphList = document.querySelectorAll('p');

paragraphList[0].textContent = siteContent['main-content']['features-content'];
paragraphList[1].textContent = siteContent['main-content']['about-content'];
paragraphList[2].textContent = siteContent['main-content']['services-content'];
paragraphList[3].textContent = siteContent['main-content']['product-content'];
paragraphList[4].textContent = siteContent['main-content']['vision-content'];

//contact section
headingList[5].textContent = siteContent['contact']['contact-h4'];
paragraphList[5].textContent = siteContent['contact']['address'];
paragraphList[6].textContent = siteContent['contact']['phone'];
paragraphList[7].textContent = siteContent['contact']['email'];

//footer section
paragraphList[8].textContent = siteContent['footer']['copyright'];

//add new content

let navItems =document.querySelectorAll('a');
navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green';
navItems[6].style.color = 'green';
navItems[7].style.color = 'green';

let nav = document.querySelector('nav')
let lastAnchor = document.createElement('a');
lastAnchor.textContent = "The End";
nav.appendChild(lastAnchor);
