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
 * The GetDocLinkRequest model module.
 * @module model/GetDocLinkRequest
 * @version 1.0.1
 */
class GetDocLinkRequest {
    /**
     * Constructs a new <code>GetDocLinkRequest</code>.
     * #### This is a request to get the document url.
     * @alias module:model/GetDocLinkRequest
     * @param docIDField {String} 
     * @param emailField {String} 
     * @param returnURLField {String} 
     * @param tokenField {module:model/TokenField} 
     */
    constructor(docIDField, emailField, returnURLField, tokenField) { 
        
        GetDocLinkRequest.initialize(this, docIDField, emailField, returnURLField, tokenField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, docIDField, emailField, returnURLField, tokenField) { 
        obj['DocIDField'] = docIDField;
        obj['EmailField'] = emailField;
        obj['ReturnURLField'] = returnURLField;
        obj['TokenField'] = tokenField;
    }

    /**
     * Constructs a <code>GetDocLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDocLinkRequest} obj Optional instance to populate.
     * @return {module:model/GetDocLinkRequest} The populated <code>GetDocLinkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDocLinkRequest();

            if (data.hasOwnProperty('DocIDField')) {
                obj['DocIDField'] = ApiClient.convertToType(data['DocIDField'], 'String');
            }
            if (data.hasOwnProperty('EmailField')) {
                obj['EmailField'] = ApiClient.convertToType(data['EmailField'], 'String');
            }
            if (data.hasOwnProperty('ReturnURLField')) {
                obj['ReturnURLField'] = ApiClient.convertToType(data['ReturnURLField'], 'String');
            }
            if (data.hasOwnProperty('TokenField')) {
                obj['TokenField'] = TokenField.constructFromObject(data['TokenField']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} DocIDField
 */
GetDocLinkRequest.prototype['DocIDField'] = undefined;

/**
 * @member {String} EmailField
 */
GetDocLinkRequest.prototype['EmailField'] = undefined;

/**
 * @member {String} ReturnURLField
 */
GetDocLinkRequest.prototype['ReturnURLField'] = undefined;

/**
 * @member {module:model/TokenField} TokenField
 */
GetDocLinkRequest.prototype['TokenField'] = undefined;






export default GetDocLinkRequest;
