# NoteTaker

A simple note taking app that runs in your browser as a data uri, base64 encoded string. Your notes do not save(1), instead you will always be presented with a blank canvas to place your thoughts for the day.

### Usage

You can use the most recent version by copying the contents of the `out.uri` file and pasting it into your browser address bar. Bookmark the page for easy use in the future.

### Installing

To install the project you will to have [Node.js](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed first, once you have done follow these steps to install the project:
```
cd to/folder/which/will/contain/the/project
git clone git@github.com:tim545/note-taker.git
cd note-taker
grunt
```

### Running

When you run the `grunt` command index.html will compile into out.uri