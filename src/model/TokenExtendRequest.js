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
 * The TokenExtendRequest model module.
 * @module model/TokenExtendRequest
 * @version 1.0.1
 */
class TokenExtendRequest {
    /**
     * Constructs a new <code>TokenExtendRequest</code>.
     * #### The request sent to extend the session time by extending the period when the token is valid.
     * @alias module:model/TokenExtendRequest
     * @param tokenField {module:model/TokenField} 
     * @param tokenValidityField {Number} 
     */
    constructor(tokenField, tokenValidityField) { 
        
        TokenExtendRequest.initialize(this, tokenField, tokenValidityField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenField, tokenValidityField) { 
        obj['TokenField'] = tokenField;
        obj['TokenValidityField'] = tokenValidityField;
    }

    /**
     * Constructs a <code>TokenExtendRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenExtendRequest} obj Optional instance to populate.
     * @return {module:model/TokenExtendRequest} The populated <code>TokenExtendRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenExtendRequest();

            if (data.hasOwnProperty('TokenField')) {
                obj['TokenField'] = TokenField.constructFromObject(data['TokenField']);
            }
            if (data.hasOwnProperty('TokenValidityField')) {
                obj['TokenValidityField'] = ApiClient.convertToType(data['TokenValidityField'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TokenField} TokenField
 */
TokenExtendRequest.prototype['TokenField'] = undefined;

/**
 * @member {Number} TokenValidityField
 */
TokenExtendRequest.prototype['TokenValidityField'] = undefined;






export default TokenExtendRequest;
