# DeBankOpenApi.ChainApi

All URIs are relative to *https://openapi.debank.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChainList**](ChainApi.md#getChainList) | **GET** /v1/chain/list | 
[**getChainR**](ChainApi.md#getChainR) | **GET** /v1/chain | 

<a name="getChainList"></a>
# **getChainList**
> [Chain] getChainList()



Get supported chain list

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.ChainApi();
apiInstance.getChainList().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Chain]**](Chain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getChainR"></a>
# **getChainR**
> Chain getChainR(id)



Get chain info by id

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.ChainApi();
let id = "id_example"; // String | ChainID

apiInstance.getChainR(id).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ChainID | 

### Return type

[**Chain**](Chain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

