# Cancer Risk Knowledge Objects

This project is to convert the existing cancer risk Knowledge Objects into the new model, which 
will be compatible with the latest KGrid platform.  All six KOs plus Icon Array are used by 
the [Cancer Advisor](https://kgrid-demos.github.io/cancer-advisor) demo app


## Prerequisites
There are testing and packaging features in this project that require 
[npm](https://www.npmjs.com/get-npm) but this isn't needed use the Cancer Risk Knowledge Objects


## Testing Icon Array
There are a set of tests for Cancer Risk Knowledge Objects.  These are very simple tests but show 
how we could test.  They utilize [Jest](https://jestjs.io/) and  [rewire](https://github.com/jhnns/rewire). 
Jest provides the testing framework and rewire allows the tests to access the javascript function without the 
convienace of the export modules (KGrid Javascript adaptor limitation).  The [tests](tests) are in the tests directory.  You can execute the tests via npm

```
npm test
```

## Package Icon Array

You can create zip file of the Cancer Risk Knowledge Objects which can be used to deposit to a KGrid 
Library or load/activate on a KGrid Activator. 

```
npm run package
```
