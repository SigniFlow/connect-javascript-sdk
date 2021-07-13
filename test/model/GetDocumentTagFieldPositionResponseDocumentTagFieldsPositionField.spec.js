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
    instance = new SigniFlowConnect.GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField();
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

  describe('GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField', function() {
    it('should create an instance of GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField', function() {
      // uncomment below and update the code to test GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField
      //var instane = new SigniFlowConnect.GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField();
      //expect(instance).to.be.a(SigniFlowConnect.GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField);
    });

    it('should have the property pageNumberField (base name: "PageNumberField")', function() {
      // uncomment below and update the code to test the property pageNumberField
      //var instance = new SigniFlowConnect.GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField();
      //expect(instance).to.be();
    });

    it('should have the property xCoordinateField (base name: "XCoordinateField")', function() {
      // uncomment below and update the code to test the property xCoordinateField
      //var instance = new SigniFlowConnect.GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField();
      //expect(instance).to.be();
    });

    it('should have the property yCoordinateField (base name: "YCoordinateField")', function() {
      // uncomment below and update the code to test the property yCoordinateField
      //var instance = new SigniFlowConnect.GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField();
      //expect(instance).to.be();
    });

  });

}));