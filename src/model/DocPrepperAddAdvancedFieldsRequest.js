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
import DocPrepperAddAdvancedFieldsRequestFieldInfoListField from './DocPrepperAddAdvancedFieldsRequestFieldInfoListField';
import TokenField from './TokenField';

/**
 * The DocPrepperAddAdvancedFieldsRequest model module.
 * @module model/DocPrepperAddAdvancedFieldsRequest
 * @version 1.0.1
 */
class DocPrepperAddAdvancedFieldsRequest {
    /**
     * Constructs a new <code>DocPrepperAddAdvancedFieldsRequest</code>.
     * #### A request sent to add advanced fields to a document.
     * @alias module:model/DocPrepperAddAdvancedFieldsRequest
     * @param fieldInfoListField {Array.<module:model/DocPrepperAddAdvancedFieldsRequestFieldInfoListField>} Field information list field.
     * @param tokenField {module:model/TokenField} 
     */
    constructor(fieldInfoListField, tokenField) { 
        
        DocPrepperAddAdvancedFieldsRequest.initialize(this, fieldInfoListField, tokenField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldInfoListField, tokenField) { 
        obj['FieldInfoListField'] = fieldInfoListField;
        obj['TokenField'] = tokenField;
    }

    /**
     * Constructs a <code>DocPrepperAddAdvancedFieldsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocPrepperAddAdvancedFieldsRequest} obj Optional instance to populate.
     * @return {module:model/DocPrepperAddAdvancedFieldsRequest} The populated <code>DocPrepperAddAdvancedFieldsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocPrepperAddAdvancedFieldsRequest();

            if (data.hasOwnProperty('FieldInfoListField')) {
                obj['FieldInfoListField'] = ApiClient.convertToType(data['FieldInfoListField'], [DocPrepperAddAdvancedFieldsRequestFieldInfoListField]);
            }
            if (data.hasOwnProperty('TokenField')) {
                obj['TokenField'] = TokenField.constructFromObject(data['TokenField']);
            }
        }
        return obj;
    }


}

/**
 * Field information list field.
 * @member {Array.<module:model/DocPrepperAddAdvancedFieldsRequestFieldInfoListField>} FieldInfoListField
 */
DocPrepperAddAdvancedFieldsRequest.prototype['FieldInfoListField'] = undefined;

/**
 * @member {module:model/TokenField} TokenField
 */
DocPrepperAddAdvancedFieldsRequest.prototype['TokenField'] = undefined;






export default DocPrepperAddAdvancedFieldsRequest;
