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
    "h1": "DOM<br>is<br>awesome",
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
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//-----------Assignment starts here---------------:
//--------------------Header:--------------------------
const header = document.querySelector('header');

//Nav
const navBar = document.querySelector('nav');
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Nav a
const navItems = document.querySelectorAll('a');
navItems.forEach(links => links.style.color = 'green');

//navItems:
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

//prepend()
const firstNavItem = document.createElement('a');
firstNavItem.textContent = 'E-Commerce';
firstNavItem.href = '#';
firstNavItem.style.color = 'green';
navBar.prepend(firstNavItem);

//appendChild()
const lastNavItem = document.createElement('a');
lastNavItem.textContent = 'BlogSpot';
lastNavItem.href = '#';
lastNavItem.style.color = 'green';
navBar.appendChild(lastNavItem);

//-----------------------.cta:---------------------------
const ctaSection = document.querySelectorAll('.cta');

//H1
const headerH1 = document.querySelector('h1');
headerH1.innerHTML = siteContent.cta["h1"];

//img
const headerImg = document.getElementById('cta-img');
headerImg.src = siteContent.cta["img-src"];

//button
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta["button"];

//-------------------main-content:-----------------------
//Headers
const mainHeaders = document.querySelectorAll('h4');
mainHeaders[0].textContent = siteContent["main-content"]["features-h4"]; //Features
mainHeaders[1].textContent = siteContent["main-content"]["about-h4"]; //About
mainHeaders[2].textContent = siteContent["main-content"]["services-h4"]; //Services
mainHeaders[3].textContent = siteContent["main-content"]["product-h4"]; //Product
mainHeaders[4].textContent = siteContent["main-content"]["vision-h4"]; //Vision

//p (textContent)
const mainText = document.querySelectorAll('p');
mainText[0].textContent = siteContent["main-content"]["features-content"];
mainText[1].textContent = siteContent["main-content"]["about-content"];
mainText[2].textContent = siteContent["main-content"]["services-content"];
mainText[3].textContent = siteContent["main-content"]["product-content"];
mainText[4].textContent = siteContent["main-content"]["vision-content"];

//middle img
const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

//---------------------.contact:-------------------------
const contactSection = document.querySelectorAll('contact');

//h4
mainHeaders[5].textContent = siteContent["contact"]["contact-h4"];
//p[5]
mainText[5].innerHTML = siteContent["contact"]["address"];
//p[6]
mainText[6].textContent = siteContent["contact"]["phone"];
//p[7]
mainText[7].textContent = siteContent["contact"]["email"];

//----------------------footer:--------------------------
//p[8]
mainText[8].textContent = siteContent["footer"]["copyright"];