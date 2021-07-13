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
 * The GetDocumentAuditRequest model module.
 * @module model/GetDocumentAuditRequest
 * @version 1.0.1
 */
class GetDocumentAuditRequest {
    /**
     * Constructs a new <code>GetDocumentAuditRequest</code>.
     * #### The request sent to get the audit information from a document.
     * @alias module:model/GetDocumentAuditRequest
     * @param docIDField {String} 
     * @param tokenField {module:model/TokenField} 
     */
    constructor(docIDField, tokenField) { 
        
        GetDocumentAuditRequest.initialize(this, docIDField, tokenField);
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
     * Constructs a <code>GetDocumentAuditRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDocumentAuditRequest} obj Optional instance to populate.
     * @return {module:model/GetDocumentAuditRequest} The populated <code>GetDocumentAuditRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDocumentAuditRequest();

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
 * @member {String} DocIDField
 */
GetDocumentAuditRequest.prototype['DocIDField'] = undefined;

/**
 * @member {module:model/TokenField} TokenField
 */
GetDocumentAuditRequest.prototype['TokenField'] = undefined;






export default GetDocumentAuditRequest;
