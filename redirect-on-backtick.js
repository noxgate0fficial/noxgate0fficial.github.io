document.addEventListener('keydown', function (event) {
  // Check for backtick key (key code 192, or event.key === '`')
  if (event.key === '`') {
    window.location.href = 'https://launchpad.classlink.com/';
  }
});
