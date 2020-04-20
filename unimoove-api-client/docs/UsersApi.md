# UnimooveApi.UsersApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UsersApi.md#addUser) | **POST** /users | Registers a user
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{username} | Deletes a user
[**getUser**](UsersApi.md#getUser) | **GET** /users/{username} | Finds a user
[**modifyUserBirthdate**](UsersApi.md#modifyUserBirthdate) | **PUT** /users/{username}/birthdate | Modifies the user&#39;s birthdate
[**modifyUserEmail**](UsersApi.md#modifyUserEmail) | **PUT** /users/{username}/email | Modifies the user&#39;s email
[**modifyUserGender**](UsersApi.md#modifyUserGender) | **PUT** /users/{username}/gender | Modifies the user&#39;s gender
[**modifyUserLastname**](UsersApi.md#modifyUserLastname) | **PUT** /users/{username}/lastname | Modifies the user&#39;s lastname
[**modifyUserName**](UsersApi.md#modifyUserName) | **PUT** /users/{username}/name | Modifies the user&#39;s name
[**modifyUserPassword**](UsersApi.md#modifyUserPassword) | **PUT** /users/{username}/password | Modifies the user&#39;s password
[**modifyUserRole**](UsersApi.md#modifyUserRole) | **PUT** /users/{username}/role | Modifies the user&#39;s role
[**modifyUserUsername**](UsersApi.md#modifyUserUsername) | **PUT** /users/{username}/username | Modifies the user&#39;s username
[**searchUser**](UsersApi.md#searchUser) | **GET** /users | Searches for a user


<a name="addUser"></a>
# **addUser**
> addUser(opts)

Registers a user

Adds a user to the system

### Example
```javascript
var UnimooveApi = require('unimoove_api');

var apiInstance = new UnimooveApi.UsersApi();

var opts = { 
  'body': new UnimooveApi.UserRegistrationRequest() // UserRegistrationRequest | User to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserRegistrationRequest**](UserRegistrationRequest.md)| User to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(username)

Deletes a user

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | By passing in the appropriate username, you can delete the user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| By passing in the appropriate username, you can delete the user. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: *_/_*

<a name="getUser"></a>
# **getUser**
> UserResponse getUser(username)

Finds a user

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | By passing in the appropriate username, you can get the user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| By passing in the appropriate username, you can get the user. | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyUserBirthdate"></a>
# **modifyUserBirthdate**
> modifyUserBirthdate(username, opts)

Modifies the user&#39;s birthdate

The user username you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.UserBirthdateChangeRequest() // UserBirthdateChangeRequest | The new user's birthdate
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyUserBirthdate(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **body** | [**UserBirthdateChangeRequest**](UserBirthdateChangeRequest.md)| The new user&#39;s birthdate | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyUserEmail"></a>
# **modifyUserEmail**
> modifyUserEmail(username, opts)

Modifies the user&#39;s email

The user username you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.UserEmailChangeRequest() // UserEmailChangeRequest | The new user's email
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyUserEmail(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **body** | [**UserEmailChangeRequest**](UserEmailChangeRequest.md)| The new user&#39;s email | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyUserGender"></a>
# **modifyUserGender**
> modifyUserGender(username, opts)

Modifies the user&#39;s gender

The user username you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.UserGenderChangeRequest() // UserGenderChangeRequest | The new user's gender
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyUserGender(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **body** | [**UserGenderChangeRequest**](UserGenderChangeRequest.md)| The new user&#39;s gender | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyUserLastname"></a>
# **modifyUserLastname**
> modifyUserLastname(username, opts)

Modifies the user&#39;s lastname

The user username you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.UserLastnameChangeRequest() // UserLastnameChangeRequest | The new user's lastname
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyUserLastname(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **body** | [**UserLastnameChangeRequest**](UserLastnameChangeRequest.md)| The new user&#39;s lastname | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyUserName"></a>
# **modifyUserName**
> modifyUserName(username, opts)

Modifies the user&#39;s name

The user username you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.UserNameChangeRequest() // UserNameChangeRequest | The new user's name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyUserName(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **body** | [**UserNameChangeRequest**](UserNameChangeRequest.md)| The new user&#39;s name | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyUserPassword"></a>
# **modifyUserPassword**
> modifyUserPassword(username, opts)

Modifies the user&#39;s password

The user username you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.UserPasswordChangeRequest() // UserPasswordChangeRequest | The new user's password
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyUserPassword(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **body** | [**UserPasswordChangeRequest**](UserPasswordChangeRequest.md)| The new user&#39;s password | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyUserRole"></a>
# **modifyUserRole**
> modifyUserRole(username, opts)

Modifies the user&#39;s role

The user username you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.UserRoleChangeRequest() // UserRoleChangeRequest | The new user's role
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyUserRole(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **body** | [**UserRoleChangeRequest**](UserRoleChangeRequest.md)| The new user&#39;s role | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="modifyUserUsername"></a>
# **modifyUserUsername**
> modifyUserUsername(username, opts)

Modifies the user&#39;s username

The user username you want to modify

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var username = "username_example"; // String | username

var opts = { 
  'body': new UnimooveApi.UserUsernameChangeRequest() // UserUsernameChangeRequest | The new user's username
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyUserUsername(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **body** | [**UserUsernameChangeRequest**](UserUsernameChangeRequest.md)| The new user&#39;s username | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: *_/_*

<a name="searchUser"></a>
# **searchUser**
> UserPaginatedResponse searchUser(opts)

Searches for a user

Searches for a user. This operation is permited for both user and admin

### Example
```javascript
var UnimooveApi = require('unimoove_api');
var defaultClient = UnimooveApi.ApiClient.default;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new UnimooveApi.UsersApi();

var opts = { 
  'page': 0, // Integer | the number of the page
  'size': 25, // Integer | the number of element per page
  'username': "username_example" // String | the username to be searched
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| the number of the page | [optional] [default to 0]
 **size** | **Integer**| the number of element per page | [optional] [default to 25]
 **username** | **String**| the username to be searched | [optional] 

### Return type

[**UserPaginatedResponse**](UserPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

