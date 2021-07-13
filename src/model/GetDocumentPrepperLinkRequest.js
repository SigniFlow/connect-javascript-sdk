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
 * The GetDocumentPrepperLinkRequest model module.
 * @module model/GetDocumentPrepperLinkRequest
 * @version 1.0.1
 */
class GetDocumentPrepperLinkRequest {
    /**
     * Constructs a new <code>GetDocumentPrepperLinkRequest</code>.
     * #### This is the request sent to get a documnt prepper url.
     * @alias module:model/GetDocumentPrepperLinkRequest
     * @param docIDField {String} 
     * @param emailSettingField {Number} 
     * @param returnURLField {String} 
     * @param tokenField {module:model/TokenField} 
     */
    constructor(docIDField, emailSettingField, returnURLField, tokenField) { 
        
        GetDocumentPrepperLinkRequest.initialize(this, docIDField, emailSettingField, returnURLField, tokenField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, docIDField, emailSettingField, returnURLField, tokenField) { 
        obj['DocIDField'] = docIDField;
        obj['EmailSettingField'] = emailSettingField;
        obj['ReturnURLField'] = returnURLField;
        obj['TokenField'] = tokenField;
    }

    /**
     * Constructs a <code>GetDocumentPrepperLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDocumentPrepperLinkRequest} obj Optional instance to populate.
     * @return {module:model/GetDocumentPrepperLinkRequest} The populated <code>GetDocumentPrepperLinkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDocumentPrepperLinkRequest();

            if (data.hasOwnProperty('DocIDField')) {
                obj['DocIDField'] = ApiClient.convertToType(data['DocIDField'], 'String');
            }
            if (data.hasOwnProperty('EmailSettingField')) {
                obj['EmailSettingField'] = ApiClient.convertToType(data['EmailSettingField'], 'Number');
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
GetDocumentPrepperLinkRequest.prototype['DocIDField'] = undefined;

/**
 * @member {Number} EmailSettingField
 */
GetDocumentPrepperLinkRequest.prototype['EmailSettingField'] = undefined;

/**
 * @member {String} ReturnURLField
 */
GetDocumentPrepperLinkRequest.prototype['ReturnURLField'] = undefined;

/**
 * @member {module:model/TokenField} TokenField
 */
GetDocumentPrepperLinkRequest.prototype['TokenField'] = undefined;






export default GetDocumentPrepperLinkRequest;

