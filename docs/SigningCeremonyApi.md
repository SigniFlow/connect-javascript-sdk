# SigniFlowConnect.SigningCeremonyApi

All URIs are relative to *https://server-url/API/SignFlowAPIServiceRest.svc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postMultipleSignersSigningCeremony**](SigningCeremonyApi.md#postMultipleSignersSigningCeremony) | **POST** /MultipleSignersSigningCeremony | Multiple Signers Signing Ceremony
[**postSigningCeremonyV2**](SigningCeremonyApi.md#postSigningCeremonyV2) | **POST** /SigningCeremonyV2 | Signing Ceremony V2



## postMultipleSignersSigningCeremony

> MultipleSignersSigningCeremonyResponse postMultipleSignersSigningCeremony(contentType, opts)

Multiple Signers Signing Ceremony

#### Used when there are multiple signers on a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.SigningCeremonyApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'multipleSignersSigningCeremonyRequest': {"DocField":"string","DocNameField":"string","LoginPasswordField":"12345","LoginUserNameField":"John@gmail.com","SignerListField":[{"SignatureHField":0,"SignatureImageField":"string","SignatureImageIncludeBorderField":true,"SignatureImageIncludeReasonField":true,"SignatureImageIncludeSignedByField":true,"SignatureImageIncludeSignedDateField":true,"SignatureImageTypeField":0,"SignaturePageField":0,"SignatureWField":0,"SignatureXField":0,"SignatureYField":0,"SignerEmailField":"string","SignerFullNameField":"string","SignerIndentificationNumberField":"string","SignerLocationField":"string","SignerMobileNumberField":"string","SignerReasonField":"string","SignerTrustOriginField":"string","SignerTrustReferenceField":"string"}]} // MultipleSignersSigningCeremonyRequest | ##### Multiple Signers Signing Ceremony Request Model
};
apiInstance.postMultipleSignersSigningCeremony(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **multipleSignersSigningCeremonyRequest** | [**MultipleSignersSigningCeremonyRequest**](MultipleSignersSigningCeremonyRequest.md)| ##### Multiple Signers Signing Ceremony Request Model | [optional] 

### Return type

[**MultipleSignersSigningCeremonyResponse**](MultipleSignersSigningCeremonyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSigningCeremonyV2

> SigningCeremonyV2Response postSigningCeremonyV2(contentType, opts)

Signing Ceremony V2

#### Used to initiate the signing process of a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.SigningCeremonyApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'signingCeremonyV2Request': {"CheckboxFieldsListField":[{"CheckboxHField":0,"CheckboxPageField":0,"CheckboxWField":0,"CheckboxXField":0,"CheckboxYField":0,"IsCheckedField":true}],"DocField":"string","DocNameField":"string","InitialFieldsListField":[{"InitialHField":0,"InitialImageField":"string","InitialImageTypeField":0,"InitialPageField":0,"InitialWField":0,"InitialXField":0,"InitialYField":0}],"LoginPasswordField":"string","LoginUserNameField":"string","SignatureHField":0,"SignatureImageField":"string","SignatureImageIncludeBorderField":true,"SignatureImageIncludeReasonField":true,"SignatureImageIncludeSignedByField":true,"SignatureImageIncludeSignedDateField":true,"SignatureImageTypeField":0,"SignaturePageField":0,"SignatureWField":0,"SignatureXField":0,"SignatureYField":0,"SignerEmailField":"string","SignerFullNameField":"string","SignerIdentificationNumberField":"string","SignerLocationField":"string","SignerMobileNumberField":"string","SignerReasonField":"string","SignerTrustOriginField":"string","SignerTrustReferenceField":"string","TextFieldsListField":[{"TextFieldHField":0,"TextFieldPageField":0,"TextFieldValueField":"string","TextFieldWField":0,"TextFieldXField":0,"TextFieldYField":0}]} // SigningCeremonyV2Request | ##### Signing Ceremony V2 Request Model
};
apiInstance.postSigningCeremonyV2(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **signingCeremonyV2Request** | [**SigningCeremonyV2Request**](SigningCeremonyV2Request.md)| ##### Signing Ceremony V2 Request Model | [optional] 

### Return type

[**SigningCeremonyV2Response**](SigningCeremonyV2Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

