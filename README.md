## scripts to run react app
go to client folder
in the project directory, you can run:

### `npm start`
runs the app in the development mode.\
open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## package node app
go to node folder

### `npm install -g pkg`

### spefify the files -scripts and assets -manullay in pkg property of your packagejson file.
 "bin": "index.js"
 "pkg": {
    "scripts": "build/**/*.js",
    "assets": "views/**/*",
    "targets": [ "node14-linux-arm64" ],
    "outputPath": "dist"
  }

### `pkg package.json --debug`

### pkg doc
https://www.npmjs.com/package/pkg