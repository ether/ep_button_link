'use strict';

exports.postAceInit = (hookName, args) => {
  const settings = clientVars.ep_button_link;
  if (!settings) return;
  const {link, newWindow = true, text = '', title, before, after, classes} = settings;
  const titleAttrs = title ? {title, 'aria-label': title} : {};

  const button = $('<li>')
      .append($('<a>')
          .addClass(classes)
          .attr('href', link)
          .attr(newWindow ? {target: '_blank', rel: 'noopener noreferrer'} : {})
          .attr(titleAttrs)
          .append($('<button>')
              .addClass('buttonicon')
              .addClass('buttonicon-ep_button_link')
              .attr(titleAttrs)
              .html(text)));
  const $editBar = $('#editbar');

  if (after) {
    $editBar.contents().find(after).after(button);
  } else {
    $editBar.contents().find(before).before(button);
  }
};
