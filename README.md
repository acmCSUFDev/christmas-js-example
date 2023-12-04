# christmas-js-example

JavaScript example to interact with
[christmasd](https://github.com/acmCSUFDev/christmasd) using
[christmas-client-js](https://github.com/acmCSUFDev/christmas-client-js).

## Examples

See the [src](./src) directory for examples.

Before running any of the examples, make sure to install the dependencies:

```sh
npm i
```

Then, in each example file (e.g. `draw-image.js`), you must change the `url`
variable to point to your instance. For example, if
[blinktest](https://blinktest.acmcsuf.com) says:

```
Point your script to ws://localhost:9001/ws/018c34b9-2130-7d83-966a-2a93ac5bcd05
```

Then, you would change the `url` variable to:

```js
const url = "ws://localhost:9001/ws/018c34b9-2130-7d83-966a-2a93ac5bcd05";
```

Then, run the example:

```sh
node src/draw-image.js
```
