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
    instance = new SigniFlowConnect.AddWorkflowStepV2Request();
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

  describe('AddWorkflowStepV2Request', function() {
    it('should create an instance of AddWorkflowStepV2Request', function() {
      // uncomment below and update the code to test AddWorkflowStepV2Request
      //var instane = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be.a(SigniFlowConnect.AddWorkflowStepV2Request);
    });

    it('should have the property actionField (base name: "ActionField")', function() {
      // uncomment below and update the code to test the property actionField
      //var instance = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be();
    });

    it('should have the property cellField (base name: "CellField")', function() {
      // uncomment below and update the code to test the property cellField
      //var instance = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be();
    });

    it('should have the property docIDField (base name: "DocIDField")', function() {
      // uncomment below and update the code to test the property docIDField
      //var instance = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be();
    });

    it('should have the property emailField (base name: "EmailField")', function() {
      // uncomment below and update the code to test the property emailField
      //var instance = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be();
    });

    it('should have the property firstNameField (base name: "FirstNameField")', function() {
      // uncomment below and update the code to test the property firstNameField
      //var instance = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be();
    });

    it('should have the property languageCodeField (base name: "LanguageCodeField")', function() {
      // uncomment below and update the code to test the property languageCodeField
      //var instance = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be();
    });

    it('should have the property lastNameField (base name: "LastNameField")', function() {
      // uncomment below and update the code to test the property lastNameField
      //var instance = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be();
    });

    it('should have the property proxyAllowedField (base name: "ProxyAllowedField")', function() {
      // uncomment below and update the code to test the property proxyAllowedField
      //var instance = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be();
    });

    it('should have the property tokenField (base name: "TokenField")', function() {
      // uncomment below and update the code to test the property tokenField
      //var instance = new SigniFlowConnect.AddWorkflowStepV2Request();
      //expect(instance).to.be();
    });

  });

}));
