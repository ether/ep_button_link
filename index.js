'use strict';

const log4js = require('ep_etherpad-lite/node_modules/log4js');
const settings = require('ep_etherpad-lite/node/utils/Settings');

const logger = log4js.getLogger('ep_button_link');

exports.clientVars = (hook, context, callback) => {
  let ep_button_link = {};
  try {
    if (settings.ep_button_link) {
      if (!settings.ep_button_link.link) {
        logger.warn('Missing link; set ep_button_link.link in settings.json.');
        ep_button_link.link = 'https://github.com/JohnMcLear/ep_button_link';
      } else {
        ep_button_link.link = settings.ep_button_link.link;
      }
      if (!settings.ep_button_link.text) {
        logger.warn('Missing text; set ep_button_link.text in settings.json.');
        ep_button_link.text = 'NO TEXT SET';
      } else {
        ep_button_link.text = settings.ep_button_link.text;
      }
      if (!settings.ep_button_link.before) {
        logger.info('Missing before; add ep_button_link.before to settings.json.');
        ep_button_link.before = "[data-key='showTimeSlider']";
      } else {
        ep_button_link.before = settings.ep_button_link.before;
      }
      if (!settings.ep_button_link.classes) {
        logger.info('Missing classes; set ep_button_link.classes in settings.json.');
        ep_button_link.classes = 'grouped-left';
      } else {
        ep_button_link.classes = settings.ep_button_link.classes;
      }
      if (!settings.ep_button_link.after) {
        logger.info('Missing after; set ep_button_link.after in settings.json.');
      } else {
        ep_button_link.after = settings.ep_button_link.after;
      }
    } else {
      logger.warn(
          'Missing settings in settings.json; example: ' +
          '"ep_button_link": {"link": "https://github.com/JohnMcLear/ep_button", "text": "TEST"}');
      ep_button_link = {};
      ep_button_link.link = 'https://github.com/JohnMcLear/ep_button_link';
      ep_button_link.text = 'NO TEXT SET';
      ep_button_link.before = '.buttonicon-history';
      ep_button_link.classes = 'grouped-right';
    }
  } catch (e) {
    // lovely try catch me if you can
  }
  return callback({ep_button_link});
};
