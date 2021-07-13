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
 * The GetPrepperTemplateResponsePrepperTemplateValuesField model module.
 * @module model/GetPrepperTemplateResponsePrepperTemplateValuesField
 * @version 1.0.1
 */
class GetPrepperTemplateResponsePrepperTemplateValuesField {
    /**
     * Constructs a new <code>GetPrepperTemplateResponsePrepperTemplateValuesField</code>.
     * @alias module:model/GetPrepperTemplateResponsePrepperTemplateValuesField
     * @param colorField {String} 
     * @param docFieldIDField {String} 
     * @param docIDField {Number} 
     * @param fieldTypeField {String} 
     * @param heightField {Number} Field height.
     * @param pageNumberField {Number} 
     * @param userFullNameField {String} The user's full name.
     * @param userIDField {Number} The user's ID.
     * @param valueField {String} 
     * @param widthField {Number} Field width.
     * @param xCoordinateField {Number} The x coordinates of the fields.
     * @param yCoordinateField {Number} The y coordinates of the fields
     */
    constructor(colorField, docFieldIDField, docIDField, fieldTypeField, heightField, pageNumberField, userFullNameField, userIDField, valueField, widthField, xCoordinateField, yCoordinateField) { 
        
        GetPrepperTemplateResponsePrepperTemplateValuesField.initialize(this, colorField, docFieldIDField, docIDField, fieldTypeField, heightField, pageNumberField, userFullNameField, userIDField, valueField, widthField, xCoordinateField, yCoordinateField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, colorField, docFieldIDField, docIDField, fieldTypeField, heightField, pageNumberField, userFullNameField, userIDField, valueField, widthField, xCoordinateField, yCoordinateField) { 
        obj['ColorField'] = colorField;
        obj['DocFieldIDField'] = docFieldIDField;
        obj['DocIDField'] = docIDField;
        obj['FieldTypeField'] = fieldTypeField;
        obj['HeightField'] = heightField;
        obj['PageNumberField'] = pageNumberField;
        obj['UserFullNameField'] = userFullNameField;
        obj['UserIDField'] = userIDField;
        obj['ValueField'] = valueField;
        obj['WidthField'] = widthField;
        obj['XCoordinateField'] = xCoordinateField;
        obj['YCoordinateField'] = yCoordinateField;
    }

    /**
     * Constructs a <code>GetPrepperTemplateResponsePrepperTemplateValuesField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPrepperTemplateResponsePrepperTemplateValuesField} obj Optional instance to populate.
     * @return {module:model/GetPrepperTemplateResponsePrepperTemplateValuesField} The populated <code>GetPrepperTemplateResponsePrepperTemplateValuesField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPrepperTemplateResponsePrepperTemplateValuesField();

            if (data.hasOwnProperty('ColorField')) {
                obj['ColorField'] = ApiClient.convertToType(data['ColorField'], 'String');
            }
            if (data.hasOwnProperty('DocFieldIDField')) {
                obj['DocFieldIDField'] = ApiClient.convertToType(data['DocFieldIDField'], 'String');
            }
            if (data.hasOwnProperty('DocIDField')) {
                obj['DocIDField'] = ApiClient.convertToType(data['DocIDField'], 'Number');
            }
            if (data.hasOwnProperty('FieldTypeField')) {
                obj['FieldTypeField'] = ApiClient.convertToType(data['FieldTypeField'], 'String');
            }
            if (data.hasOwnProperty('HeightField')) {
                obj['HeightField'] = ApiClient.convertToType(data['HeightField'], 'Number');
            }
            if (data.hasOwnProperty('PageNumberField')) {
                obj['PageNumberField'] = ApiClient.convertToType(data['PageNumberField'], 'Number');
            }
            if (data.hasOwnProperty('UserFullNameField')) {
                obj['UserFullNameField'] = ApiClient.convertToType(data['UserFullNameField'], 'String');
            }
            if (data.hasOwnProperty('UserIDField')) {
                obj['UserIDField'] = ApiClient.convertToType(data['UserIDField'], 'Number');
            }
            if (data.hasOwnProperty('ValueField')) {
                obj['ValueField'] = ApiClient.convertToType(data['ValueField'], 'String');
            }
            if (data.hasOwnProperty('WidthField')) {
                obj['WidthField'] = ApiClient.convertToType(data['WidthField'], 'Number');
            }
            if (data.hasOwnProperty('XCoordinateField')) {
                obj['XCoordinateField'] = ApiClient.convertToType(data['XCoordinateField'], 'Number');
            }
            if (data.hasOwnProperty('YCoordinateField')) {
                obj['YCoordinateField'] = ApiClient.convertToType(data['YCoordinateField'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ColorField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['ColorField'] = undefined;

/**
 * @member {String} DocFieldIDField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['DocFieldIDField'] = undefined;

/**
 * @member {Number} DocIDField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['DocIDField'] = undefined;

/**
 * @member {String} FieldTypeField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['FieldTypeField'] = undefined;

/**
 * Field height.
 * @member {Number} HeightField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['HeightField'] = undefined;

/**
 * @member {Number} PageNumberField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['PageNumberField'] = undefined;

/**
 * The user's full name.
 * @member {String} UserFullNameField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['UserFullNameField'] = undefined;

/**
 * The user's ID.
 * @member {Number} UserIDField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['UserIDField'] = undefined;

/**
 * @member {String} ValueField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['ValueField'] = undefined;

/**
 * Field width.
 * @member {Number} WidthField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['WidthField'] = undefined;

/**
 * The x coordinates of the fields.
 * @member {Number} XCoordinateField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['XCoordinateField'] = undefined;

/**
 * The y coordinates of the fields
 * @member {Number} YCoordinateField
 */
GetPrepperTemplateResponsePrepperTemplateValuesField.prototype['YCoordinateField'] = undefined;






export default GetPrepperTemplateResponsePrepperTemplateValuesField;
