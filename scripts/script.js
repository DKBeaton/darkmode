const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const onlineCheckbox = document.querySelector('.nav-item-online .checkbox-container');
const darkmodeCheckbox = document.querySelector('.nav-item-darkmode .checkbox-container');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
  navList.setAttribute('data-visible', (navList.getAttribute('data-visible') == 'true') ? 'false' : 'true');
})

onlineCheckbox.addEventListener('click', function () {
  onlineCheckbox.setAttribute('data-checked', (onlineCheckbox.getAttribute('data-checked') == 'true') ? 'false' : 'true');
})

darkmodeCheckbox.addEventListener('click', function () {
  darkmodeCheckbox.setAttribute('data-checked', (darkmodeCheckbox.getAttribute('data-checked') == 'true') ? 'false' : 'true');
  darkmode();
})


function darkmode() {
  if (darkmodeCheckbox.getAttribute('data-checked') == 'true') {
    // Global
    document.documentElement.style.setProperty('--main-color', '#fff')
    document.documentElement.style.setProperty('--body-bg-color', '#0e0e10')

    // Menu element
    document.documentElement.style.setProperty('--menu-bg-color', '#18181b')
    document.documentElement.style.setProperty('--avatar-bg', '#fff')

    // Checkbox element
    document.documentElement.style.setProperty('--checkbox-bg', '#000')
    document.documentElement.style.setProperty('--checkbox-inner-bg', '#fff')
    document.documentElement.style.setProperty('--checkbox-hover-color', '#fff')

  } else {
    // Global
    document.documentElement.style.setProperty('--main-color', '#000')
    document.documentElement.style.setProperty('--body-bg-color', '#f7f7f8')

    // Menu element
    document.documentElement.style.setProperty('--menu-bg-color', '#fff')
    document.documentElement.style.setProperty('--avatar-bg', '#000')

    // Checkbox element
    document.documentElement.style.setProperty('--checkbox-bg', '#fff')
    document.documentElement.style.setProperty('--checkbox-inner-bg', '#000')
    document.documentElement.style.setProperty('--checkbox-hover-color', '#000')
  }
}

