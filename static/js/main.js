'use strict';

// clientVars defaults to window.clientVars for compatibility with older versions of Etherpad.
exports.postAceInit = (hookName, {clientVars = window.clientVars}) => {
  if (!window.clientVars.ep_button_link) {
    console.warn('No settings set for for ep_button_link so displaying default Pad Link button');
    console.warn('For more help https://github.com/ether/ep_button_link');
  }
  const buttons = (clientVars.ep_button_link && clientVars.ep_button_link.buttons) || [{
    text: 'Pad Link',
    link: location.href,
    before: '[data-key="showTimeSlider"]',
    classes: 'grouped-left',
  }];
  const $editBar = $('#editbar');
  for (const button of buttons) {
    const {link, newWindow = true, text = '', title, before, after, classes} = button;
    const titleAttrs = title ? {title, 'aria-label': title} : {};
    const $button = $('<li>')
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
    if (after) {
      $editBar.contents().find(after).after($button);
    } else {
      $editBar.contents().find(before).before($button);
    }
  }
};
