/**
 * SigniFlow OpenAPI Spec v1
 * ## SigniFlow API used to automate esignature workflow creation and management. 
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@signiflow.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SigniFlowConnect);
  }
}(this, function(expect, SigniFlowConnect) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SigniFlowConnect.SigningCeremonyV2Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SigningCeremonyV2Response', function() {
    it('should create an instance of SigningCeremonyV2Response', function() {
      // uncomment below and update the code to test SigningCeremonyV2Response
      //var instane = new SigniFlowConnect.SigningCeremonyV2Response();
      //expect(instance).to.be.a(SigniFlowConnect.SigningCeremonyV2Response);
    });

    it('should have the property ceremonyIDField (base name: "CeremonyIDField")', function() {
      // uncomment below and update the code to test the property ceremonyIDField
      //var instance = new SigniFlowConnect.SigningCeremonyV2Response();
      //expect(instance).to.be();
    });

    it('should have the property resultField (base name: "ResultField")', function() {
      // uncomment below and update the code to test the property resultField
      //var instance = new SigniFlowConnect.SigningCeremonyV2Response();
      //expect(instance).to.be();
    });

    it('should have the property signedDocumentField (base name: "SignedDocumentField")', function() {
      // uncomment below and update the code to test the property signedDocumentField
      //var instance = new SigniFlowConnect.SigningCeremonyV2Response();
      //expect(instance).to.be();
    });

  });

}));
