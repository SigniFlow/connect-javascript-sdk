# SigniFlowConnect.AuthenticationApi

All URIs are relative to *https://server-url/API/SignFlowAPIServiceRest.svc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthenticationApi.md#login) | **POST** /Login | Login
[**postLogout**](AuthenticationApi.md#postLogout) | **POST** /Logout | Logout
[**postTokenExtend**](AuthenticationApi.md#postTokenExtend) | **POST** /TokenExtend | Token Extend
[**postTokenValidate**](AuthenticationApi.md#postTokenValidate) | **POST** /TokenValidate | Token Validate



## login

> LoginResponse login(contentType, loginRequest)

Login

#### Generates a API Token for the User

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.AuthenticationApi();
let contentType = "'application/json'"; // String | 
let loginRequest = {"UserNameField":"email@domain.com","PasswordField":"P@ssword"}; // LoginRequest | ##### Login Request Model
apiInstance.login(contentType, loginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **loginRequest** | [**LoginRequest**](LoginRequest.md)| ##### Login Request Model | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postLogout

> LogoutResponse postLogout(contentType, opts)

Logout

#### Used to log out a user from SigniFlow.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.AuthenticationApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'logoutRequest': {"TokenField":"aaa111"} // LogoutRequest | ##### Logout Request Model
};
apiInstance.postLogout(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **logoutRequest** | [**LogoutRequest**](LogoutRequest.md)| ##### Logout Request Model | [optional] 

### Return type

[**LogoutResponse**](LogoutResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postTokenExtend

> TokenExtendResponse postTokenExtend(contentType, opts)

Token Extend

#### Used to extend the period of time in which the session token is valid.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.AuthenticationApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'tokenExtendRequest': {"TokenField":{"TokenExpiryField":"2019-08-24T14:15:22Z","TokenField":"aaa111"},"TokenValidityField":0} // TokenExtendRequest | ##### Token Extend Request Model
};
apiInstance.postTokenExtend(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **tokenExtendRequest** | [**TokenExtendRequest**](TokenExtendRequest.md)| ##### Token Extend Request Model | [optional] 

### Return type

[**TokenExtendResponse**](TokenExtendResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postTokenValidate

> TokenValidateResponse postTokenValidate(contentType, opts)

Token Validate

#### Used to validate the user&#39;s session token.

### Example

```javascript
import SigniFlowConnect from 'SigniFlow-connect';

let apiInstance = new SigniFlowConnect.AuthenticationApi();
let contentType = "'application/json'"; // String | 
let opts = {
  'tokenValidateRequest': {"0":"string"} // TokenValidateRequest | ##### Token Validate Request Model
};
apiInstance.postTokenValidate(contentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/json&#39;]
 **tokenValidateRequest** | [**TokenValidateRequest**](TokenValidateRequest.md)| ##### Token Validate Request Model | [optional] 

### Return type

[**TokenValidateResponse**](TokenValidateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

