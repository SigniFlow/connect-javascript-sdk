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
import FieldType from './FieldType';
import TokenField from './TokenField';

/**
 * The DocPrepperAddFieldsFlowIDRequest model module.
 * @module model/DocPrepperAddFieldsFlowIDRequest
 * @version 1.0.1
 */
class DocPrepperAddFieldsFlowIDRequest {
    /**
     * Constructs a new <code>DocPrepperAddFieldsFlowIDRequest</code>.
     * #### The request sent when fields are added to a document using a FlowID.
     * @alias module:model/DocPrepperAddFieldsFlowIDRequest
     * @param docFieldTypeField {module:model/FieldType} 
     * @param docIDField {Number} Document ID.
     * @param flowIDField {Number} Document Flow ID.
     * @param heightField {String} Field height.
     * @param widthField {String} Field width.
     * @param isInvisibleField {Boolean} Is the field invisible.
     * @param linkToField {String} Document link.
     * @param pageNumberField {Number} Field page number.
     * @param nameField {String} Field name field.
     * @param userEmailField {String} User email address field.
     * @param xCoordinateField {String} Document field x-coordinates.
     * @param yCoordinateField {String} Document field y-coordinates.
     * @param tokenField {module:model/TokenField} 
     */
    constructor(docFieldTypeField, docIDField, flowIDField, heightField, widthField, isInvisibleField, linkToField, pageNumberField, nameField, userEmailField, xCoordinateField, yCoordinateField, tokenField) { 
        
        DocPrepperAddFieldsFlowIDRequest.initialize(this, docFieldTypeField, docIDField, flowIDField, heightField, widthField, isInvisibleField, linkToField, pageNumberField, nameField, userEmailField, xCoordinateField, yCoordinateField, tokenField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, docFieldTypeField, docIDField, flowIDField, heightField, widthField, isInvisibleField, linkToField, pageNumberField, nameField, userEmailField, xCoordinateField, yCoordinateField, tokenField) { 
        obj['DocFieldTypeField'] = docFieldTypeField;
        obj['DocIDField'] = docIDField;
        obj['FlowIDField'] = flowIDField;
        obj['HeightField'] = heightField;
        obj['WidthField'] = widthField;
        obj['IsInvisibleField'] = isInvisibleField;
        obj['LinkToField'] = linkToField;
        obj['PageNumberField'] = pageNumberField;
        obj['NameField'] = nameField;
        obj['UserEmailField'] = userEmailField;
        obj['XCoordinateField'] = xCoordinateField;
        obj['YCoordinateField'] = yCoordinateField;
        obj['TokenField'] = tokenField;
    }

    /**
     * Constructs a <code>DocPrepperAddFieldsFlowIDRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocPrepperAddFieldsFlowIDRequest} obj Optional instance to populate.
     * @return {module:model/DocPrepperAddFieldsFlowIDRequest} The populated <code>DocPrepperAddFieldsFlowIDRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocPrepperAddFieldsFlowIDRequest();

            if (data.hasOwnProperty('DocFieldTypeField')) {
                obj['DocFieldTypeField'] = FieldType.constructFromObject(data['DocFieldTypeField']);
            }
            if (data.hasOwnProperty('DocIDField')) {
                obj['DocIDField'] = ApiClient.convertToType(data['DocIDField'], 'Number');
            }
            if (data.hasOwnProperty('FlowIDField')) {
                obj['FlowIDField'] = ApiClient.convertToType(data['FlowIDField'], 'Number');
            }
            if (data.hasOwnProperty('HeightField')) {
                obj['HeightField'] = ApiClient.convertToType(data['HeightField'], 'String');
            }
            if (data.hasOwnProperty('WidthField')) {
                obj['WidthField'] = ApiClient.convertToType(data['WidthField'], 'String');
            }
            if (data.hasOwnProperty('IsInvisibleField')) {
                obj['IsInvisibleField'] = ApiClient.convertToType(data['IsInvisibleField'], 'Boolean');
            }
            if (data.hasOwnProperty('LinkToField')) {
                obj['LinkToField'] = ApiClient.convertToType(data['LinkToField'], 'String');
            }
            if (data.hasOwnProperty('PageNumberField')) {
                obj['PageNumberField'] = ApiClient.convertToType(data['PageNumberField'], 'Number');
            }
            if (data.hasOwnProperty('NameField')) {
                obj['NameField'] = ApiClient.convertToType(data['NameField'], 'String');
            }
            if (data.hasOwnProperty('UserEmailField')) {
                obj['UserEmailField'] = ApiClient.convertToType(data['UserEmailField'], 'String');
            }
            if (data.hasOwnProperty('XCoordinateField')) {
                obj['XCoordinateField'] = ApiClient.convertToType(data['XCoordinateField'], 'String');
            }
            if (data.hasOwnProperty('YCoordinateField')) {
                obj['YCoordinateField'] = ApiClient.convertToType(data['YCoordinateField'], 'String');
            }
            if (data.hasOwnProperty('TokenField')) {
                obj['TokenField'] = TokenField.constructFromObject(data['TokenField']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FieldType} DocFieldTypeField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['DocFieldTypeField'] = undefined;

/**
 * Document ID.
 * @member {Number} DocIDField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['DocIDField'] = undefined;

/**
 * Document Flow ID.
 * @member {Number} FlowIDField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['FlowIDField'] = undefined;

/**
 * Field height.
 * @member {String} HeightField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['HeightField'] = undefined;

/**
 * Field width.
 * @member {String} WidthField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['WidthField'] = undefined;

/**
 * Is the field invisible.
 * @member {Boolean} IsInvisibleField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['IsInvisibleField'] = undefined;

/**
 * Document link.
 * @member {String} LinkToField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['LinkToField'] = undefined;

/**
 * Field page number.
 * @member {Number} PageNumberField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['PageNumberField'] = undefined;

/**
 * Field name field.
 * @member {String} NameField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['NameField'] = undefined;

/**
 * User email address field.
 * @member {String} UserEmailField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['UserEmailField'] = undefined;

/**
 * Document field x-coordinates.
 * @member {String} XCoordinateField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['XCoordinateField'] = undefined;

/**
 * Document field y-coordinates.
 * @member {String} YCoordinateField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['YCoordinateField'] = undefined;

/**
 * @member {module:model/TokenField} TokenField
 */
DocPrepperAddFieldsFlowIDRequest.prototype['TokenField'] = undefined;






export default DocPrepperAddFieldsFlowIDRequest;
