# SigniFlowConnect.AuditsApi

All URIs are relative to *https://server-url/API/SignFlowAPIServiceRest.svc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postGetAuditDocument**](AuditsApi.md#postGetAuditDocument) | **POST** /GetAuditDocument | Get Audit Document
[**postGetDocumentAudit**](AuditsApi.md#postGetDocumentAudit) | **POST** /GetDocumentAudit | Get Document Audit



## postGetAuditDocument

> GetAuditDocumentResponse postGetAuditDocument(contentType, opts)

Get Audit Document

#### Used to get an audit document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.AuditsApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getAuditDocumentRequest': {"DocIDField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetAuditDocumentRequest | ##### Get Audit Document Request Model
};
apiInstance.postGetAuditDocument(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getAuditDocumentRequest** | [**GetAuditDocumentRequest**](GetAuditDocumentRequest.md)| ##### Get Audit Document Request Model | [optional] 

### Return type

[**GetAuditDocumentResponse**](GetAuditDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetDocumentAudit

> GetDocumentAuditResponse postGetDocumentAudit(contentType, opts)

Get Document Audit

#### Used to get the audit information from a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.AuditsApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getDocumentAuditRequest': {"DocIDField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetDocumentAuditRequest | ##### Get Document Audit Request Model
};
apiInstance.postGetDocumentAudit(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getDocumentAuditRequest** | [**GetDocumentAuditRequest**](GetDocumentAuditRequest.md)| ##### Get Document Audit Request Model | [optional] 

### Return type

[**GetDocumentAuditResponse**](GetDocumentAuditResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

