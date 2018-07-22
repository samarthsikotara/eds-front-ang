## SCHOOL ADMIN v1.0 written in AngularJS

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
- Clean your npm cache

```sh
$ npm cache clean --force
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

- Go to this url
```sh
$ http://localhost:9000/#/dashboard/students
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

- [Click to view screenshots](https://www.dropbox.com/sh/t8a5k4d3ok4wjpg/AADsyZPvKK3JMb9Zutamc36Ka?dl=0)