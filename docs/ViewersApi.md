# SigniFlowConnect.ViewersApi

All URIs are relative to *https://server-url/API/SignFlowAPIServiceRest.svc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postGetDocLink**](ViewersApi.md#postGetDocLink) | **POST** /GetDocLink | Get Document Link
[**postGetDocumentPrepperLink**](ViewersApi.md#postGetDocumentPrepperLink) | **POST** /GetDocumentPrepperLink | Get Document Prepper Link



## postGetDocLink

> GetDocLinkResponse postGetDocLink(contentType, opts)

Get Document Link

#### Used to get the document link that will be used to sign a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.ViewersApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getDocLinkRequest': {"DocIDField":"string","EmailField":"email@domain.com","ReturnURLField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetDocLinkRequest | ##### Get Document Link Request Model
};
apiInstance.postGetDocLink(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getDocLinkRequest** | [**GetDocLinkRequest**](GetDocLinkRequest.md)| ##### Get Document Link Request Model | [optional] 

### Return type

[**GetDocLinkResponse**](GetDocLinkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetDocumentPrepperLink

> GetDocumentPrepperLinkResponse postGetDocumentPrepperLink(contentType, opts)

Get Document Prepper Link

#### Used to get a document prepper link (url).

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.ViewersApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getDocumentPrepperLinkRequest': {"DocIDField":"string","EmailSettingField":0,"ReturnURLField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetDocumentPrepperLinkRequest | ##### Get Document Prepper Link Request Model
};
apiInstance.postGetDocumentPrepperLink(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getDocumentPrepperLinkRequest** | [**GetDocumentPrepperLinkRequest**](GetDocumentPrepperLinkRequest.md)| ##### Get Document Prepper Link Request Model | [optional] 

### Return type

[**GetDocumentPrepperLinkResponse**](GetDocumentPrepperLinkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

