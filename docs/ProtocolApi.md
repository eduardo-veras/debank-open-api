# DeBankOpenApi.ProtocolApi

All URIs are relative to *https://openapi.debank.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProtocolListR**](ProtocolApi.md#getProtocolListR) | **GET** /v1/protocol/list | 
[**getProtocolR**](ProtocolApi.md#getProtocolR) | **GET** /v1/protocol | 
[**getTvl**](ProtocolApi.md#getTvl) | **GET** /v1/protocol/tvl | 

<a name="getProtocolListR"></a>
# **getProtocolListR**
> [Protocol] getProtocolListR()



### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.ProtocolApi();
apiInstance.getProtocolListR().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Protocol]**](Protocol.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProtocolR"></a>
# **getProtocolR**
> Protocol getProtocolR(id)



### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.ProtocolApi();
let id = "id_example"; // String | protocol id

apiInstance.getProtocolR(id).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| protocol id | 

### Return type

[**Protocol**](Protocol.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTvl"></a>
# **getTvl**
> getTvl(id)



### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.ProtocolApi();
let id = "id_example"; // String | protocol id

apiInstance.getTvl(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| protocol id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

