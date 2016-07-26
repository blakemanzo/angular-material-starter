Angular Material Starter
=======================

A boilerplate for Material Design applications using Angular 1.x and Angular Material.

Structure
---------

All files for each particular module are separated into their own folders, typically each module has a dedicated route.

```
.
├── public/
│   ├── modules/       			# Modules
│   │   ├── exampleModule/
│   │   │   ├── controllers/
│   │   │   │   ├── exampleCtrl.js
│   │   │   ├── services/
│   │   │   │   ├── exampleService.js
│   │   │   ├── css/
│   │   │   │   ├── example.css
│   │   │   ├── views/ 
│   │   │   │   ├── example.html
│   ├── app.controller.js       # Main controller
│   ├── app.routes.js           # App routes
│   ├── app.js                 	# Main app file
│   ├── home.html 				# Homepage template
│   ├── index.html              # Main template
├── index.js                    # Express application
└── package.json                # NPM Dependencies and scripts
```

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/blakemanzo/angular-material-starter.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Run NPM
npm start

Your app will then be running on port 5000.
```

License
-------

The MIT License (MIT)

Copyright (c) 2016 Blake Manzo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.