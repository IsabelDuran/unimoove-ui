# UnimooveApi.AuthenticationApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userLogin**](AuthenticationApi.md#userLogin) | **POST** /authentication/login | Authenticates a user into the system


<a name="userLogin"></a>
# **userLogin**
> LoginResponse userLogin(opts)

Authenticates a user into the system

Logs in a user into the system

### Example
```javascript
var UnimooveApi = require('unimoove_api');

var apiInstance = new UnimooveApi.AuthenticationApi();

var opts = { 
  'body': new UnimooveApi.LoginRequest() // LoginRequest | The user's username and password
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userLogin(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginRequest**](LoginRequest.md)| The user&#39;s username and password | [optional] 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

