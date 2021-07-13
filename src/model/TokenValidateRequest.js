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
 * The TokenValidateRequest model module.
 * @module model/TokenValidateRequest
 * @version 1.0.1
 */
class TokenValidateRequest {
    /**
     * Constructs a new <code>TokenValidateRequest</code>.
     * #### This request gets sent when a session token needs to be validated.
     * @alias module:model/TokenValidateRequest
     * @param _0 {String} 
     */
    constructor(_0) { 
        
        TokenValidateRequest.initialize(this, _0);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _0) { 
        obj['0'] = _0;
    }

    /**
     * Constructs a <code>TokenValidateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenValidateRequest} obj Optional instance to populate.
     * @return {module:model/TokenValidateRequest} The populated <code>TokenValidateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenValidateRequest();

            if (data.hasOwnProperty('0')) {
                obj['0'] = ApiClient.convertToType(data['0'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} 0
 */
TokenValidateRequest.prototype['0'] = undefined;






export default TokenValidateRequest;
