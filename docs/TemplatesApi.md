# SigniFlowConnect.TemplatesApi

All URIs are relative to *https://server-url/API/SignFlowAPIServiceRest.svc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postApplyPrepperTemplate**](TemplatesApi.md#postApplyPrepperTemplate) | **POST** /ApplyPrepperTemplate | Apply a Prepper template
[**postGetDocumentTagFieldBoxPosition**](TemplatesApi.md#postGetDocumentTagFieldBoxPosition) | **POST** /GetDocumentTagFieldBoxPosition | Get Document Tag Field Box Position
[**postGetDocumentTagFieldPosition**](TemplatesApi.md#postGetDocumentTagFieldPosition) | **POST** /GetDocumentTagFieldPosition | Get Document Tag Field Position
[**postGetPrepperTemplate**](TemplatesApi.md#postGetPrepperTemplate) | **POST** /GetPrepperTemplate | Get Prepper Template
[**postGetPrepperTemplateList**](TemplatesApi.md#postGetPrepperTemplateList) | **POST** /GetPrepperTemplateList | Get Prepper Template List



## postApplyPrepperTemplate

> ApplyPrepperTemplateResponse postApplyPrepperTemplate(contentType, opts)

Apply a Prepper template

#### Used when applying a templaet to a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.TemplatesApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'applyPrepperTemplateRequest': {"DocIDField":2147483647,"PrepperTemplateIDField":21344,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // ApplyPrepperTemplateRequest | ##### Apply A Prepper Template Request Model
};
apiInstance.postApplyPrepperTemplate(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **applyPrepperTemplateRequest** | [**ApplyPrepperTemplateRequest**](ApplyPrepperTemplateRequest.md)| ##### Apply A Prepper Template Request Model | [optional] 

### Return type

[**ApplyPrepperTemplateResponse**](ApplyPrepperTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetDocumentTagFieldBoxPosition

> GetDocumentTagFieldBoxPositionResponse postGetDocumentTagFieldBoxPosition(contentType, opts)

Get Document Tag Field Box Position

#### Used to get the tag field box position on a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.TemplatesApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getDocumentTagFieldBoxPositionRequest': {"DocIDField":0,"TagNameField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetDocumentTagFieldBoxPositionRequest | ##### Get Document Tag Field Box Position Request Model
};
apiInstance.postGetDocumentTagFieldBoxPosition(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getDocumentTagFieldBoxPositionRequest** | [**GetDocumentTagFieldBoxPositionRequest**](GetDocumentTagFieldBoxPositionRequest.md)| ##### Get Document Tag Field Box Position Request Model | [optional] 

### Return type

[**GetDocumentTagFieldBoxPositionResponse**](GetDocumentTagFieldBoxPositionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetDocumentTagFieldPosition

> GetDocumentTagFieldPositionResponse postGetDocumentTagFieldPosition(contentType, opts)

Get Document Tag Field Position

#### Used to get the tag position on a document.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.TemplatesApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getDocumentTagFieldPositionRequest': {"DocIDField":0,"TagNameField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetDocumentTagFieldPositionRequest | ##### Get Document Tag Field Position Request Model
};
apiInstance.postGetDocumentTagFieldPosition(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getDocumentTagFieldPositionRequest** | [**GetDocumentTagFieldPositionRequest**](GetDocumentTagFieldPositionRequest.md)| ##### Get Document Tag Field Position Request Model | [optional] 

### Return type

[**GetDocumentTagFieldPositionResponse**](GetDocumentTagFieldPositionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetPrepperTemplate

> GetPrepperTemplateResponse postGetPrepperTemplate(contentType, opts)

Get Prepper Template

#### Used to get a document template.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.TemplatesApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getPrepperTemplateRequest': {"DocIDField":0,"PrepperTemplateIDField":0,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetPrepperTemplateRequest | ##### Get Prepper Template Request Model
};
apiInstance.postGetPrepperTemplate(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getPrepperTemplateRequest** | [**GetPrepperTemplateRequest**](GetPrepperTemplateRequest.md)| ##### Get Prepper Template Request Model | [optional] 

### Return type

[**GetPrepperTemplateResponse**](GetPrepperTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetPrepperTemplateList

> GetPrepperTemplateListResponse postGetPrepperTemplateList(contentType, opts)

Get Prepper Template List

#### Used to get a list of document templates.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.TemplatesApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'getPrepperTemplateListRequest': {"TemplateFolderField":0,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // GetPrepperTemplateListRequest | ##### Get Prepper Template List Request Model
};
apiInstance.postGetPrepperTemplateList(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **getPrepperTemplateListRequest** | [**GetPrepperTemplateListRequest**](GetPrepperTemplateListRequest.md)| ##### Get Prepper Template List Request Model | [optional] 

### Return type

[**GetPrepperTemplateListResponse**](GetPrepperTemplateListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

