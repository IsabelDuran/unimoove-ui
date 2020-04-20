# UnimooveApi.ReservationsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReservation**](ReservationsApi.md#addReservation) | **POST** /reservations | Adds a reservation
[**deleteReservation**](ReservationsApi.md#deleteReservation) | **DELETE** /reservations/{idReservation} | Deletes a reservation
[**obtainReservations**](ReservationsApi.md#obtainReservations) | **GET** /users/{username}/reservations | Obtains the trips reserved by the user


<a name="addReservation"></a>
# **addReservation**
> addReservation(opts)

Adds a reservation

Adds a new reservation to the system

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.ReservationsApi();

var opts = { 
  'body': new UnimooveApi.ReservationCreationRequest() // ReservationCreationRequest | Reservation to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReservation(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReservationCreationRequest**](ReservationCreationRequest.md)| Reservation to add | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="deleteReservation"></a>
# **deleteReservation**
> deleteReservation(idReservation)

Deletes a reservation

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.ReservationsApi();

var idReservation = "idReservation_example"; // String | By passing in the appropriate reservation ID, you can delete the reservation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReservation(idReservation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idReservation** | **String**| By passing in the appropriate reservation ID, you can delete the reservation. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: *_/_*

<a name="obtainReservations"></a>
# **obtainReservations**
> ReservationPaginatedResponse obtainReservations(username, opts)

Obtains the trips reserved by the user

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.ReservationsApi();

var username = "username_example"; // String | username

var opts = { 
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
apiInstance.obtainReservations(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **page** | **Integer**| the number of the page | [optional] [default to 0]
 **size** | **Integer**| the number of element per page | [optional] [default to 25]

### Return type

[**ReservationPaginatedResponse**](ReservationPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

