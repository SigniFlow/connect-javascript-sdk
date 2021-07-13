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
    instance = new SigniFlowConnect.FullWorkflowRequestPortfolioInformationField();
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

  describe('FullWorkflowRequestPortfolioInformationField', function() {
    it('should create an instance of FullWorkflowRequestPortfolioInformationField', function() {
      // uncomment below and update the code to test FullWorkflowRequestPortfolioInformationField
      //var instane = new SigniFlowConnect.FullWorkflowRequestPortfolioInformationField();
      //expect(instance).to.be.a(SigniFlowConnect.FullWorkflowRequestPortfolioInformationField);
    });

    it('should have the property createPortfolioField (base name: "CreatePortfolioField")', function() {
      // uncomment below and update the code to test the property createPortfolioField
      //var instance = new SigniFlowConnect.FullWorkflowRequestPortfolioInformationField();
      //expect(instance).to.be();
    });

    it('should have the property linkToPortfolioField (base name: "LinkToPortfolioField")', function() {
      // uncomment below and update the code to test the property linkToPortfolioField
      //var instance = new SigniFlowConnect.FullWorkflowRequestPortfolioInformationField();
      //expect(instance).to.be();
    });

    it('should have the property portfolioIDField (base name: "PortfolioIDField")', function() {
      // uncomment below and update the code to test the property portfolioIDField
      //var instance = new SigniFlowConnect.FullWorkflowRequestPortfolioInformationField();
      //expect(instance).to.be();
    });

    it('should have the property portfolioNameField (base name: "PortfolioNameField")', function() {
      // uncomment below and update the code to test the property portfolioNameField
      //var instance = new SigniFlowConnect.FullWorkflowRequestPortfolioInformationField();
      //expect(instance).to.be();
    });

  });

}));
