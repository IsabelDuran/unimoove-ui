# UnimooveApi.PlacesApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPlace**](PlacesApi.md#addPlace) | **POST** /places | Adds a place
[**deletePLace**](PlacesApi.md#deletePLace) | **DELETE** /places/{idPlace} | Deletes a place
[**getPlace**](PlacesApi.md#getPlace) | **GET** /places/{idPlace} | Finds a place
[**modifyPlaceCategory**](PlacesApi.md#modifyPlaceCategory) | **PUT** /places/{idPlace}/category | Modifies the place&#39;s category
[**modifyPlaceId**](PlacesApi.md#modifyPlaceId) | **PUT** /places/{idPlace}/idPlace | Modifies the place&#39;s ID
[**modifyPlaceName**](PlacesApi.md#modifyPlaceName) | **PUT** /places/{idPlace}/name | Modifies the places&#39;s name
[**searchPlace**](PlacesApi.md#searchPlace) | **GET** /places | Searches for a place


<a name="addPlace"></a>
# **addPlace**
> addPlace(opts)

Adds a place

Adds a place to the system

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.PlacesApi();

var opts = { 
  'body': new UnimooveApi.PlaceCreationRequest() // PlaceCreationRequest | Place to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPlace(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PlaceCreationRequest**](PlaceCreationRequest.md)| Place to add | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="deletePLace"></a>
# **deletePLace**
> deletePLace(idPlace)

Deletes a place

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.PlacesApi();

var idPlace = "idPlace_example"; // String | By passing in the appropriate place ID, you can delete the place.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePLace(idPlace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPlace** | **String**| By passing in the appropriate place ID, you can delete the place. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: *_/_*

<a name="getPlace"></a>
# **getPlace**
> PlaceResponse getPlace(idPlace)

Finds a place

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.PlacesApi();

var idPlace = "idPlace_example"; // String | By passing in the appropriate place ID, you can get the place.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPlace(idPlace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPlace** | **String**| By passing in the appropriate place ID, you can get the place. | 

### Return type

[**PlaceResponse**](PlaceResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyPlaceCategory"></a>
# **modifyPlaceCategory**
> modifyPlaceCategory(idPlace, opts)

Modifies the place&#39;s category

The place ID for the place you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.PlacesApi();

var idPlace = "idPlace_example"; // String | idPlace

var opts = { 
  'body': new UnimooveApi.PlaceCategoryChangeRequest() // PlaceCategoryChangeRequest | The place's new category
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyPlaceCategory(idPlace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPlace** | **String**| idPlace | 
 **body** | [**PlaceCategoryChangeRequest**](PlaceCategoryChangeRequest.md)| The place&#39;s new category | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyPlaceId"></a>
# **modifyPlaceId**
> modifyPlaceId(idPlace, opts)

Modifies the place&#39;s ID

The place ID for the place you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.PlacesApi();

var idPlace = "idPlace_example"; // String | idPlace

var opts = { 
  'body': new UnimooveApi.PlaceIdChangeRequest() // PlaceIdChangeRequest | The place's new ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyPlaceId(idPlace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPlace** | **String**| idPlace | 
 **body** | [**PlaceIdChangeRequest**](PlaceIdChangeRequest.md)| The place&#39;s new ID | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyPlaceName"></a>
# **modifyPlaceName**
> modifyPlaceName(idPlace, opts)

Modifies the places&#39;s name

The place ID for the place you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.PlacesApi();

var idPlace = "idPlace_example"; // String | idPlace

var opts = { 
  'body': new UnimooveApi.PlaceNameChangeRequest() // PlaceNameChangeRequest | The place's new name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyPlaceName(idPlace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPlace** | **String**| idPlace | 
 **body** | [**PlaceNameChangeRequest**](PlaceNameChangeRequest.md)| The place&#39;s new name | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="searchPlace"></a>
# **searchPlace**
> PlacePaginatedResponse searchPlace(opts)

Searches for a place

Searches for a place.

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.PlacesApi();

var opts = { 
  'name': "name_example", // String | the place to be searched
  'page': 0, // Integer | the number of the page
  'size': 25 // Integer | the number of element per page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchPlace(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| the place to be searched | [optional] 
 **page** | **Integer**| the number of the page | [optional] [default to 0]
 **size** | **Integer**| the number of element per page | [optional] [default to 25]

### Return type

[**PlacePaginatedResponse**](PlacePaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

