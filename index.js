'use strict';

const log4js = require('ep_etherpad-lite/node_modules/log4js');
const settings = require('ep_etherpad-lite/node/utils/Settings');

const logger = log4js.getLogger('ep_button_link');

exports.clientVars = (hook, context, callback) => {
  const {ep_button_link = {}} = settings;
  if (!ep_button_link.link) {
    logger.warn('Missing link; set ep_button_link.link in settings.json.');
    ep_button_link.link = 'https://github.com/JohnMcLear/ep_button_link';
  }
  if (!ep_button_link.text) {
    logger.warn('Missing text; set ep_button_link.text in settings.json.');
    ep_button_link.text = 'NO TEXT SET';
  }
  if (!ep_button_link.before) {
    logger.info('Missing before; add ep_button_link.before to settings.json.');
    ep_button_link.before = "[data-key='showTimeSlider']";
  }
  if (!ep_button_link.classes) {
    logger.info('Missing classes; set ep_button_link.classes in settings.json.');
    ep_button_link.classes = 'grouped-left';
  }
  if (!ep_button_link.after) {
    logger.info('Missing after; set ep_button_link.after in settings.json.');
  }
  return callback({ep_button_link});
};
