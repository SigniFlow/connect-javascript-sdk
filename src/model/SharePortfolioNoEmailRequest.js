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
 * The SharePortfolioNoEmailRequest model module.
 * @module model/SharePortfolioNoEmailRequest
 * @version 1.0.1
 */
class SharePortfolioNoEmailRequest {
    /**
     * Constructs a new <code>SharePortfolioNoEmailRequest</code>.
     * #### The request sent when a user wants to share a portfolio but does not want an email to be sent.
     * @alias module:model/SharePortfolioNoEmailRequest
     * @param accessLevelField {Number} 
     * @param portfolioIDField {String} 
     * @param shareOptionField {Number} 
     * @param tokenField {module:model/TokenField} 
     * @param uniqueIDField {String} 
     */
    constructor(accessLevelField, portfolioIDField, shareOptionField, tokenField, uniqueIDField) { 
        
        SharePortfolioNoEmailRequest.initialize(this, accessLevelField, portfolioIDField, shareOptionField, tokenField, uniqueIDField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessLevelField, portfolioIDField, shareOptionField, tokenField, uniqueIDField) { 
        obj['AccessLevelField'] = accessLevelField;
        obj['PortfolioIDField'] = portfolioIDField;
        obj['ShareOptionField'] = shareOptionField;
        obj['TokenField'] = tokenField;
        obj['UniqueIDField'] = uniqueIDField;
    }

    /**
     * Constructs a <code>SharePortfolioNoEmailRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SharePortfolioNoEmailRequest} obj Optional instance to populate.
     * @return {module:model/SharePortfolioNoEmailRequest} The populated <code>SharePortfolioNoEmailRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SharePortfolioNoEmailRequest();

            if (data.hasOwnProperty('AccessLevelField')) {
                obj['AccessLevelField'] = ApiClient.convertToType(data['AccessLevelField'], 'Number');
            }
            if (data.hasOwnProperty('PortfolioIDField')) {
                obj['PortfolioIDField'] = ApiClient.convertToType(data['PortfolioIDField'], 'String');
            }
            if (data.hasOwnProperty('ShareOptionField')) {
                obj['ShareOptionField'] = ApiClient.convertToType(data['ShareOptionField'], 'Number');
            }
            if (data.hasOwnProperty('TokenField')) {
                obj['TokenField'] = TokenField.constructFromObject(data['TokenField']);
            }
            if (data.hasOwnProperty('UniqueIDField')) {
                obj['UniqueIDField'] = ApiClient.convertToType(data['UniqueIDField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} AccessLevelField
 */
SharePortfolioNoEmailRequest.prototype['AccessLevelField'] = undefined;

/**
 * @member {String} PortfolioIDField
 */
SharePortfolioNoEmailRequest.prototype['PortfolioIDField'] = undefined;

/**
 * @member {Number} ShareOptionField
 */
SharePortfolioNoEmailRequest.prototype['ShareOptionField'] = undefined;

/**
 * @member {module:model/TokenField} TokenField
 */
SharePortfolioNoEmailRequest.prototype['TokenField'] = undefined;

/**
 * @member {String} UniqueIDField
 */
SharePortfolioNoEmailRequest.prototype['UniqueIDField'] = undefined;






export default SharePortfolioNoEmailRequest;

