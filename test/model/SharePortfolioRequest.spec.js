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
    instance = new SigniFlowConnect.SharePortfolioRequest();
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

  describe('SharePortfolioRequest', function() {
    it('should create an instance of SharePortfolioRequest', function() {
      // uncomment below and update the code to test SharePortfolioRequest
      //var instane = new SigniFlowConnect.SharePortfolioRequest();
      //expect(instance).to.be.a(SigniFlowConnect.SharePortfolioRequest);
    });

    it('should have the property accessLevelField (base name: "AccessLevelField")', function() {
      // uncomment below and update the code to test the property accessLevelField
      //var instance = new SigniFlowConnect.SharePortfolioRequest();
      //expect(instance).to.be();
    });

    it('should have the property portfolioIDField (base name: "PortfolioIDField")', function() {
      // uncomment below and update the code to test the property portfolioIDField
      //var instance = new SigniFlowConnect.SharePortfolioRequest();
      //expect(instance).to.be();
    });

    it('should have the property shareOptionField (base name: "ShareOptionField")', function() {
      // uncomment below and update the code to test the property shareOptionField
      //var instance = new SigniFlowConnect.SharePortfolioRequest();
      //expect(instance).to.be();
    });

    it('should have the property tokenField (base name: "TokenField")', function() {
      // uncomment below and update the code to test the property tokenField
      //var instance = new SigniFlowConnect.SharePortfolioRequest();
      //expect(instance).to.be();
    });

    it('should have the property uniqueIDField (base name: "UniqueIDField")', function() {
      // uncomment below and update the code to test the property uniqueIDField
      //var instance = new SigniFlowConnect.SharePortfolioRequest();
      //expect(instance).to.be();
    });

  });

}));