# Add a button to the toolbar

## Installation
Install using /admin/plugins or npm install ep_button_link
Edit settings in settings.json

## Configuration
Add the following to your settings.json
```
"ep_button_link": { 
  text = "Hello world",
  link = "http://whatever.com,
  classes = "grouped-left",
  before = "timesliderlink"
}
```
text = The text of the button, also supports HTML
link = Where to link to
classes = the css classes to apply to the button link
before = The element to apply the button before in the DOM
