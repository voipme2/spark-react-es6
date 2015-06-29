# Spark React ES6

## Why Spark?
[Spark](http://sparkjava.com/) is a concise web application framework.  It's lightweight and very quick to get up and
running and has an embedded Jetty web server.  It doesn't have a ton of bells and whistles, but for prototyping I find
it ideal.  It provides a nice API which doesn't make use of annotations.  I've used Spring since release 2.5 in 2007
and all of my recent projects use Spring Boot which is my recommendation for production purposes where you need the
extra bells and whistles.

## React and ES6
Having adopted [React](http://facebook.github.io/react/) as my go to JS framework and writing apps in vanilla JS, this
sample application was my first dive into ES6 to gain some knowledge.

## Gulp, Browserify and Babel
The frontend build uses Gulp and Browserify to produce separate bundles for vendor and application scripts.  Using
the [Babelify](https://github.com/babel/babelify) transform, my ES6 code is transpiled to work in all browsers.