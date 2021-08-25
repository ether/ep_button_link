'use strict';

exports.postAceInit = (hookName, args) => {
  const {link, text, before, after, classes} = clientVars.ep_button_link;

  const button = $('<li>')
      .append($('<a>')
          .addClass(classes)
          .attr({href: link, target: '_blank', rel: 'noopener noreferrer'})
          .append($('<button>')
              .addClass('buttonicon')
              .html(text)));
  const $editBar = $('#editbar');

  if (after) {
    $editBar.contents().find(after).after(button);
  } else {
    $editBar.contents().find(before).before(button);
  }
};
