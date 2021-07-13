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

import ApiClient from '../ApiClient';

/**
 * The CreateWorkflowResponse model module.
 * @module model/CreateWorkflowResponse
 * @version 1.0.1
 */
class CreateWorkflowResponse {
    /**
     * Constructs a new <code>CreateWorkflowResponse</code>.
     * #### The response returned when creating a document workflow.
     * @alias module:model/CreateWorkflowResponse
     * @param docIDField {Number} Document Id created in SigniFlow
     * @param resultField {String} Displays the result of the call.
     */
    constructor(docIDField, resultField) { 
        
        CreateWorkflowResponse.initialize(this, docIDField, resultField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, docIDField, resultField) { 
        obj['DocIDField'] = docIDField;
        obj['ResultField'] = resultField;
    }

    /**
     * Constructs a <code>CreateWorkflowResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWorkflowResponse} obj Optional instance to populate.
     * @return {module:model/CreateWorkflowResponse} The populated <code>CreateWorkflowResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWorkflowResponse();

            if (data.hasOwnProperty('DocIDField')) {
                obj['DocIDField'] = ApiClient.convertToType(data['DocIDField'], 'Number');
            }
            if (data.hasOwnProperty('ResultField')) {
                obj['ResultField'] = ApiClient.convertToType(data['ResultField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Document Id created in SigniFlow
 * @member {Number} DocIDField
 */
CreateWorkflowResponse.prototype['DocIDField'] = undefined;

/**
 * Displays the result of the call.
 * @member {String} ResultField
 */
CreateWorkflowResponse.prototype['ResultField'] = undefined;






export default CreateWorkflowResponse;

