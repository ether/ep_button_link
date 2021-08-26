'use strict';

const log4js = require('ep_etherpad-lite/node_modules/log4js');

const logger = log4js.getLogger('ep_button_link');
let settings = null;

exports.clientVars = async (hookName, context) => ({ep_button_link: settings});

exports.loadSettings = async (hookName, {settings: {ep_button_link}}) => {
  settings = ep_button_link;
  if (!settings) {
    logger.warn('Missing settings in settings.json; no button will be displayed.');
    settings = null;
    return;
  }
  const {buttons = []} = settings;
  if (settings.link) buttons.push({...settings});
  if (buttons.length === 0) logger.warn('No buttons defined in settings.json.');
  settings.buttons = [];
  for (const button of buttons) {
    if (!button.link) {
      logger.warn('Ignoring button due to missing link:', button);
      continue;
    }
    delete button.buttons;
    if (button.before && button.after) {
      logger.warn('Ignoring button .before setting because .after is set.');
      delete button.before;
    } else if (!button.before && !button.after) {
      button.before = '[data-key="showTimeSlider"]';
    }
    if (!button.classes) button.classes = 'grouped-left';
    settings.buttons.push(button);
  }
};
