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
 * The SigningCeremonyV2Request model module.
 * @module model/SigningCeremonyV2Request
 * @version 1.0.1
 */
class SigningCeremonyV2Request {
    /**
     * Constructs a new <code>SigningCeremonyV2Request</code>.
     * #### The request sent to start the signing process of a document.
     * @alias module:model/SigningCeremonyV2Request
     * @param checkboxFieldsListField {Array.<Object>} 
     * @param docField {String} 
     * @param docNameField {String} 
     * @param initialFieldsListField {Array.<Object>} 
     * @param loginPasswordField {String} 
     * @param loginUserNameField {String} 
     * @param signatureHField {Number} 
     * @param signatureImageField {String} 
     * @param signatureImageIncludeBorderField {Boolean} 
     * @param signatureImageIncludeReasonField {Boolean} 
     * @param signatureImageIncludeSignedByField {Boolean} 
     * @param signatureImageIncludeSignedDateField {Boolean} 
     * @param signatureImageTypeField {Number} 
     * @param signaturePageField {Number} 
     * @param signatureWField {Number} 
     * @param signatureXField {Number} 
     * @param signatureYField {Number} 
     * @param signerEmailField {String} 
     * @param signerFullNameField {String} 
     * @param signerIdentificationNumberField {String} 
     * @param signerLocationField {String} 
     * @param signerMobileNumberField {String} 
     * @param signerReasonField {String} 
     * @param signerTrustOriginField {String} 
     * @param signerTrustReferenceField {String} 
     * @param textFieldsListField {Array.<Object>} 
     */
    constructor(checkboxFieldsListField, docField, docNameField, initialFieldsListField, loginPasswordField, loginUserNameField, signatureHField, signatureImageField, signatureImageIncludeBorderField, signatureImageIncludeReasonField, signatureImageIncludeSignedByField, signatureImageIncludeSignedDateField, signatureImageTypeField, signaturePageField, signatureWField, signatureXField, signatureYField, signerEmailField, signerFullNameField, signerIdentificationNumberField, signerLocationField, signerMobileNumberField, signerReasonField, signerTrustOriginField, signerTrustReferenceField, textFieldsListField) { 
        
        SigningCeremonyV2Request.initialize(this, checkboxFieldsListField, docField, docNameField, initialFieldsListField, loginPasswordField, loginUserNameField, signatureHField, signatureImageField, signatureImageIncludeBorderField, signatureImageIncludeReasonField, signatureImageIncludeSignedByField, signatureImageIncludeSignedDateField, signatureImageTypeField, signaturePageField, signatureWField, signatureXField, signatureYField, signerEmailField, signerFullNameField, signerIdentificationNumberField, signerLocationField, signerMobileNumberField, signerReasonField, signerTrustOriginField, signerTrustReferenceField, textFieldsListField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, checkboxFieldsListField, docField, docNameField, initialFieldsListField, loginPasswordField, loginUserNameField, signatureHField, signatureImageField, signatureImageIncludeBorderField, signatureImageIncludeReasonField, signatureImageIncludeSignedByField, signatureImageIncludeSignedDateField, signatureImageTypeField, signaturePageField, signatureWField, signatureXField, signatureYField, signerEmailField, signerFullNameField, signerIdentificationNumberField, signerLocationField, signerMobileNumberField, signerReasonField, signerTrustOriginField, signerTrustReferenceField, textFieldsListField) { 
        obj['CheckboxFieldsListField'] = checkboxFieldsListField;
        obj['DocField'] = docField;
        obj['DocNameField'] = docNameField;
        obj['InitialFieldsListField'] = initialFieldsListField;
        obj['LoginPasswordField'] = loginPasswordField;
        obj['LoginUserNameField'] = loginUserNameField;
        obj['SignatureHField'] = signatureHField;
        obj['SignatureImageField'] = signatureImageField;
        obj['SignatureImageIncludeBorderField'] = signatureImageIncludeBorderField;
        obj['SignatureImageIncludeReasonField'] = signatureImageIncludeReasonField;
        obj['SignatureImageIncludeSignedByField'] = signatureImageIncludeSignedByField;
        obj['SignatureImageIncludeSignedDateField'] = signatureImageIncludeSignedDateField;
        obj['SignatureImageTypeField'] = signatureImageTypeField;
        obj['SignaturePageField'] = signaturePageField;
        obj['SignatureWField'] = signatureWField;
        obj['SignatureXField'] = signatureXField;
        obj['SignatureYField'] = signatureYField;
        obj['SignerEmailField'] = signerEmailField;
        obj['SignerFullNameField'] = signerFullNameField;
        obj['SignerIdentificationNumberField'] = signerIdentificationNumberField;
        obj['SignerLocationField'] = signerLocationField;
        obj['SignerMobileNumberField'] = signerMobileNumberField;
        obj['SignerReasonField'] = signerReasonField;
        obj['SignerTrustOriginField'] = signerTrustOriginField;
        obj['SignerTrustReferenceField'] = signerTrustReferenceField;
        obj['TextFieldsListField'] = textFieldsListField;
    }

    /**
     * Constructs a <code>SigningCeremonyV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SigningCeremonyV2Request} obj Optional instance to populate.
     * @return {module:model/SigningCeremonyV2Request} The populated <code>SigningCeremonyV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SigningCeremonyV2Request();

            if (data.hasOwnProperty('CheckboxFieldsListField')) {
                obj['CheckboxFieldsListField'] = ApiClient.convertToType(data['CheckboxFieldsListField'], [Object]);
            }
            if (data.hasOwnProperty('DocField')) {
                obj['DocField'] = ApiClient.convertToType(data['DocField'], 'String');
            }
            if (data.hasOwnProperty('DocNameField')) {
                obj['DocNameField'] = ApiClient.convertToType(data['DocNameField'], 'String');
            }
            if (data.hasOwnProperty('InitialFieldsListField')) {
                obj['InitialFieldsListField'] = ApiClient.convertToType(data['InitialFieldsListField'], [Object]);
            }
            if (data.hasOwnProperty('LoginPasswordField')) {
                obj['LoginPasswordField'] = ApiClient.convertToType(data['LoginPasswordField'], 'String');
            }
            if (data.hasOwnProperty('LoginUserNameField')) {
                obj['LoginUserNameField'] = ApiClient.convertToType(data['LoginUserNameField'], 'String');
            }
            if (data.hasOwnProperty('SignatureHField')) {
                obj['SignatureHField'] = ApiClient.convertToType(data['SignatureHField'], 'Number');
            }
            if (data.hasOwnProperty('SignatureImageField')) {
                obj['SignatureImageField'] = ApiClient.convertToType(data['SignatureImageField'], 'String');
            }
            if (data.hasOwnProperty('SignatureImageIncludeBorderField')) {
                obj['SignatureImageIncludeBorderField'] = ApiClient.convertToType(data['SignatureImageIncludeBorderField'], 'Boolean');
            }
            if (data.hasOwnProperty('SignatureImageIncludeReasonField')) {
                obj['SignatureImageIncludeReasonField'] = ApiClient.convertToType(data['SignatureImageIncludeReasonField'], 'Boolean');
            }
            if (data.hasOwnProperty('SignatureImageIncludeSignedByField')) {
                obj['SignatureImageIncludeSignedByField'] = ApiClient.convertToType(data['SignatureImageIncludeSignedByField'], 'Boolean');
            }
            if (data.hasOwnProperty('SignatureImageIncludeSignedDateField')) {
                obj['SignatureImageIncludeSignedDateField'] = ApiClient.convertToType(data['SignatureImageIncludeSignedDateField'], 'Boolean');
            }
            if (data.hasOwnProperty('SignatureImageTypeField')) {
                obj['SignatureImageTypeField'] = ApiClient.convertToType(data['SignatureImageTypeField'], 'Number');
            }
            if (data.hasOwnProperty('SignaturePageField')) {
                obj['SignaturePageField'] = ApiClient.convertToType(data['SignaturePageField'], 'Number');
            }
            if (data.hasOwnProperty('SignatureWField')) {
                obj['SignatureWField'] = ApiClient.convertToType(data['SignatureWField'], 'Number');
            }
            if (data.hasOwnProperty('SignatureXField')) {
                obj['SignatureXField'] = ApiClient.convertToType(data['SignatureXField'], 'Number');
            }
            if (data.hasOwnProperty('SignatureYField')) {
                obj['SignatureYField'] = ApiClient.convertToType(data['SignatureYField'], 'Number');
            }
            if (data.hasOwnProperty('SignerEmailField')) {
                obj['SignerEmailField'] = ApiClient.convertToType(data['SignerEmailField'], 'String');
            }
            if (data.hasOwnProperty('SignerFullNameField')) {
                obj['SignerFullNameField'] = ApiClient.convertToType(data['SignerFullNameField'], 'String');
            }
            if (data.hasOwnProperty('SignerIdentificationNumberField')) {
                obj['SignerIdentificationNumberField'] = ApiClient.convertToType(data['SignerIdentificationNumberField'], 'String');
            }
            if (data.hasOwnProperty('SignerLocationField')) {
                obj['SignerLocationField'] = ApiClient.convertToType(data['SignerLocationField'], 'String');
            }
            if (data.hasOwnProperty('SignerMobileNumberField')) {
                obj['SignerMobileNumberField'] = ApiClient.convertToType(data['SignerMobileNumberField'], 'String');
            }
            if (data.hasOwnProperty('SignerReasonField')) {
                obj['SignerReasonField'] = ApiClient.convertToType(data['SignerReasonField'], 'String');
            }
            if (data.hasOwnProperty('SignerTrustOriginField')) {
                obj['SignerTrustOriginField'] = ApiClient.convertToType(data['SignerTrustOriginField'], 'String');
            }
            if (data.hasOwnProperty('SignerTrustReferenceField')) {
                obj['SignerTrustReferenceField'] = ApiClient.convertToType(data['SignerTrustReferenceField'], 'String');
            }
            if (data.hasOwnProperty('TextFieldsListField')) {
                obj['TextFieldsListField'] = ApiClient.convertToType(data['TextFieldsListField'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} CheckboxFieldsListField
 */
SigningCeremonyV2Request.prototype['CheckboxFieldsListField'] = undefined;

/**
 * @member {String} DocField
 */
SigningCeremonyV2Request.prototype['DocField'] = undefined;

/**
 * @member {String} DocNameField
 */
SigningCeremonyV2Request.prototype['DocNameField'] = undefined;

/**
 * @member {Array.<Object>} InitialFieldsListField
 */
SigningCeremonyV2Request.prototype['InitialFieldsListField'] = undefined;

/**
 * @member {String} LoginPasswordField
 */
SigningCeremonyV2Request.prototype['LoginPasswordField'] = undefined;

/**
 * @member {String} LoginUserNameField
 */
SigningCeremonyV2Request.prototype['LoginUserNameField'] = undefined;

/**
 * @member {Number} SignatureHField
 */
SigningCeremonyV2Request.prototype['SignatureHField'] = undefined;

/**
 * @member {String} SignatureImageField
 */
SigningCeremonyV2Request.prototype['SignatureImageField'] = undefined;

/**
 * @member {Boolean} SignatureImageIncludeBorderField
 */
SigningCeremonyV2Request.prototype['SignatureImageIncludeBorderField'] = undefined;

/**
 * @member {Boolean} SignatureImageIncludeReasonField
 */
SigningCeremonyV2Request.prototype['SignatureImageIncludeReasonField'] = undefined;

/**
 * @member {Boolean} SignatureImageIncludeSignedByField
 */
SigningCeremonyV2Request.prototype['SignatureImageIncludeSignedByField'] = undefined;

/**
 * @member {Boolean} SignatureImageIncludeSignedDateField
 */
SigningCeremonyV2Request.prototype['SignatureImageIncludeSignedDateField'] = undefined;

/**
 * @member {Number} SignatureImageTypeField
 */
SigningCeremonyV2Request.prototype['SignatureImageTypeField'] = undefined;

/**
 * @member {Number} SignaturePageField
 */
SigningCeremonyV2Request.prototype['SignaturePageField'] = undefined;

/**
 * @member {Number} SignatureWField
 */
SigningCeremonyV2Request.prototype['SignatureWField'] = undefined;

/**
 * @member {Number} SignatureXField
 */
SigningCeremonyV2Request.prototype['SignatureXField'] = undefined;

/**
 * @member {Number} SignatureYField
 */
SigningCeremonyV2Request.prototype['SignatureYField'] = undefined;

/**
 * @member {String} SignerEmailField
 */
SigningCeremonyV2Request.prototype['SignerEmailField'] = undefined;

/**
 * @member {String} SignerFullNameField
 */
SigningCeremonyV2Request.prototype['SignerFullNameField'] = undefined;

/**
 * @member {String} SignerIdentificationNumberField
 */
SigningCeremonyV2Request.prototype['SignerIdentificationNumberField'] = undefined;

/**
 * @member {String} SignerLocationField
 */
SigningCeremonyV2Request.prototype['SignerLocationField'] = undefined;

/**
 * @member {String} SignerMobileNumberField
 */
SigningCeremonyV2Request.prototype['SignerMobileNumberField'] = undefined;

/**
 * @member {String} SignerReasonField
 */
SigningCeremonyV2Request.prototype['SignerReasonField'] = undefined;

/**
 * @member {String} SignerTrustOriginField
 */
SigningCeremonyV2Request.prototype['SignerTrustOriginField'] = undefined;

/**
 * @member {String} SignerTrustReferenceField
 */
SigningCeremonyV2Request.prototype['SignerTrustReferenceField'] = undefined;

/**
 * @member {Array.<Object>} TextFieldsListField
 */
SigningCeremonyV2Request.prototype['TextFieldsListField'] = undefined;






export default SigningCeremonyV2Request;

