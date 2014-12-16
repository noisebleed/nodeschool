Nodeschool.io Workshops
=======================

This repository contains instructions to install [nodeschool.io](http://nodeschool.io/) workshops and solutions for each lesson modules.

Requirements
------------

You'll need [Node.js](http://nodejs.org/) on your computer to get started with each of these. Then use [npm](http://npmjs.org/) (it comes with Node) to install each workshop module.

Installation
------------

### Node.js

For Gentoo Linux:

    # emerge -av net-libs/nodejs

For Ubuntu Linux:

    # apt-get install nodejs
    # apt-get install npm

### Core Workshops

These workshoppers focus on essential skills for working with Node.js.

    # npm install -g javascripting learnyounode git-it stream-adventure

### Electives Workshops

Workshoppers on popular libraries or styles of writing Node.js.

    # npm install -g functional-javascript-workshop levelmeup expressworks \
    makemehapi promise-it-wont-hurt async-you nodebot-workshop goingnative \
    planetproto webgl-workshop shader-school bytewiser bug-clinic \
    browserify-adventure introtowebgl count-to-6 kick-off-koa lololodash \
    learnyoucouchdb

    # git clone https://github.com/thlorenz/learnuv.git && cd learnuv && npm install

Quickstart
----------

    $ cd /path/to/nodeschool.git
    $ javascripting run introduction.js
    $ javascripting verify introduction.js