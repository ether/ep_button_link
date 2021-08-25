'use strict';

exports.postAceInit = (hookName, args) => {
  const settings = clientVars.ep_button_link;
  if (!settings) return;
  const {link, text = '', before, after, classes} = settings;

  const button = $('<li>')
      .append($('<a>')
          .addClass(classes)
          .attr({href: link, target: '_blank', rel: 'noopener noreferrer'})
          .append($('<button>')
              .addClass('buttonicon')
              .addClass('buttonicon-ep_button_link')
              .html(text)));
  const $editBar = $('#editbar');

  if (after) {
    $editBar.contents().find(after).after(button);
  } else {
    $editBar.contents().find(before).before(button);
  }
};
