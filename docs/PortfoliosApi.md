# SigniFlowConnect.PortfoliosApi

All URIs are relative to *https://server-url/API/SignFlowAPIServiceRest.svc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCreatePortfolio**](PortfoliosApi.md#postCreatePortfolio) | **POST** /CreatePortfolio | Create Portfolio
[**postDownloadPortfolio**](PortfoliosApi.md#postDownloadPortfolio) | **POST** /DownloadPortfolio | Download Portfolio
[**postLinkToPortfolio**](PortfoliosApi.md#postLinkToPortfolio) | **POST** /LinkToPortfolio | Link To Portfolio
[**postSetDocumentOrder**](PortfoliosApi.md#postSetDocumentOrder) | **POST** /SetDocumentOrder | Set Document Order
[**postSharePortfolio**](PortfoliosApi.md#postSharePortfolio) | **POST** /SharePortfolio | Share Portfolio
[**postSharePortfolioNoEmail**](PortfoliosApi.md#postSharePortfolioNoEmail) | **POST** /SharePortfolio_No_Email | Share Portfolio No Email



## postCreatePortfolio

> CreatePortfolioResponse postCreatePortfolio(contentType, opts)

Create Portfolio

#### Used to create a portfolio to group documents.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.PortfoliosApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'createPortfolioRequest': {"DocIDField":2147483647,"PortfolioNameField":"Application Portfolio","TokenIDField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // CreatePortfolioRequest | ##### Create Portfolio Request Model
};
apiInstance.postCreatePortfolio(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **createPortfolioRequest** | [**CreatePortfolioRequest**](CreatePortfolioRequest.md)| ##### Create Portfolio Request Model | [optional] 

### Return type

[**CreatePortfolioResponse**](CreatePortfolioResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postDownloadPortfolio

> DownloadPortfolioResponse postDownloadPortfolio(contentType, opts)

Download Portfolio

#### Used to return a string that is then used to download a portfolio.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.PortfoliosApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'downloadPortfolioRequest': {"PortfolioIDField":111112,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // DownloadPortfolioRequest | ##### Download Portfolio Request Model
};
apiInstance.postDownloadPortfolio(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **downloadPortfolioRequest** | [**DownloadPortfolioRequest**](DownloadPortfolioRequest.md)| ##### Download Portfolio Request Model | [optional] 

### Return type

[**DownloadPortfolioResponse**](DownloadPortfolioResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postLinkToPortfolio

> LinkToPortfolioResponse postLinkToPortfolio(contentType, opts)

Link To Portfolio

#### Used to get the url link to a portfolio.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.PortfoliosApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'linkToPortfolioRequest': {"DocIDField":"string","DocumentNameField":"string","PortfolioIDField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // LinkToPortfolioRequest | ##### Link To Portfolio Request Model
};
apiInstance.postLinkToPortfolio(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **linkToPortfolioRequest** | [**LinkToPortfolioRequest**](LinkToPortfolioRequest.md)| ##### Link To Portfolio Request Model | [optional] 

### Return type

[**LinkToPortfolioResponse**](LinkToPortfolioResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSetDocumentOrder

> SetDocumentOrderResponse postSetDocumentOrder(contentType, opts)

Set Document Order

#### Used to set the order of documents that needs to be signed.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.PortfoliosApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'setDocumentOrderRequest': {"DocIDField":"string","DocumentOrderField":"string","TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"}} // SetDocumentOrderRequest | ##### Set Document Order Request Model
};
apiInstance.postSetDocumentOrder(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **setDocumentOrderRequest** | [**SetDocumentOrderRequest**](SetDocumentOrderRequest.md)| ##### Set Document Order Request Model | [optional] 

### Return type

[**SetDocumentOrderResponse**](SetDocumentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSharePortfolio

> SharePortfolioResponse postSharePortfolio(contentType, opts)

Share Portfolio

#### Used when a user wants to share a portfolio with someone else.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.PortfoliosApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'sharePortfolioRequest': {"AccessLevelField":0,"PortfolioIDField":"string","ShareOptionField":0,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"},"UniqueIDField":"string"} // SharePortfolioRequest | ##### Share Portfolio Request Model
};
apiInstance.postSharePortfolio(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **sharePortfolioRequest** | [**SharePortfolioRequest**](SharePortfolioRequest.md)| ##### Share Portfolio Request Model | [optional] 

### Return type

[**SharePortfolioResponse**](SharePortfolioResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSharePortfolioNoEmail

> SharePortfolioNoEmailResponse postSharePortfolioNoEmail(contentType, opts)

Share Portfolio No Email

#### Used when a user wants to share a portfolio without sending out an email.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.PortfoliosApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'sharePortfolioNoEmailRequest': {"AccessLevelField":0,"PortfolioIDField":"string","ShareOptionField":0,"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"},"UniqueIDField":"string"} // SharePortfolioNoEmailRequest | ##### Share Portfolio No Email Request Model
};
apiInstance.postSharePortfolioNoEmail(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **sharePortfolioNoEmailRequest** | [**SharePortfolioNoEmailRequest**](SharePortfolioNoEmailRequest.md)| ##### Share Portfolio No Email Request Model | [optional] 

### Return type

[**SharePortfolioNoEmailResponse**](SharePortfolioNoEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

