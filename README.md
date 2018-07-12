## TODO ADMIN v1.0 written in AngularJS

## Installation
####1. Clone this project or Download that ZIP file

####2.  Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally
 
 
```sh
$ sudo apt-get install npm
$ sudo npm install -g grunt-cli
$ sudo npm install -g bower
```
####3. On the command prompt run the following commands

```sh
$ cd `project-directory`
```
- bower install is ran from the postinstall
```sh
$ npm install 
```

- To install dependency bower packages for app

```sh
$ bower install
```

- a shortcut for `grunt serve:dist` to minify the files for deployment

```sh
$ grunt build
```

- To launch the application
```sh
$ grunt serve
```


**Note:**
If you get this following error, 
```text
Error: EACCES, permission denied '.config/configstore/insight-bower.yml'
You don't have access to this file.
```
changing ownner .config

```sh
sudo chown -R [user name] ~/.config
```


## Screenshots

- [TODO list page](https://www.dropbox.com/s/uotgrv29o7j9sb8/Screen%20Shot%202018-07-12%20at%2011.47.13%20pm.png?dl=0)
- [Create New TODO](https://www.dropbox.com/s/ectz9a54gcdna3r/Screen%20Shot%202018-07-12%20at%2011.47.37%20pm.png?dl=0)
- [Update TODO](https://www.dropbox.com/s/pkytu4dluvb2h9n/Screen%20Shot%202018-07-12%20at%2011.48.19%20pm.png?dl=0)
- [TODO list actions](https://www.dropbox.com/s/np6fozch8zd7srl/Screen%20Shot%202018-07-13%20at%2012.01.43%20am.png?dl=0)
- [Re-arrange/re-order TODO list](https://www.dropbox.com/s/vcoetr7rc1d32ti/Screen%20Shot%202018-07-12%20at%2011.49.53%20pm.png?dl=0)
