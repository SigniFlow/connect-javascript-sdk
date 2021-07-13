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
 * The MultipleSignersSigningCeremonyResponse model module.
 * @module model/MultipleSignersSigningCeremonyResponse
 * @version 1.0.1
 */
class MultipleSignersSigningCeremonyResponse {
    /**
     * Constructs a new <code>MultipleSignersSigningCeremonyResponse</code>.
     * #### This is the response returned when there are multiple people who need to sign a document.
     * @alias module:model/MultipleSignersSigningCeremonyResponse
     * @param ceremonyIDField {Number} 
     * @param resultField {String} Displays the result of the call.
     * @param signedDocumentField {String} 
     */
    constructor(ceremonyIDField, resultField, signedDocumentField) { 
        
        MultipleSignersSigningCeremonyResponse.initialize(this, ceremonyIDField, resultField, signedDocumentField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ceremonyIDField, resultField, signedDocumentField) { 
        obj['CeremonyIDField'] = ceremonyIDField;
        obj['ResultField'] = resultField;
        obj['SignedDocumentField'] = signedDocumentField;
    }

    /**
     * Constructs a <code>MultipleSignersSigningCeremonyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleSignersSigningCeremonyResponse} obj Optional instance to populate.
     * @return {module:model/MultipleSignersSigningCeremonyResponse} The populated <code>MultipleSignersSigningCeremonyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultipleSignersSigningCeremonyResponse();

            if (data.hasOwnProperty('CeremonyIDField')) {
                obj['CeremonyIDField'] = ApiClient.convertToType(data['CeremonyIDField'], 'Number');
            }
            if (data.hasOwnProperty('ResultField')) {
                obj['ResultField'] = ApiClient.convertToType(data['ResultField'], 'String');
            }
            if (data.hasOwnProperty('SignedDocumentField')) {
                obj['SignedDocumentField'] = ApiClient.convertToType(data['SignedDocumentField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} CeremonyIDField
 */
MultipleSignersSigningCeremonyResponse.prototype['CeremonyIDField'] = undefined;

/**
 * Displays the result of the call.
 * @member {String} ResultField
 */
MultipleSignersSigningCeremonyResponse.prototype['ResultField'] = undefined;

/**
 * @member {String} SignedDocumentField
 */
MultipleSignersSigningCeremonyResponse.prototype['SignedDocumentField'] = undefined;






export default MultipleSignersSigningCeremonyResponse;

