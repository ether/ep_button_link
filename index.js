'use strict';

const log4js = require('ep_etherpad-lite/node_modules/log4js');
const settings = require('ep_etherpad-lite/node/utils/Settings');

const logger = log4js.getLogger('ep_button_link');

exports.clientVars = async (hookName, context) => {
  const {ep_button_link = {}} = settings;
  if (!ep_button_link.link) {
    logger.warn('Missing link; set ep_button_link.link in settings.json.');
    ep_button_link.link = 'https://github.com/JohnMcLear/ep_button_link';
  }
  if (!ep_button_link.text) {
    logger.warn('Missing text; set ep_button_link.text in settings.json.');
    ep_button_link.text = 'NO TEXT SET';
  }
  if (ep_button_link.after && ep_button_link.before) {
    logger.warn('Ignoring ep_button_link.before because .after is set in settings.json.');
    delete ep_button_link.before;
  } else if (!ep_button_link.after && !ep_button_link.before) {
    ep_button_link.before = "[data-key='showTimeSlider']";
  }
  if (!ep_button_link.classes) ep_button_link.classes = 'grouped-left';
  return {ep_button_link};
};
