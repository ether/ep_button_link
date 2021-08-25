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
  if (!settings.link) {
    logger.warn('Missing ep_button_link.link in settings.json; no button will be displayed.');
    settings = null;
    return;
  }
  if (settings.before && settings.after) {
    logger.warn('Ignoring ep_button_link.before because .after is set in settings.json.');
    delete settings.before;
  } else if (!settings.before && !settings.after) {
    settings.before = '[data-key="showTimeSlider"]';
  }
  if (!settings.classes) settings.classes = 'grouped-left';
};
