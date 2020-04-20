# UnimooveApi.TripsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTrip**](TripsApi.md#addTrip) | **POST** /trips | Adds a trip
[**deleteTrip**](TripsApi.md#deleteTrip) | **DELETE** /trips/{idTrip} | Deletes a trip
[**getTripReservations**](TripsApi.md#getTripReservations) | **GET** /trips/{idTrip}/reservations | Gets all the reservations for a trip
[**modifyTripArrivalPlace**](TripsApi.md#modifyTripArrivalPlace) | **PUT** /trips/{idTrip}/arrivalPlace | Modifies the trip&#39;s arrival Place
[**modifyTripDepartureDateTime**](TripsApi.md#modifyTripDepartureDateTime) | **PUT** /trips/{idTrip}/departureDateTime | Modifies the trip&#39;s departure date and time
[**modifyTripDeparturePlace**](TripsApi.md#modifyTripDeparturePlace) | **PUT** /trips/{idTrip}/departurePlace | Modifies the trip&#39;s departurePlace
[**modifyTripNumberAvailableSeats**](TripsApi.md#modifyTripNumberAvailableSeats) | **PUT** /trips/{idTrip}/numberAvailableSeats | Modifies the trip&#39;s number of available seats
[**obtainTrips**](TripsApi.md#obtainTrips) | **GET** /users/{username}/trips | Obtains the trips registered by the user
[**searchTrips**](TripsApi.md#searchTrips) | **GET** /trips | Searches for trips


<a name="addTrip"></a>
# **addTrip**
> addTrip(opts)

Adds a trip

Adds a new trip to the system

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.TripsApi();

var opts = { 
  'body': new UnimooveApi.TripCreationRequest() // TripCreationRequest | Trip to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addTrip(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TripCreationRequest**](TripCreationRequest.md)| Trip to add | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="deleteTrip"></a>
# **deleteTrip**
> deleteTrip(idTrip)

Deletes a trip

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.TripsApi();

var idTrip = "idTrip_example"; // String | By passing in the appropriate trip ID, you can delete the trip.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTrip(idTrip, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTrip** | **String**| By passing in the appropriate trip ID, you can delete the trip. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: *_/_*

<a name="getTripReservations"></a>
# **getTripReservations**
> ReservationPaginatedResponse getTripReservations(idTrip, opts)

Gets all the reservations for a trip

Gets all the reservations for a trip.

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.TripsApi();

var idTrip = "idTrip_example"; // String | idTrip

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
apiInstance.getTripReservations(idTrip, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTrip** | **String**| idTrip | 
 **page** | **Integer**| the number of the page | [optional] [default to 0]
 **size** | **Integer**| the number of element per page | [optional] [default to 25]

### Return type

[**ReservationPaginatedResponse**](ReservationPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyTripArrivalPlace"></a>
# **modifyTripArrivalPlace**
> modifyTripArrivalPlace(idTrip, opts)

Modifies the trip&#39;s arrival Place

The trip ID for the trip you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.TripsApi();

var idTrip = "idTrip_example"; // String | idTrip

var opts = { 
  'body': new UnimooveApi.TripArrivalPlaceChangeRequest() // TripArrivalPlaceChangeRequest | The trip's new arrival place
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyTripArrivalPlace(idTrip, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTrip** | **String**| idTrip | 
 **body** | [**TripArrivalPlaceChangeRequest**](TripArrivalPlaceChangeRequest.md)| The trip&#39;s new arrival place | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyTripDepartureDateTime"></a>
# **modifyTripDepartureDateTime**
> modifyTripDepartureDateTime(idTrip, opts)

Modifies the trip&#39;s departure date and time

The trip ID for the trip you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.TripsApi();

var idTrip = "idTrip_example"; // String | idTrip

var opts = { 
  'body': new UnimooveApi.TripDepartureDateTimeChangeRequest() // TripDepartureDateTimeChangeRequest | The trip's new departure date and time
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyTripDepartureDateTime(idTrip, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTrip** | **String**| idTrip | 
 **body** | [**TripDepartureDateTimeChangeRequest**](TripDepartureDateTimeChangeRequest.md)| The trip&#39;s new departure date and time | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyTripDeparturePlace"></a>
# **modifyTripDeparturePlace**
> modifyTripDeparturePlace(idTrip, opts)

Modifies the trip&#39;s departurePlace

The trip ID for the trip you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.TripsApi();

var idTrip = "idTrip_example"; // String | idTrip

var opts = { 
  'body': new UnimooveApi.TripDeparturePlaceChangeRequest() // TripDeparturePlaceChangeRequest | The trip's new departure place
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyTripDeparturePlace(idTrip, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTrip** | **String**| idTrip | 
 **body** | [**TripDeparturePlaceChangeRequest**](TripDeparturePlaceChangeRequest.md)| The trip&#39;s new departure place | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyTripNumberAvailableSeats"></a>
# **modifyTripNumberAvailableSeats**
> modifyTripNumberAvailableSeats(idTrip, opts)

Modifies the trip&#39;s number of available seats

The trip ID for the trip you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.TripsApi();

var idTrip = "idTrip_example"; // String | idTrip

var opts = { 
  'body': new UnimooveApi.TripNumberAvailableSeatsChangeRequest() // TripNumberAvailableSeatsChangeRequest | The trip's new number of available seats
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyTripNumberAvailableSeats(idTrip, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTrip** | **String**| idTrip | 
 **body** | [**TripNumberAvailableSeatsChangeRequest**](TripNumberAvailableSeatsChangeRequest.md)| The trip&#39;s new number of available seats | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="obtainTrips"></a>
# **obtainTrips**
> TripPaginatedResponse obtainTrips(username, opts)

Obtains the trips registered by the user

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.TripsApi();

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
apiInstance.obtainTrips(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **page** | **Integer**| the number of the page | [optional] [default to 0]
 **size** | **Integer**| the number of element per page | [optional] [default to 25]

### Return type

[**TripPaginatedResponse**](TripPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchTrips"></a>
# **searchTrips**
> TripPaginatedResponse searchTrips(opts)

Searches for trips

Searches for trips with the specified departure and arrival place and date.

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.TripsApi();

var opts = { 
  'arrivalPlace': "arrivalPlace_example", // String | the arrival place for the trip
  'departureDateTime': "departureDateTime_example", // String | the departure time for the trip
  'departurePlace': "departurePlace_example", // String | the departure place for the trip
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
apiInstance.searchTrips(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **arrivalPlace** | **String**| the arrival place for the trip | [optional] 
 **departureDateTime** | **String**| the departure time for the trip | [optional] 
 **departurePlace** | **String**| the departure place for the trip | [optional] 
 **page** | **Integer**| the number of the page | [optional] [default to 0]
 **size** | **Integer**| the number of element per page | [optional] [default to 25]

### Return type

[**TripPaginatedResponse**](TripPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

