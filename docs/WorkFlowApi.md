# SigniFlowConnect.WorkFlowApi

All URIs are relative to *https://server-url/API/SignFlowAPIServiceRest.svc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkflow**](WorkFlowApi.md#createWorkflow) | **POST** /CreateWorkflow | Create Workflow
[**getDocument**](WorkFlowApi.md#getDocument) | **POST** /GetDoc | Get Document
[**postAddWorkflowStep**](WorkFlowApi.md#postAddWorkflowStep) | **POST** /AddWorkflowStepV2 | Add a Workflow step
[**postCancelFlow**](WorkFlowApi.md#postCancelFlow) | **POST** /CancelFlow | Cancel Flow
[**postDeleteDoc**](WorkFlowApi.md#postDeleteDoc) | **POST** /DeleteDoc | Delete Document
[**postDocPrepperAddField**](WorkFlowApi.md#postDocPrepperAddField) | **POST** /DocPrepperAddFieldsFlowID | Document Prepper Add Fields
[**postDocPrepperAdvancedFields**](WorkFlowApi.md#postDocPrepperAdvancedFields) | **POST** /DocPrepperAdvancedFields | Document Prepper Add Advanced Fields
[**postFullWorkflow**](WorkFlowApi.md#postFullWorkflow) | **POST** /FullWorkflow | FullWorkflow
[**postGetDocStatus**](WorkFlowApi.md#postGetDocStatus) | **POST** /GetDocStatus | Get Document Status
[**postInitiateFlow**](WorkFlowApi.md#postInitiateFlow) | **POST** /InitiateFlow | Initiate Flow
[**postInitiateFlowNoEmail**](WorkFlowApi.md#postInitiateFlowNoEmail) | **POST** /InitiateFlow_No_Email | Initiate Flow No Email
[**postInitiateFlowNoInitialEmail**](WorkFlowApi.md#postInitiateFlowNoInitialEmail) | **POST** /InitiateFlow_No_Initial_Email | Initiate Flow No Initial Email
[**postWorkflowSign**](WorkFlowApi.md#postWorkflowSign) | **POST** /WorkflowSign | Workflow Sign



## createWorkflow

> CreateWorkflowResponse createWorkflow(contentType, createWorkflowRequest)

Create Workflow

#### Used to start a new workflow by passing a Base64 encoded document to SigniFlow

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let createWorkflowRequest = {"AdditionalDataField":"\"\"","AutoExpireField":0,"AutoRemindField":0,"DocField":"String content","DocNameField":"String content","DueDateField":"2019-08-24T14:15:22Z","ExtensionField":0,"MessageField":"String content","PriorityField":0,"SLAField":0,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}}; // CreateWorkflowRequest | ##### Create Workflow Request Model
apiInstance.createWorkflow(contentType, createWorkflowRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **createWorkflowRequest** | [**CreateWorkflowRequest**](CreateWorkflowRequest.md)| ##### Create Workflow Request Model | 

### Return type

[**CreateWorkflowResponse**](CreateWorkflowResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDocument

> GetDocumentResponse getDocument(contentType, opts)

Get Document

#### Used to download a document from SigniFlow.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getDocumentRequest': {"DocIDField":2147483647,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetDocumentRequest | ##### Get Document Request Model
};
apiInstance.getDocument(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getDocumentRequest** | [**GetDocumentRequest**](GetDocumentRequest.md)| ##### Get Document Request Model | [optional] 

### Return type

[**GetDocumentResponse**](GetDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAddWorkflowStep

> AddWokflowStepV2Response postAddWorkflowStep(contentType, opts)

Add a Workflow step

#### Used to add a step to a document Workflow process.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'addWorkflowStepV2Request': {"ActionField":0,"CellField":"string","DocIDField":"2147483647","EmailField":"email@domain.com","FirstNameField":"John","LanguageCodeField":"ENG","LastNameField":"Smith","ProxyAllowedField":0,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // AddWorkflowStepV2Request | ##### Add A Workflow Step Request Model
};
apiInstance.postAddWorkflowStep(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **addWorkflowStepV2Request** | [**AddWorkflowStepV2Request**](AddWorkflowStepV2Request.md)| ##### Add A Workflow Step Request Model | [optional] 

### Return type

[**AddWokflowStepV2Response**](AddWokflowStepV2Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCancelFlow

> CancelFlowResponse postCancelFlow(contentType, opts)

Cancel Flow

#### Used to cancel a document workflow.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'cancelFlowRequest': {"DocIDField":"2147483647","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // CancelFlowRequest | ##### Cancel Flow Request Model
};
apiInstance.postCancelFlow(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **cancelFlowRequest** | [**CancelFlowRequest**](CancelFlowRequest.md)| ##### Cancel Flow Request Model | [optional] 

### Return type

[**CancelFlowResponse**](CancelFlowResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postDeleteDoc

> DeleteDocResponse postDeleteDoc(contentType, opts)

Delete Document

#### This is used to delete a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'deleteDocRequest': {"DocIDField":2147483647,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // DeleteDocRequest | ##### Delete Document Request Model
};
apiInstance.postDeleteDoc(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **deleteDocRequest** | [**DeleteDocRequest**](DeleteDocRequest.md)| ##### Delete Document Request Model | [optional] 

### Return type

[**DeleteDocResponse**](DeleteDocResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postDocPrepperAddField

> DocPrepperAddFieldsFlowIDResponse postDocPrepperAddField(contentType, opts)

Document Prepper Add Fields

#### Used to add fields to a document using the user&#39;s FlowID.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'docPrepperAddFieldsFlowIDRequest': {"DocFieldTypeField":0,"DocIDField":12344,"FlowIDField":11111,"HeightField":"25","WidthField":"20","IsInvisibleField":true,"LinkToField":"string","PageNumberField":2,"NameField":"string","UserEmailField":"email@domain.com","XCoordinateField":"50","YCoordinateField":"150","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // DocPrepperAddFieldsFlowIDRequest | ##### Document Prepper Add Fields Request Model
};
apiInstance.postDocPrepperAddField(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **docPrepperAddFieldsFlowIDRequest** | [**DocPrepperAddFieldsFlowIDRequest**](DocPrepperAddFieldsFlowIDRequest.md)| ##### Document Prepper Add Fields Request Model | [optional] 

### Return type

[**DocPrepperAddFieldsFlowIDResponse**](DocPrepperAddFieldsFlowIDResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postDocPrepperAdvancedFields

> DocPrepperAddAdvancedFieldsResponse postDocPrepperAdvancedFields(contentType, opts)

Document Prepper Add Advanced Fields

#### Used to add advanced fields to a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'docPrepperAddAdvancedFieldsRequest': {"FieldInfoListField":[{"AdvancedFieldTypeField":0,"DocIDField":2147483647,"FieldOptionsListField":[{"LinkedValueField":"string","MaxField":5,"MinField":2,"ValueField":"string"}],"FlowIDField":11111,"FontFamilyField":"Arial","FontSizeField":12,"HeightField":"30","WidthField":"15","LinkToField":"string","NameField":"Text Field","PageNumberField":2,"SearchableField":true,"UserEmailField":"John@domain.com","ValueField":"string","XCoordinateField":"60","YCoordinateField":"120"}],"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // DocPrepperAddAdvancedFieldsRequest | ##### Document Prepper Add Advanced Fields Request Model
};
apiInstance.postDocPrepperAdvancedFields(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **docPrepperAddAdvancedFieldsRequest** | [**DocPrepperAddAdvancedFieldsRequest**](DocPrepperAddAdvancedFieldsRequest.md)| ##### Document Prepper Add Advanced Fields Request Model | [optional] 

### Return type

[**DocPrepperAddAdvancedFieldsResponse**](DocPrepperAddAdvancedFieldsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postFullWorkflow

> FullWorkflowResponse postFullWorkflow(contentType, opts)

FullWorkflow

#### Used to create a fullworkflow for a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'fullWorkflowRequest': {"AdditionalDataField":"string","AutoRemindField":0,"CustomMessageField":"A message with things.","DocField":"string","DocNameField":"Document 1","DueDateField":"02/02/2021","ExtensionField":0,"FlattenDocumentField":true,"KeepContentSecurityField":true,"KeepCustomPropertiesField":true,"KeepXMPMetadataField":true,"PortfolioInformationField":{"CreatePortfolioField":true,"LinkToPortfolioField":true,"PortfolioIDField":11112,"PortfolioNameField":"Portfolio 1"},"PriorityField":0,"SLAField":0,"SendFirstEmailField":true,"SendWorkflowEmailsField":true,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"},"WorkflowUsersListField":[{"ActionField":0,"AllowProxyField":0,"AutoSignField":true,"EmailAddressField":"email@domain.com","GroupStepField":{"GroupMembersField":[{"LanguageCodeField":"string","UserEmailField":"string","UserFullNameField":"string","UserMobileNumberField":"string"}],"GroupNameField":"Managers","RequiredNumberOfSignaturesField":3},"LanguageCodeField":"ENG","LatitudeField":"string","LongitudeField":"string","MobileNumberField":"078 222 2222","PreloadedFaceToFaceSignersField":[{}],"SignReasonField":"Because yes","SignerPasswordField":"P@ssw0rd","UserFirstNameField":"John","UserFullNameField":"John Smith","UserLastNameField":"Smith","WorkflowUserFieldsField":[{"FieldTypeField":7,"FontFamilyField":"Arial","FontSizeField":15,"GroupUserNumberField":5,"HeightField":"15","IsInvisibleField":true,"PageNumberField":2,"TagNameField":"string","ValueField":"string","WidthField":"25","XCoordinateField":"60","XOffsetField":15,"YCoordinateField":"150","YOffsetField":20}]}]} // FullWorkflowRequest | ##### FullWorkflow Request Model
};
apiInstance.postFullWorkflow(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **fullWorkflowRequest** | [**FullWorkflowRequest**](FullWorkflowRequest.md)| ##### FullWorkflow Request Model | [optional] 

### Return type

[**FullWorkflowResponse**](FullWorkflowResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetDocStatus

> GetDocStatusResponse postGetDocStatus(contentType, opts)

Get Document Status

#### Used to get the status of the document ex. pending/completed/rejected.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getDocStatusRequest': {"DocIDField":0,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetDocStatusRequest | ##### Get Document Status Request Model
};
apiInstance.postGetDocStatus(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getDocStatusRequest** | [**GetDocStatusRequest**](GetDocStatusRequest.md)| ##### Get Document Status Request Model | [optional] 

### Return type

[**GetDocStatusResponse**](GetDocStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postInitiateFlow

> InitiateFlowResponse postInitiateFlow(contentType, opts)

Initiate Flow

#### Used to initiate aworkflow of a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'initiateFlowRequest': {"DocIDField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // InitiateFlowRequest | ##### Initiate Flow Request Model
};
apiInstance.postInitiateFlow(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **initiateFlowRequest** | [**InitiateFlowRequest**](InitiateFlowRequest.md)| ##### Initiate Flow Request Model | [optional] 

### Return type

[**InitiateFlowResponse**](InitiateFlowResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postInitiateFlowNoEmail

> InitiateFlowNoEmailResponse postInitiateFlowNoEmail(contentType, opts)

Initiate Flow No Email

#### Used to initiate a workflow without sending out emails.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'initiateFlowNoEmailRequest': {"DocIDField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // InitiateFlowNoEmailRequest | ##### Initiate Flow No Email Request Model
};
apiInstance.postInitiateFlowNoEmail(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **initiateFlowNoEmailRequest** | [**InitiateFlowNoEmailRequest**](InitiateFlowNoEmailRequest.md)| ##### Initiate Flow No Email Request Model | [optional] 

### Return type

[**InitiateFlowNoEmailResponse**](InitiateFlowNoEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postInitiateFlowNoInitialEmail

> InitiateFlowNoInitialEmailResponse postInitiateFlowNoInitialEmail(contentType, opts)

Initiate Flow No Initial Email

#### Used to initiate a document workflow without an initial email being sent to the user.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'initiateFlowNoInitialEmailRequest': {"DocIDField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // InitiateFlowNoInitialEmailRequest | ##### Initiate Flow No Initial Email Request Model
};
apiInstance.postInitiateFlowNoInitialEmail(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **initiateFlowNoInitialEmailRequest** | [**InitiateFlowNoInitialEmailRequest**](InitiateFlowNoInitialEmailRequest.md)| ##### Initiate Flow No Initial Email Request Model | [optional] 

### Return type

[**InitiateFlowNoInitialEmailResponse**](InitiateFlowNoInitialEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postWorkflowSign

> WorkflowSignResponse postWorkflowSign(contentType, opts)

Workflow Sign

#### Used to send a request to a user to sign a document workflow.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.WorkFlowApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'workflowSignRequest': {"DocIDField":"string","LatitudeField":"string","LoginPasswordField":"pa$$word","LoginUserNameField":"email@domain.com","LongitudeField":"string","SignReasonField":"string","TimeZoneOffsetField":0,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // WorkflowSignRequest | ##### Workflow Sign Request Model
};
apiInstance.postWorkflowSign(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **workflowSignRequest** | [**WorkflowSignRequest**](WorkflowSignRequest.md)| ##### Workflow Sign Request Model | [optional] 

### Return type

[**WorkflowSignResponse**](WorkflowSignResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

