# DeBankOpenApi.TokenApi

All URIs are relative to *https://openapi.debank.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTokenListByIdsR**](TokenApi.md#getTokenListByIdsR) | **GET** /v1/token/list_by_ids | 
[**getTokenR**](TokenApi.md#getTokenR) | **GET** /v1/token | 

<a name="getTokenListByIdsR"></a>
# **getTokenListByIdsR**
> [Token] getTokenListByIdsR(chainId, ids)



Bulk token fetching by address

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.TokenApi();
let chainId = "chainId_example"; // String | ChainID
let ids = ["ids_example"]; // [String] | List of token addresses, up to 100

apiInstance.getTokenListByIdsR(chainId, ids).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| ChainID | 
 **ids** | [**[String]**](String.md)| List of token addresses, up to 100 | 

### Return type

[**[Token]**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTokenR"></a>
# **getTokenR**
> Token getTokenR(chainId, id)



Get token by address

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.TokenApi();
let chainId = "chainId_example"; // String | ChainID
let id = "id_example"; // String | Ethereum Address or native token id

apiInstance.getTokenR(chainId, id).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| ChainID | 
 **id** | **String**| Ethereum Address or native token id | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

