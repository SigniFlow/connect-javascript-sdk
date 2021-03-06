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
 * The LogoutRequest model module.
 * @module model/LogoutRequest
 * @version 1.0.1
 */
class LogoutRequest {
    /**
     * Constructs a new <code>LogoutRequest</code>.
     * #### The request sent when a user logs out.
     * @alias module:model/LogoutRequest
     * @param tokenField {String} 
     */
    constructor(tokenField) { 
        
        LogoutRequest.initialize(this, tokenField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenField) { 
        obj['TokenField'] = tokenField;
    }

    /**
     * Constructs a <code>LogoutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogoutRequest} obj Optional instance to populate.
     * @return {module:model/LogoutRequest} The populated <code>LogoutRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogoutRequest();

            if (data.hasOwnProperty('TokenField')) {
                obj['TokenField'] = ApiClient.convertToType(data['TokenField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} TokenField
 */
LogoutRequest.prototype['TokenField'] = undefined;






export default LogoutRequest;

