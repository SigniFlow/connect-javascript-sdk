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
    instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
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

  describe('GetDocumentAuditResponseActivityField', function() {
    it('should create an instance of GetDocumentAuditResponseActivityField', function() {
      // uncomment below and update the code to test GetDocumentAuditResponseActivityField
      //var instane = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be.a(SigniFlowConnect.GetDocumentAuditResponseActivityField);
    });

    it('should have the property actionOrderField (base name: "ActionOrderField")', function() {
      // uncomment below and update the code to test the property actionOrderField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property additionalField (base name: "AdditionalField")', function() {
      // uncomment below and update the code to test the property additionalField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property docIDField (base name: "DocIDField")', function() {
      // uncomment below and update the code to test the property docIDField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property emailField (base name: "EmailField")', function() {
      // uncomment below and update the code to test the property emailField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property eventDateField (base name: "EventDateField")', function() {
      // uncomment below and update the code to test the property eventDateField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property eventField (base name: "EventField")', function() {
      // uncomment below and update the code to test the property eventField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property eventStatusField (base name: "EventStatusField")', function() {
      // uncomment below and update the code to test the property eventStatusField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property locationField (base name: "LocationField")', function() {
      // uncomment below and update the code to test the property locationField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property orderDateField (base name: "OrderDateField")', function() {
      // uncomment below and update the code to test the property orderDateField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property pageField (base name: "PageField")', function() {
      // uncomment below and update the code to test the property pageField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

    it('should have the property userFullNameField (base name: "UserFullNameField")', function() {
      // uncomment below and update the code to test the property userFullNameField
      //var instance = new SigniFlowConnect.GetDocumentAuditResponseActivityField();
      //expect(instance).to.be();
    });

  });

}));
