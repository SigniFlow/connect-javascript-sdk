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
* Enum class AutoExpire.
* @enum {}
* @readonly
*/
export default class AutoExpire {
    
        /**
         * value: 0
         * @const
         */
        "No" = 0;

    
        /**
         * value: 1
         * @const
         */
        "Yes" = 1;

    

    /**
    * Returns a <code>AutoExpire</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AutoExpire} The enum <code>AutoExpire</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
