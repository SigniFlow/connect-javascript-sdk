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
 * The GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField model module.
 * @module model/GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField
 * @version 1.0.1
 */
class GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField {
    /**
     * Constructs a new <code>GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField</code>.
     * @alias module:model/GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField
     * @param pageNumberField {Number} The page number where the field is.
     * @param xCoordinateField {String} The y coordinates of the field.
     * @param yCoordinateField {String} The x coordinates of the field.
     */
    constructor(pageNumberField, xCoordinateField, yCoordinateField) { 
        
        GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField.initialize(this, pageNumberField, xCoordinateField, yCoordinateField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pageNumberField, xCoordinateField, yCoordinateField) { 
        obj['PageNumberField'] = pageNumberField;
        obj['XCoordinateField'] = xCoordinateField;
        obj['YCoordinateField'] = yCoordinateField;
    }

    /**
     * Constructs a <code>GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField} obj Optional instance to populate.
     * @return {module:model/GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField} The populated <code>GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField();

            if (data.hasOwnProperty('PageNumberField')) {
                obj['PageNumberField'] = ApiClient.convertToType(data['PageNumberField'], 'Number');
            }
            if (data.hasOwnProperty('XCoordinateField')) {
                obj['XCoordinateField'] = ApiClient.convertToType(data['XCoordinateField'], 'String');
            }
            if (data.hasOwnProperty('YCoordinateField')) {
                obj['YCoordinateField'] = ApiClient.convertToType(data['YCoordinateField'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The page number where the field is.
 * @member {Number} PageNumberField
 */
GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField.prototype['PageNumberField'] = undefined;

/**
 * The y coordinates of the field.
 * @member {String} XCoordinateField
 */
GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField.prototype['XCoordinateField'] = undefined;

/**
 * The x coordinates of the field.
 * @member {String} YCoordinateField
 */
GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField.prototype['YCoordinateField'] = undefined;






export default GetDocumentTagFieldPositionResponseDocumentTagFieldsPositionField;

