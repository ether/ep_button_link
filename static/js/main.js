'use strict';

exports.postAceInit = (hookName, args) => {
  const {link, text, before, after, classes} = clientVars.ep_button_link;

  const button = `<li>
      <a class='${classes}' target='_blank' href='${link}'>
        <span id='ep_button_link_span' class='buttonicon'>${text}</span>
      </a>
    </li>`;
  const $editBar = $('#editbar');

  if (after) {
    $editBar.contents().find(after).after(button);
  } else {
    $editBar.contents().find(before).before(button);
  }

  $('#ep_button_link_span').css({
    'background-image': 'none',
    'width': 'auto',
    'color': '#666',
    'font-size': '16px',
    'font-weight': '800',
  });
};
