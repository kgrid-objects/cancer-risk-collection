# Cancer Risk Knowledge Objects

This project uses published risk models, and has Knowledge Objects arising from converting those published risk models into cancer risk Knowledge Objects. As of August 10, 2018, the six KOs in this collection are compatible with the latest KGrid platform.  All six KOs plus Icon Array are used by the [Cancer Advisor](https://kgrid-demos.github.io/cancer-advisor) demo app.

## Table of Contents

- [Getting Started](#getting-started)

- [Knowledge Objects in The Collection](#knowledge-objects-in-the-collection)

   - [Calculate Three Year Risk For Liver Cancer](#calculate-three-year-risk-for-liver-cancer)
   - [Interpret Liver Cancer Risk](#interpret-liver-cancer-risk)
   - [Prostate Cancer Risk Calculation](#prostate-cancer-risk-calculation)
   - [Interpret Prostate Cancer Risk](#interpret-prostate-cancer-risk)
   - [Calculate Six Year Probability for Lung Cancer](#calculate-six-year-probability-for-lung-cancer)
   - [Interpret Lung Cancer Risk](#interpret-lung-cancer-risk)

- [Prerequisites](#prerequisites)

- [Testing Icon Array](#testing-icon-array)

- [Package Icon Array](#package-icon-array)

- [Common Issues/Problems](#common-issues-/-problems)

- [Roadmap](#roadmap)

## Getting Started
These instructions will allow you to test drive one or more of the KOs in the Cancer Risk-related Knowledge Object Collection. 

Below in this documentation, find each KO's API documentation in the OpenAPI 3.0 specification format. By clicking on the API Documentation link for each KO, the API documentation will be displayed in a Swagger UI tool. Utilizing the example curl or the Swagger UI tool you can test out the interation using each KO.



## Knowledge Objects in The Collection

##  Calculate Three Year Risk for Liver Cancer  

This knowledge object can be used to predict liver cancer risk for those with Hepatitis B who are without Cirrhosis of the      liver. Risk estimation for hepatocellular carcinoma in chronic hepatitis B (REACH-B) is calculated based on development        validation of a predictive score.

##  Interpret Liver Cancer Risk
   
This knowledge object accepts a 3-Year Hepatocellular Cancer risk score as input and generates a recommendation depending      on an individual's risk of developing liver cancer. Risk estimation for hepatocellular carcinoma in chronic hepatitis B        (REACH-B) is calculated based on development and validation of a predictive score.

##  Prostate Cancer Risk Calculation

This knowledge object can be used to predict prostate cancer risk for men 50 yers and older. This is a prostate cancer         risk scoring mechanism which calculates risk based on PSA, DRE, Age, Family History and Prior Biopsy score.

##  Interpret Prostate Cancer Risk 

This knowledge object accepts as input a prostate cancer risk score and uses it to generate prostate cancer screening recommendations. Risk estimation for prostate cancer is calculated based on prostate cancer risk calculation model.


##  Calculate Six Year probability for Lung Cancer

This knowledge can be used to predict lung cancer risk For adults ages 50 and over. This is a validated lung cancer risk prediction model that can be used to guide decisions about lung cancer screening. This model was created within a collection of lung cancer models including Spitz Model, Etzel Model, Park Model, Marcus Model, Hoggart Model, Cassidy Model, and Bach Model.

##  Interpret Lung Cancer Risk 

This knowledge object interprets an individual's 6-year risk of having lung cancer and makes individualized recommendations regarding lung cancer screening. Risk estimation for lung cancer is calculated based on lung cancer risk calculation model.



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

## Common Issues/Problems

More to come

## Roadmap

