var rewire = require('rewire');

//Get load in the js
var javascript = rewire('../collection/99999-fk4jh3tk9s/getSixyearprobability');

//Load in the function
var sixyearprobability = javascript.__get__("getSixyearprobability");


test('Test the Testing', () => {
  expect(1).toBe(1);
});

test('happy day', () => {

  var payload = sixyearprobability({
    "age": 65,
    "ethnicity": 1,
    "bmi": 27,
    "cigsPerDay": 10,
    "edLevel": 1,
    "hxLungCancer": 1,
    "hxLungCancerFam": 1,
    "hxNonLungCancerDz": 1,
    "yrsQuit": 1,
    "yrsSmoker": 20
  });

  expect(payload.success).toBe(1);
  expect(payload.result).toBe(2.442115272387271);

});


test('no data throws exception', () => {

  expect(() => {
    sixyearprobability()
  }).toThrow();

});
