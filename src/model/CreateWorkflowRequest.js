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
import AutoExpire from './AutoExpire';
import AutoRemind from './AutoRemind';
import DocExtension from './DocExtension';
import Priority from './Priority';
import TokenField from './TokenField';

/**
 * The CreateWorkflowRequest model module.
 * @module model/CreateWorkflowRequest
 * @version 1.0.1
 */
class CreateWorkflowRequest {
    /**
     * Constructs a new <code>CreateWorkflowRequest</code>.
     * #### The request sent to create a document workflow.
     * @alias module:model/CreateWorkflowRequest
     * @param additionalDataField {String} Sets additional data to be embedded in PDF Meta.
     * @param autoExpireField {module:model/AutoExpire} 
     * @param autoRemindField {module:model/AutoRemind} 
     * @param docField {String} Base64 Encoded String of document
     * @param docNameField {String} Name of document to display in SigniFlow
     * @param extensionField {module:model/DocExtension} 
     * @param messageField {String} Custom message to display to participants
     * @param priorityField {module:model/Priority} 
     * @param sLAField {Number} Deprecated field, Pass 0
     * @param tokenField {module:model/TokenField} 
     */
    constructor(additionalDataField, autoExpireField, autoRemindField, docField, docNameField, extensionField, messageField, priorityField, sLAField, tokenField) { 
        
        CreateWorkflowRequest.initialize(this, additionalDataField, autoExpireField, autoRemindField, docField, docNameField, extensionField, messageField, priorityField, sLAField, tokenField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, additionalDataField, autoExpireField, autoRemindField, docField, docNameField, extensionField, messageField, priorityField, sLAField, tokenField) { 
        obj['AdditionalDataField'] = additionalDataField;
        obj['AutoExpireField'] = autoExpireField;
        obj['AutoRemindField'] = autoRemindField;
        obj['DocField'] = docField;
        obj['DocNameField'] = docNameField;
        obj['ExtensionField'] = extensionField;
        obj['MessageField'] = messageField;
        obj['PriorityField'] = priorityField;
        obj['SLAField'] = sLAField || 0;
        obj['TokenField'] = tokenField;
    }

    /**
     * Constructs a <code>CreateWorkflowRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWorkflowRequest} obj Optional instance to populate.
     * @return {module:model/CreateWorkflowRequest} The populated <code>CreateWorkflowRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWorkflowRequest();

            if (data.hasOwnProperty('AdditionalDataField')) {
                obj['AdditionalDataField'] = ApiClient.convertToType(data['AdditionalDataField'], 'String');
            }
            if (data.hasOwnProperty('AutoExpireField')) {
                obj['AutoExpireField'] = AutoExpire.constructFromObject(data['AutoExpireField']);
            }
            if (data.hasOwnProperty('AutoRemindField')) {
                obj['AutoRemindField'] = AutoRemind.constructFromObject(data['AutoRemindField']);
            }
            if (data.hasOwnProperty('DocField')) {
                obj['DocField'] = ApiClient.convertToType(data['DocField'], 'String');
            }
            if (data.hasOwnProperty('DocNameField')) {
                obj['DocNameField'] = ApiClient.convertToType(data['DocNameField'], 'String');
            }
            if (data.hasOwnProperty('DueDateField')) {
                obj['DueDateField'] = ApiClient.convertToType(data['DueDateField'], 'Date');
            }
            if (data.hasOwnProperty('ExtensionField')) {
                obj['ExtensionField'] = DocExtension.constructFromObject(data['ExtensionField']);
            }
            if (data.hasOwnProperty('MessageField')) {
                obj['MessageField'] = ApiClient.convertToType(data['MessageField'], 'String');
            }
            if (data.hasOwnProperty('PriorityField')) {
                obj['PriorityField'] = Priority.constructFromObject(data['PriorityField']);
            }
            if (data.hasOwnProperty('SLAField')) {
                obj['SLAField'] = ApiClient.convertToType(data['SLAField'], 'Number');
            }
            if (data.hasOwnProperty('TokenField')) {
                obj['TokenField'] = TokenField.constructFromObject(data['TokenField']);
            }
        }
        return obj;
    }


}

/**
 * Sets additional data to be embedded in PDF Meta.
 * @member {String} AdditionalDataField
 */
CreateWorkflowRequest.prototype['AdditionalDataField'] = undefined;

/**
 * @member {module:model/AutoExpire} AutoExpireField
 */
CreateWorkflowRequest.prototype['AutoExpireField'] = undefined;

/**
 * @member {module:model/AutoRemind} AutoRemindField
 */
CreateWorkflowRequest.prototype['AutoRemindField'] = undefined;

/**
 * Base64 Encoded String of document
 * @member {String} DocField
 */
CreateWorkflowRequest.prototype['DocField'] = undefined;

/**
 * Name of document to display in SigniFlow
 * @member {String} DocNameField
 */
CreateWorkflowRequest.prototype['DocNameField'] = undefined;

/**
 * Due date for the document, use in conjunction with Auto Expire.
 * @member {Date} DueDateField
 */
CreateWorkflowRequest.prototype['DueDateField'] = undefined;

/**
 * @member {module:model/DocExtension} ExtensionField
 */
CreateWorkflowRequest.prototype['ExtensionField'] = undefined;

/**
 * Custom message to display to participants
 * @member {String} MessageField
 */
CreateWorkflowRequest.prototype['MessageField'] = undefined;

/**
 * @member {module:model/Priority} PriorityField
 */
CreateWorkflowRequest.prototype['PriorityField'] = undefined;

/**
 * Deprecated field, Pass 0
 * @member {Number} SLAField
 * @default 0
 */
CreateWorkflowRequest.prototype['SLAField'] = 0;

/**
 * @member {module:model/TokenField} TokenField
 */
CreateWorkflowRequest.prototype['TokenField'] = undefined;






export default CreateWorkflowRequest;
