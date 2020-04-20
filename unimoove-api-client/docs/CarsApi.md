# UnimooveApi.CarsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCar**](CarsApi.md#addCar) | **POST** /users/{username}/cars | Adds a car
[**deleteCar**](CarsApi.md#deleteCar) | **DELETE** /users/{username}/cars/{plate} | Deletes a car
[**modifyCarBrand**](CarsApi.md#modifyCarBrand) | **PUT** /users/{username}/cars/{plate}/brand | Modifies the car&#39;s brand
[**modifyCarModel**](CarsApi.md#modifyCarModel) | **PUT** /users/{username}/cars/{plate}/model | Modifies the car&#39;s model
[**searchCar**](CarsApi.md#searchCar) | **GET** /users/{username}/cars | Get cars from user


<a name="addCar"></a>
# **addCar**
> addCar(username, opts)

Adds a car

Adds a new car to the user

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.CarsApi();

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.CarCreationRequest() // CarCreationRequest | Car to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCar(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **body** | [**CarCreationRequest**](CarCreationRequest.md)| Car to add | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="deleteCar"></a>
# **deleteCar**
> deleteCar(plate, username)

Deletes a car

Deletes the car linked to a user

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.CarsApi();

var plate = "plate_example"; // String | By passing in the appropriate car plate, you can delete the car.

var username = "username_example"; // String | username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCar(plate, username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plate** | **String**| By passing in the appropriate car plate, you can delete the car. | 
 **username** | **String**| username | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: *_/_*

<a name="modifyCarBrand"></a>
# **modifyCarBrand**
> modifyCarBrand(plate, username, opts)

Modifies the car&#39;s brand

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.CarsApi();

var plate = "plate_example"; // String | By passing in the appropriate car plate, you can modify the car.

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.CarBrandChangeRequest() // CarBrandChangeRequest | The car's new brand
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyCarBrand(plate, username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plate** | **String**| By passing in the appropriate car plate, you can modify the car. | 
 **username** | **String**| username | 
 **body** | [**CarBrandChangeRequest**](CarBrandChangeRequest.md)| The car&#39;s new brand | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyCarModel"></a>
# **modifyCarModel**
> modifyCarModel(plate, username, opts)

Modifies the car&#39;s model

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.CarsApi();

var plate = "plate_example"; // String | By passing in the appropriate car plate, you can modify the car.

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.CarModelChangeRequest() // CarModelChangeRequest | The car's new model
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyCarModel(plate, username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plate** | **String**| By passing in the appropriate car plate, you can modify the car. | 
 **username** | **String**| username | 
 **body** | [**CarModelChangeRequest**](CarModelChangeRequest.md)| The car&#39;s new model | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="searchCar"></a>
# **searchCar**
> [CarResponse] searchCar(username)

Get cars from user

Get cars from user

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.CarsApi();

var username = "username_example"; // String | username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchCar(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 

### Return type

[**[CarResponse]**](CarResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

