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
 * The FullWorkflowRequestPortfolioInformationField model module.
 * @module model/FullWorkflowRequestPortfolioInformationField
 * @version 1.0.1
 */
class FullWorkflowRequestPortfolioInformationField {
    /**
     * Constructs a new <code>FullWorkflowRequestPortfolioInformationField</code>.
     * Portfolio information.
     * @alias module:model/FullWorkflowRequestPortfolioInformationField
     * @param createPortfolioField {Boolean} Create portfolio.
     * @param linkToPortfolioField {Boolean} Portfolio link.
     * @param portfolioIDField {Number} Portfolio ID.
     * @param portfolioNameField {String} Portfolio name.
     */
    constructor(createPortfolioField, linkToPortfolioField, portfolioIDField, portfolioNameField) { 
        
        FullWorkflowRequestPortfolioInformationField.initialize(this, createPortfolioField, linkToPortfolioField, portfolioIDField, portfolioNameField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createPortfolioField, linkToPortfolioField, portfolioIDField, portfolioNameField) { 
        obj['CreatePortfolioField'] = createPortfolioField;
        obj['LinkToPortfolioField'] = linkToPortfolioField;
        obj['PortfolioIDField'] = portfolioIDField;
        obj['PortfolioNameField'] = portfolioNameField;
    }

    /**
     * Constructs a <code>FullWorkflowRequestPortfolioInformationField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FullWorkflowRequestPortfolioInformationField} obj Optional instance to populate.
     * @return {module:model/FullWorkflowRequestPortfolioInformationField} The populated <code>FullWorkflowRequestPortfolioInformationField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FullWorkflowRequestPortfolioInformationField();

            if (data.hasOwnProperty('CreatePortfolioField')) {
                obj['CreatePortfolioField'] = ApiClient.convertToType(data['CreatePortfolioField'], 'Boolean');
            }
            if (data.hasOwnProperty('LinkToPortfolioField')) {
                obj['LinkToPortfolioField'] = ApiClient.convertToType(data['LinkToPortfolioField'], 'Boolean');
            }
            if (data.hasOwnProperty('PortfolioIDField')) {
                obj['PortfolioIDField'] = ApiClient.convertToType(data['PortfolioIDField'], 'Number');
            }
            if (data.hasOwnProperty('PortfolioNameField')) {
                obj['PortfolioNameField'] = ApiClient.convertToType(data['PortfolioNameField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Create portfolio.
 * @member {Boolean} CreatePortfolioField
 */
FullWorkflowRequestPortfolioInformationField.prototype['CreatePortfolioField'] = undefined;

/**
 * Portfolio link.
 * @member {Boolean} LinkToPortfolioField
 */
FullWorkflowRequestPortfolioInformationField.prototype['LinkToPortfolioField'] = undefined;

/**
 * Portfolio ID.
 * @member {Number} PortfolioIDField
 */
FullWorkflowRequestPortfolioInformationField.prototype['PortfolioIDField'] = undefined;

/**
 * Portfolio name.
 * @member {String} PortfolioNameField
 */
FullWorkflowRequestPortfolioInformationField.prototype['PortfolioNameField'] = undefined;






export default FullWorkflowRequestPortfolioInformationField;

