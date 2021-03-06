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
 * The GetPrepperTemplateListResponseTemplateInformationValuesField model module.
 * @module model/GetPrepperTemplateListResponseTemplateInformationValuesField
 * @version 1.0.1
 */
class GetPrepperTemplateListResponseTemplateInformationValuesField {
    /**
     * Constructs a new <code>GetPrepperTemplateListResponseTemplateInformationValuesField</code>.
     * @alias module:model/GetPrepperTemplateListResponseTemplateInformationValuesField
     * @param nameField {String} 
     * @param prepperTemplateIDField {Number} 
     * @param templateDescriptionField {String} Template description.
     */
    constructor(nameField, prepperTemplateIDField, templateDescriptionField) { 
        
        GetPrepperTemplateListResponseTemplateInformationValuesField.initialize(this, nameField, prepperTemplateIDField, templateDescriptionField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, nameField, prepperTemplateIDField, templateDescriptionField) { 
        obj['NameField'] = nameField;
        obj['PrepperTemplateIDField'] = prepperTemplateIDField;
        obj['TemplateDescriptionField'] = templateDescriptionField;
    }

    /**
     * Constructs a <code>GetPrepperTemplateListResponseTemplateInformationValuesField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPrepperTemplateListResponseTemplateInformationValuesField} obj Optional instance to populate.
     * @return {module:model/GetPrepperTemplateListResponseTemplateInformationValuesField} The populated <code>GetPrepperTemplateListResponseTemplateInformationValuesField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPrepperTemplateListResponseTemplateInformationValuesField();

            if (data.hasOwnProperty('NameField')) {
                obj['NameField'] = ApiClient.convertToType(data['NameField'], 'String');
            }
            if (data.hasOwnProperty('PrepperTemplateIDField')) {
                obj['PrepperTemplateIDField'] = ApiClient.convertToType(data['PrepperTemplateIDField'], 'Number');
            }
            if (data.hasOwnProperty('TemplateDescriptionField')) {
                obj['TemplateDescriptionField'] = ApiClient.convertToType(data['TemplateDescriptionField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} NameField
 */
GetPrepperTemplateListResponseTemplateInformationValuesField.prototype['NameField'] = undefined;

/**
 * @member {Number} PrepperTemplateIDField
 */
GetPrepperTemplateListResponseTemplateInformationValuesField.prototype['PrepperTemplateIDField'] = undefined;

/**
 * Template description.
 * @member {String} TemplateDescriptionField
 */
GetPrepperTemplateListResponseTemplateInformationValuesField.prototype['TemplateDescriptionField'] = undefined;






export default GetPrepperTemplateListResponseTemplateInformationValuesField;

