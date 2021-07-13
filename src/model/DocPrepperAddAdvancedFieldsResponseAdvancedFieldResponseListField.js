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
 * The DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField model module.
 * @module model/DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField
 * @version 1.0.1
 */
class DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField {
    /**
     * Constructs a new <code>DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField</code>.
     * @alias module:model/DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField
     * @param docFieldIDField {Number} Document field ID.
     * @param resultField {String} Displays the result of the call.
     */
    constructor(docFieldIDField, resultField) { 
        
        DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField.initialize(this, docFieldIDField, resultField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, docFieldIDField, resultField) { 
        obj['DocFieldIDField'] = docFieldIDField;
        obj['ResultField'] = resultField;
    }

    /**
     * Constructs a <code>DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField} obj Optional instance to populate.
     * @return {module:model/DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField} The populated <code>DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField();

            if (data.hasOwnProperty('DocFieldIDField')) {
                obj['DocFieldIDField'] = ApiClient.convertToType(data['DocFieldIDField'], 'Number');
            }
            if (data.hasOwnProperty('ResultField')) {
                obj['ResultField'] = ApiClient.convertToType(data['ResultField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Document field ID.
 * @member {Number} DocFieldIDField
 */
DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField.prototype['DocFieldIDField'] = undefined;

/**
 * Displays the result of the call.
 * @member {String} ResultField
 */
DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField.prototype['ResultField'] = undefined;






export default DocPrepperAddAdvancedFieldsResponseAdvancedFieldResponseListField;

