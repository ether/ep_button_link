![Publish Status](https://github.com/ether/ep_button_link/workflows/Node.js%20Package/badge.svg) ![Backend Tests Status](https://github.com/ether/ep_button_link/workflows/Backend%20tests/badge.svg)

# ep_button_link

[Etherpad](https://etherpad.org) plugin to add custom buttons to the toolbar.

## Installation

Install via `/admin/plugins` or by running:

```shell
cd /path/to/etherpad
npm install --no-save --legacy-peer-deps ep_button_link
```

## Configuration

Example configuration in `settings.json`:

```json
  "ep_button_link": {
    "link": "http://whatever.com",
    "text": "Hello world"
  }
```

Or you can specify a list of buttons:

```json
  "ep_button_link": {
    "buttons": [
      {
        "link": "https://example.com",
        "text": "A button"
      },
      {
        "link": "https://example.org",
        "text": "Another button"
      }
    ]
  }
```

Available settings per button:

* `link`: Required. URL to visit.
* `newWindow`: Optional, defaults to true. If true, clicking on the button opens
  the link in a new window or tab.
* `text`: Optional, defaults to the empty string. HTML to put inside the button.
* `title`: Optional, defaults to unset. If set, `title` and `aria-label`
  attributes with the given value are added to the button.
* `classes`: Optional, defaults to `"grouped-left"`. Space-separated classes to
  apply to the button link.
* `before`: Optional, defaults to `"[data-key='showTimeSlider']"`. CSS selector
  for a toolbar element. The button will be placed before this element. Ignored
  if `after` is set.
* `after`: Optional, defaults to unset. CSS selector for a toolbar element. If
  set, the new button will be placed after this element. Overrides `before`.

## Copyright and License

Copyright © 2020 John McLear <john@mclear.co.uk>\
Copyright © 2021 Richard Hansen <rhansen@rhansen.org>

Licensed under the [Apache License, Version 2.0](LICENSE) (the "License"); you
may not use this file except in compliance with the License. You may obtain a
copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
