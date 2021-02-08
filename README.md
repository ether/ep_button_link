![Publish Status](https://github.com/ether/ep_button_link/workflows/Node.js%20Package/badge.svg) ![Publish Status](https://github.com/ether/ep_button_link/workflows/Node.js%20Package/badge.svg)

# Add a button to the toolbar

## Installation
1. Install using /admin/plugins or npm install ep_button_link
2. Edit settings in settings.json

## Configuration
Add the following to your settings.json
```
"ep_button_link": { 
  "text": "Hello world",
  "link": "http://whatever.com",
  "classes": "grouped-left",
  "before": "li[data-key='showTimeSlider']",
  "after": "li[data-key='showTimeSlider']"
}
```
text = The text of the button, also supports HTML  
link = Where to link to  
classes = the css classes to apply to the button link  
before = The element to draw the button before in the DOM  
after = The element to draw the button after in the DOM

Use either before or after..
