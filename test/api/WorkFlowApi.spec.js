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
    instance = new SigniFlowConnect.WorkFlowApi();
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

  describe('WorkFlowApi', function() {
    describe('createWorkflow', function() {
      it('should call createWorkflow successfully', function(done) {
        //uncomment below and update the code to test createWorkflow
        //instance.createWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocument', function() {
      it('should call getDocument successfully', function(done) {
        //uncomment below and update the code to test getDocument
        //instance.getDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAddWorkflowStep', function() {
      it('should call postAddWorkflowStep successfully', function(done) {
        //uncomment below and update the code to test postAddWorkflowStep
        //instance.postAddWorkflowStep(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCancelFlow', function() {
      it('should call postCancelFlow successfully', function(done) {
        //uncomment below and update the code to test postCancelFlow
        //instance.postCancelFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postDeleteDoc', function() {
      it('should call postDeleteDoc successfully', function(done) {
        //uncomment below and update the code to test postDeleteDoc
        //instance.postDeleteDoc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postDocPrepperAddField', function() {
      it('should call postDocPrepperAddField successfully', function(done) {
        //uncomment below and update the code to test postDocPrepperAddField
        //instance.postDocPrepperAddField(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postDocPrepperAdvancedFields', function() {
      it('should call postDocPrepperAdvancedFields successfully', function(done) {
        //uncomment below and update the code to test postDocPrepperAdvancedFields
        //instance.postDocPrepperAdvancedFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postFullWorkflow', function() {
      it('should call postFullWorkflow successfully', function(done) {
        //uncomment below and update the code to test postFullWorkflow
        //instance.postFullWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postGetDocStatus', function() {
      it('should call postGetDocStatus successfully', function(done) {
        //uncomment below and update the code to test postGetDocStatus
        //instance.postGetDocStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postInitiateFlow', function() {
      it('should call postInitiateFlow successfully', function(done) {
        //uncomment below and update the code to test postInitiateFlow
        //instance.postInitiateFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postInitiateFlowNoEmail', function() {
      it('should call postInitiateFlowNoEmail successfully', function(done) {
        //uncomment below and update the code to test postInitiateFlowNoEmail
        //instance.postInitiateFlowNoEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postInitiateFlowNoInitialEmail', function() {
      it('should call postInitiateFlowNoInitialEmail successfully', function(done) {
        //uncomment below and update the code to test postInitiateFlowNoInitialEmail
        //instance.postInitiateFlowNoInitialEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postWorkflowSign', function() {
      it('should call postWorkflowSign successfully', function(done) {
        //uncomment below and update the code to test postWorkflowSign
        //instance.postWorkflowSign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
