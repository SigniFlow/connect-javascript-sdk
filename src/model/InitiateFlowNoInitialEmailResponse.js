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
 * The InitiateFlowNoInitialEmailResponse model module.
 * @module model/InitiateFlowNoInitialEmailResponse
 * @version 1.0.1
 */
class InitiateFlowNoInitialEmailResponse {
    /**
     * Constructs a new <code>InitiateFlowNoInitialEmailResponse</code>.
     * #### The response from requesting a workflow skipping the first email.
     * @alias module:model/InitiateFlowNoInitialEmailResponse
     * @param docIDField {Number} The document ID.
     * @param resultField {String} Displays the result of the call.
     */
    constructor(docIDField, resultField) { 
        
        InitiateFlowNoInitialEmailResponse.initialize(this, docIDField, resultField);
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
     * Constructs a <code>InitiateFlowNoInitialEmailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InitiateFlowNoInitialEmailResponse} obj Optional instance to populate.
     * @return {module:model/InitiateFlowNoInitialEmailResponse} The populated <code>InitiateFlowNoInitialEmailResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InitiateFlowNoInitialEmailResponse();

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
 * The document ID.
 * @member {Number} DocIDField
 */
InitiateFlowNoInitialEmailResponse.prototype['DocIDField'] = undefined;

/**
 * Displays the result of the call.
 * @member {String} ResultField
 */
InitiateFlowNoInitialEmailResponse.prototype['ResultField'] = undefined;






export default InitiateFlowNoInitialEmailResponse;
