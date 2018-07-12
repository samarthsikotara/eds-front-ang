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

- [TODO list page](https://www.dropbox.com/home/Screenshots?preview=Screen+Shot+2018-07-12+at+11.47.13+pm.png)
- [Create New TODO](https://www.dropbox.com/home/Screenshots?preview=Screen+Shot+2018-07-12+at+11.47.37+pm.png)
- [Update TODO](https://www.dropbox.com/home/Screenshots?preview=Screen+Shot+2018-07-12+at+11.48.19+pm.png)
- [Re-arrange/re-order TODO list](https://www.dropbox.com/home/Screenshots?preview=Screen+Shot+2018-07-12+at+11.49.53+pm.png)
