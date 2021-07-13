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
 * The DocPrepperAddAdvancedFieldsRequestFieldOptionsListField model module.
 * @module model/DocPrepperAddAdvancedFieldsRequestFieldOptionsListField
 * @version 1.0.1
 */
class DocPrepperAddAdvancedFieldsRequestFieldOptionsListField {
    /**
     * Constructs a new <code>DocPrepperAddAdvancedFieldsRequestFieldOptionsListField</code>.
     * @alias module:model/DocPrepperAddAdvancedFieldsRequestFieldOptionsListField
     * @param linkedValueField {String} 
     * @param maxField {Number} Max amount field.
     * @param minField {Number} Min amount field
     * @param valueField {String} 
     */
    constructor(linkedValueField, maxField, minField, valueField) { 
        
        DocPrepperAddAdvancedFieldsRequestFieldOptionsListField.initialize(this, linkedValueField, maxField, minField, valueField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, linkedValueField, maxField, minField, valueField) { 
        obj['LinkedValueField'] = linkedValueField;
        obj['MaxField'] = maxField;
        obj['MinField'] = minField;
        obj['ValueField'] = valueField;
    }

    /**
     * Constructs a <code>DocPrepperAddAdvancedFieldsRequestFieldOptionsListField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocPrepperAddAdvancedFieldsRequestFieldOptionsListField} obj Optional instance to populate.
     * @return {module:model/DocPrepperAddAdvancedFieldsRequestFieldOptionsListField} The populated <code>DocPrepperAddAdvancedFieldsRequestFieldOptionsListField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocPrepperAddAdvancedFieldsRequestFieldOptionsListField();

            if (data.hasOwnProperty('LinkedValueField')) {
                obj['LinkedValueField'] = ApiClient.convertToType(data['LinkedValueField'], 'String');
            }
            if (data.hasOwnProperty('MaxField')) {
                obj['MaxField'] = ApiClient.convertToType(data['MaxField'], 'Number');
            }
            if (data.hasOwnProperty('MinField')) {
                obj['MinField'] = ApiClient.convertToType(data['MinField'], 'Number');
            }
            if (data.hasOwnProperty('ValueField')) {
                obj['ValueField'] = ApiClient.convertToType(data['ValueField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} LinkedValueField
 */
DocPrepperAddAdvancedFieldsRequestFieldOptionsListField.prototype['LinkedValueField'] = undefined;

/**
 * Max amount field.
 * @member {Number} MaxField
 */
DocPrepperAddAdvancedFieldsRequestFieldOptionsListField.prototype['MaxField'] = undefined;

/**
 * Min amount field
 * @member {Number} MinField
 */
DocPrepperAddAdvancedFieldsRequestFieldOptionsListField.prototype['MinField'] = undefined;

/**
 * @member {String} ValueField
 */
DocPrepperAddAdvancedFieldsRequestFieldOptionsListField.prototype['ValueField'] = undefined;






export default DocPrepperAddAdvancedFieldsRequestFieldOptionsListField;

