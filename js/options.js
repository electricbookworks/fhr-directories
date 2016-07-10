// Options for holmes.js
holmes({
    input: '.search input',
    find: '.listings div',
    placeholder: '<p>Sorry, nothing matches your search.</p>',
    class: {
      visible: 'visible',
      hidden: 'hidden'
    }
});
