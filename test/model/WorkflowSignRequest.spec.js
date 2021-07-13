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
    instance = new SigniFlowConnect.WorkflowSignRequest();
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

  describe('WorkflowSignRequest', function() {
    it('should create an instance of WorkflowSignRequest', function() {
      // uncomment below and update the code to test WorkflowSignRequest
      //var instane = new SigniFlowConnect.WorkflowSignRequest();
      //expect(instance).to.be.a(SigniFlowConnect.WorkflowSignRequest);
    });

    it('should have the property docIDField (base name: "DocIDField")', function() {
      // uncomment below and update the code to test the property docIDField
      //var instance = new SigniFlowConnect.WorkflowSignRequest();
      //expect(instance).to.be();
    });

    it('should have the property latitudeField (base name: "LatitudeField")', function() {
      // uncomment below and update the code to test the property latitudeField
      //var instance = new SigniFlowConnect.WorkflowSignRequest();
      //expect(instance).to.be();
    });

    it('should have the property loginPasswordField (base name: "LoginPasswordField")', function() {
      // uncomment below and update the code to test the property loginPasswordField
      //var instance = new SigniFlowConnect.WorkflowSignRequest();
      //expect(instance).to.be();
    });

    it('should have the property loginUserNameField (base name: "LoginUserNameField")', function() {
      // uncomment below and update the code to test the property loginUserNameField
      //var instance = new SigniFlowConnect.WorkflowSignRequest();
      //expect(instance).to.be();
    });

    it('should have the property longitudeField (base name: "LongitudeField")', function() {
      // uncomment below and update the code to test the property longitudeField
      //var instance = new SigniFlowConnect.WorkflowSignRequest();
      //expect(instance).to.be();
    });

    it('should have the property signReasonField (base name: "SignReasonField")', function() {
      // uncomment below and update the code to test the property signReasonField
      //var instance = new SigniFlowConnect.WorkflowSignRequest();
      //expect(instance).to.be();
    });

    it('should have the property timeZoneOffsetField (base name: "TimeZoneOffsetField")', function() {
      // uncomment below and update the code to test the property timeZoneOffsetField
      //var instance = new SigniFlowConnect.WorkflowSignRequest();
      //expect(instance).to.be();
    });

    it('should have the property tokenField (base name: "TokenField")', function() {
      // uncomment below and update the code to test the property tokenField
      //var instance = new SigniFlowConnect.WorkflowSignRequest();
      //expect(instance).to.be();
    });

  });

}));