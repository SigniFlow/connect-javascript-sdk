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
import ActionField from './ActionField';

/**
 * The AddWokflowStepV2ResponseFlowStepsField model module.
 * @module model/AddWokflowStepV2ResponseFlowStepsField
 * @version 1.0.1
 */
class AddWokflowStepV2ResponseFlowStepsField {
    /**
     * Constructs a new <code>AddWokflowStepV2ResponseFlowStepsField</code>.
     * @alias module:model/AddWokflowStepV2ResponseFlowStepsField
     * @param actionField {module:model/ActionField} 
     * @param emailField {String} Participant email address field.
     * @param flowIDField {Number} Document Flow ID field.
     */
    constructor(actionField, emailField, flowIDField) { 
        
        AddWokflowStepV2ResponseFlowStepsField.initialize(this, actionField, emailField, flowIDField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, actionField, emailField, flowIDField) { 
        obj['ActionField'] = actionField;
        obj['EmailField'] = emailField;
        obj['FlowIDField'] = flowIDField;
    }

    /**
     * Constructs a <code>AddWokflowStepV2ResponseFlowStepsField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddWokflowStepV2ResponseFlowStepsField} obj Optional instance to populate.
     * @return {module:model/AddWokflowStepV2ResponseFlowStepsField} The populated <code>AddWokflowStepV2ResponseFlowStepsField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddWokflowStepV2ResponseFlowStepsField();

            if (data.hasOwnProperty('ActionField')) {
                obj['ActionField'] = ActionField.constructFromObject(data['ActionField']);
            }
            if (data.hasOwnProperty('EmailField')) {
                obj['EmailField'] = ApiClient.convertToType(data['EmailField'], 'String');
            }
            if (data.hasOwnProperty('FlowIDField')) {
                obj['FlowIDField'] = ApiClient.convertToType(data['FlowIDField'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActionField} ActionField
 */
AddWokflowStepV2ResponseFlowStepsField.prototype['ActionField'] = undefined;

/**
 * Participant email address field.
 * @member {String} EmailField
 */
AddWokflowStepV2ResponseFlowStepsField.prototype['EmailField'] = undefined;

/**
 * Document Flow ID field.
 * @member {Number} FlowIDField
 */
AddWokflowStepV2ResponseFlowStepsField.prototype['FlowIDField'] = undefined;






export default AddWokflowStepV2ResponseFlowStepsField;

