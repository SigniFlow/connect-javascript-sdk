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
import TokenField from './TokenField';

/**
 * The InitiateFlowNoEmailRequest model module.
 * @module model/InitiateFlowNoEmailRequest
 * @version 1.0.1
 */
class InitiateFlowNoEmailRequest {
    /**
     * Constructs a new <code>InitiateFlowNoEmailRequest</code>.
     * #### The request sent to initiate a workflow without sending an email.
     * @alias module:model/InitiateFlowNoEmailRequest
     * @param docIDField {String} The document ID.
     * @param tokenField {module:model/TokenField} 
     */
    constructor(docIDField, tokenField) { 
        
        InitiateFlowNoEmailRequest.initialize(this, docIDField, tokenField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, docIDField, tokenField) { 
        obj['DocIDField'] = docIDField;
        obj['TokenField'] = tokenField;
    }

    /**
     * Constructs a <code>InitiateFlowNoEmailRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InitiateFlowNoEmailRequest} obj Optional instance to populate.
     * @return {module:model/InitiateFlowNoEmailRequest} The populated <code>InitiateFlowNoEmailRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InitiateFlowNoEmailRequest();

            if (data.hasOwnProperty('DocIDField')) {
                obj['DocIDField'] = ApiClient.convertToType(data['DocIDField'], 'String');
            }
            if (data.hasOwnProperty('TokenField')) {
                obj['TokenField'] = TokenField.constructFromObject(data['TokenField']);
            }
        }
        return obj;
    }


}

/**
 * The document ID.
 * @member {String} DocIDField
 */
InitiateFlowNoEmailRequest.prototype['DocIDField'] = undefined;

/**
 * @member {module:model/TokenField} TokenField
 */
InitiateFlowNoEmailRequest.prototype['TokenField'] = undefined;






export default InitiateFlowNoEmailRequest;
