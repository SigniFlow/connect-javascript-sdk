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
import GetPrepperTemplateResponsePrepperTemplateValuesField from './GetPrepperTemplateResponsePrepperTemplateValuesField';

/**
 * The GetPrepperTemplateResponse model module.
 * @module model/GetPrepperTemplateResponse
 * @version 1.0.1
 */
class GetPrepperTemplateResponse {
    /**
     * Constructs a new <code>GetPrepperTemplateResponse</code>.
     * #### The response received after requesting a document template.
     * @alias module:model/GetPrepperTemplateResponse
     * @param prepperTemplateValuesField {Array.<module:model/GetPrepperTemplateResponsePrepperTemplateValuesField>} 
     * @param resultField {String} Displays the result of the call.
     */
    constructor(prepperTemplateValuesField, resultField) { 
        
        GetPrepperTemplateResponse.initialize(this, prepperTemplateValuesField, resultField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, prepperTemplateValuesField, resultField) { 
        obj['PrepperTemplateValuesField'] = prepperTemplateValuesField;
        obj['ResultField'] = resultField;
    }

    /**
     * Constructs a <code>GetPrepperTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPrepperTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetPrepperTemplateResponse} The populated <code>GetPrepperTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPrepperTemplateResponse();

            if (data.hasOwnProperty('PrepperTemplateValuesField')) {
                obj['PrepperTemplateValuesField'] = ApiClient.convertToType(data['PrepperTemplateValuesField'], [GetPrepperTemplateResponsePrepperTemplateValuesField]);
            }
            if (data.hasOwnProperty('ResultField')) {
                obj['ResultField'] = ApiClient.convertToType(data['ResultField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetPrepperTemplateResponsePrepperTemplateValuesField>} PrepperTemplateValuesField
 */
GetPrepperTemplateResponse.prototype['PrepperTemplateValuesField'] = undefined;

/**
 * Displays the result of the call.
 * @member {String} ResultField
 */
GetPrepperTemplateResponse.prototype['ResultField'] = undefined;






export default GetPrepperTemplateResponse;

