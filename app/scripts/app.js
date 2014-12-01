(function(document) {
  'use strict';

  window.allApps = [
    {
      name: 'Chrome',
      icon: '/images/google-chrome.svg',
      category: 'Web',
      color: 'yellow',
    },
    {
      name: 'Firefox',
      icon: '/images/firefox.svg',
      category: 'Web',
      color: 'red',
    },
    {
      name: 'Spotify',
      icon: '/images/spotify-client.svg',
      category: 'Media',
      color: 'green',
    },
    {
      name: 'Google Music',
      icon: '/images/google-music.svg',
      category: 'Media',
      color: 'orange',
    },
    {
      name: 'LibreOffice Write',
      icon: '/images/ooo-writer.svg',
      category: 'Office',
      color: 'blue',
    },
    {
      name: 'LibreOffice Calc',
      icon: '/images/ooo-calc.svg',
      category: 'Office',
      color: 'lightGreen',
    },
    {
      name: 'LibreOffice Impress',
      icon: '/images/ooo-impress.svg',
      category: 'Office',
      color: 'amber',
    },
  ];

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
