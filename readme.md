Create JSX components which are transformed into GTK Widgets.

Status: **experimental**

### Why ?

Using JSX allows developers to easily create components with a simple syntax.

### What's working?

For now there are just a few partially-working components
* Label
* Button
* Box
* Notebook
* StackSidebar
* Switch

All of them are in the demo (located in `./demo/index.js`).

### Wanna try it?

Prerequisites for building (these are not bundled on your app):
* npm
* nodejs

Installing the dependencies:

`npm install`

Building the first demo:

`npm run demo:1`

Building the second demo:

`npm run demo:2`

Running the demo:

`gjs dist/index.js`