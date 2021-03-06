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
 * The GetDocumentResponse model module.
 * @module model/GetDocumentResponse
 * @version 1.0.1
 */
class GetDocumentResponse {
    /**
     * Constructs a new <code>GetDocumentResponse</code>.
     * #### The response returned when a user wants to download a document.
     * @alias module:model/GetDocumentResponse
     * @param docField {String} Returns a base64 string as the document.
     * @param docNameField {String} Document field name.
     * @param extensionField {String} Document extension field.
     * @param resultField {String} Displays the result of the call.
     */
    constructor(docField, docNameField, extensionField, resultField) { 
        
        GetDocumentResponse.initialize(this, docField, docNameField, extensionField, resultField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, docField, docNameField, extensionField, resultField) { 
        obj['DocField'] = docField;
        obj['DocNameField'] = docNameField;
        obj['ExtensionField'] = extensionField;
        obj['ResultField'] = resultField;
    }

    /**
     * Constructs a <code>GetDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDocumentResponse} obj Optional instance to populate.
     * @return {module:model/GetDocumentResponse} The populated <code>GetDocumentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDocumentResponse();

            if (data.hasOwnProperty('DocField')) {
                obj['DocField'] = ApiClient.convertToType(data['DocField'], 'String');
            }
            if (data.hasOwnProperty('DocNameField')) {
                obj['DocNameField'] = ApiClient.convertToType(data['DocNameField'], 'String');
            }
            if (data.hasOwnProperty('ExtensionField')) {
                obj['ExtensionField'] = ApiClient.convertToType(data['ExtensionField'], 'String');
            }
            if (data.hasOwnProperty('ResultField')) {
                obj['ResultField'] = ApiClient.convertToType(data['ResultField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Returns a base64 string as the document.
 * @member {String} DocField
 */
GetDocumentResponse.prototype['DocField'] = undefined;

/**
 * Document field name.
 * @member {String} DocNameField
 */
GetDocumentResponse.prototype['DocNameField'] = undefined;

/**
 * Document extension field.
 * @member {String} ExtensionField
 */
GetDocumentResponse.prototype['ExtensionField'] = undefined;

/**
 * Displays the result of the call.
 * @member {String} ResultField
 */
GetDocumentResponse.prototype['ResultField'] = undefined;






export default GetDocumentResponse;

