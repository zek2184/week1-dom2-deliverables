// Task 5.0
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
const mainEl = document.querySelector('main'); // Tasks 1
mainEl.style.backgroundColor = 'var(--main-bg)'; // Task 1.1
mainEl.innerHTML='<h1>SEI Rocks!</h1>'; // Task 1.2 
mainEl.classList.add('flex-ctr'); // Task 1.3
const topMenuEl = document.getElementById('top-menu');// Task 2.0
topMenuEl.style.height = '100%'; // Task 2.1
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'; // Task 2.2
topMenuEl.classList.add('flex-around');  //Task 2.3

// Task 3.1
menuLinks.forEach(function(menuItem){
    Object.assign(topLink  = document.createElement('a'),
    topLink.setAttribute('href', menuItem.href),
    topLink.textContent = menuItem.text,
    topMenuEl.appendChild(topLink)
    );
  }
);
console.log(topMenuEl);

const subMenuEl = document.getElementById('sub-menu'); // Task 4.0
subMenuEl.style.height = '100%'; // Task 4.1
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'; // Task 4.2
subMenuEl.classList.add('flex-around'); // Task 4.3
subMenuEl.style.position = 'absolute'; // Task 4.4
subMenuEl.style.top = '0'; // Task 4.5




// Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

// Task 5.2
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  const linkItem = event.target;
  if (linkItem.tagName !== 'A') return;
  console.log(linkItem.textContent);

  // Task 5.3
  if (linkItem.classList.contains('active')) {
    linkItem.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  // Task 5.4
  topMenuLinks.forEach(function(linkItem) {
    linkItem.classList.remove('active');
  });


  linkItem.classList.add('active'); // Task 5.5

  // Task 5.6
  const linkVal = menuLinks.find(function(link) {
    return link.text === linkItem.textContent;
  });
  showingSubMenu = 'subLinks' in linkVal;

  // Task 5.7
  if (showingSubMenu) { // True
    buildSubMenu(linkVal.subLinks);
    subMenuEl.style.top = '100%';
  } else { // False
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
  }
});

// Task 5.8
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link) {
    linkElement = document.createElement('a');
    linkElement.setAttribute('href', link.href);
    linkElement.textContent = link.text;
    subMenuEl.appendChild(linkElement);
  });
}

// Task 6.0
subMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  clickLink = event.target;
  if (clickLink.tagName !== 'A') return;
  console.log(clickLink.textContent);
  // Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  // Task 6.2
  topMenuLinks.forEach(function(clickLink) {
    clickLink.classList.remove('active');
  });
  // Task 6.3
  mainEl.innerHTML = `<h1>${clickLink.textContent}</h1>`;
});


