(function (window) {
  'use strict';

  const BUTTON_SELECTOR = '[data-posts="id"]';

  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())//response type
    .then(json => console.log(json) ); //

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener('click', function (event) {
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }

      event.preventDefault();
    });
  });
})(window);
