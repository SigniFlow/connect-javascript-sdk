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
 * The LoginResponse model module.
 * @module model/LoginResponse
 * @version 1.0.1
 */
class LoginResponse {
    /**
     * Constructs a new <code>LoginResponse</code>.
     * #### The response returned when a user Logs in.
     * @alias module:model/LoginResponse
     * @param resultField {String} Displays the result of the call.
     * @param tokenField {module:model/TokenField} 
     */
    constructor(resultField, tokenField) { 
        
        LoginResponse.initialize(this, resultField, tokenField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, resultField, tokenField) { 
        obj['ResultField'] = resultField;
        obj['TokenField'] = tokenField;
    }

    /**
     * Constructs a <code>LoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginResponse} obj Optional instance to populate.
     * @return {module:model/LoginResponse} The populated <code>LoginResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginResponse();

            if (data.hasOwnProperty('ResultField')) {
                obj['ResultField'] = ApiClient.convertToType(data['ResultField'], 'String');
            }
            if (data.hasOwnProperty('TokenField')) {
                obj['TokenField'] = TokenField.constructFromObject(data['TokenField']);
            }
        }
        return obj;
    }


}

/**
 * Displays the result of the call.
 * @member {String} ResultField
 */
LoginResponse.prototype['ResultField'] = undefined;

/**
 * @member {module:model/TokenField} TokenField
 */
LoginResponse.prototype['TokenField'] = undefined;






export default LoginResponse;

