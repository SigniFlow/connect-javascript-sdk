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
 * The GetDocumentPrepperLinkResponse model module.
 * @module model/GetDocumentPrepperLinkResponse
 * @version 1.0.1
 */
class GetDocumentPrepperLinkResponse {
    /**
     * Constructs a new <code>GetDocumentPrepperLinkResponse</code>.
     * #### This is the response returned when requesting a document prepper url.
     * @alias module:model/GetDocumentPrepperLinkResponse
     * @param result {String} Displays the result of the call.
     * @param URL {String} Url
     */
    constructor(result, URL) { 
        
        GetDocumentPrepperLinkResponse.initialize(this, result, URL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, result, URL) { 
        obj['Result'] = result;
        obj['URL'] = URL;
    }

    /**
     * Constructs a <code>GetDocumentPrepperLinkResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDocumentPrepperLinkResponse} obj Optional instance to populate.
     * @return {module:model/GetDocumentPrepperLinkResponse} The populated <code>GetDocumentPrepperLinkResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDocumentPrepperLinkResponse();

            if (data.hasOwnProperty('Result')) {
                obj['Result'] = ApiClient.convertToType(data['Result'], 'String');
            }
            if (data.hasOwnProperty('URL')) {
                obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Displays the result of the call.
 * @member {String} Result
 */
GetDocumentPrepperLinkResponse.prototype['Result'] = undefined;

/**
 * Url
 * @member {String} URL
 */
GetDocumentPrepperLinkResponse.prototype['URL'] = undefined;






export default GetDocumentPrepperLinkResponse;

