# DeBankOpenApi.UserApi

All URIs are relative to *https://openapi.debank.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserComplexProtocolList**](UserApi.md#getUserComplexProtocolList) | **GET** /v1/user/complex_protocol_list | 
[**getUserNftList**](UserApi.md#getUserNftList) | **GET** /v1/user/nft_list | 
[**getUserProtocol**](UserApi.md#getUserProtocol) | **GET** /v1/user/protocol | 
[**getUserSimpleProtocolList**](UserApi.md#getUserSimpleProtocolList) | **GET** /v1/user/simple_protocol_list | 
[**getUserToken**](UserApi.md#getUserToken) | **GET** /v1/user/token | 
[**getUserTokenAuthorizedList**](UserApi.md#getUserTokenAuthorizedList) | **GET** /v1/user/token_authorized_list | 
[**getUserTokenList**](UserApi.md#getUserTokenList) | **GET** /v1/user/token_list | 
[**getUserTokenSearch**](UserApi.md#getUserTokenSearch) | **GET** /v1/user/token_search | 
[**getUserTotalBalance**](UserApi.md#getUserTotalBalance) | **GET** /v1/user/chain_balance | 
[**getUserTotalBalance_0**](UserApi.md#getUserTotalBalance_0) | **GET** /v1/user/total_balance | 

<a name="getUserComplexProtocolList"></a>
# **getUserComplexProtocolList**
> getUserComplexProtocolList(id, opts)



Get list of protocols with user portfolio details

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | User Address
let opts = { 
  'chainId': "chainId_example" // String | ChainID
};
apiInstance.getUserComplexProtocolList(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User Address | 
 **chainId** | **String**| ChainID | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserNftList"></a>
# **getUserNftList**
> getUserNftList(id, chainId)



Get user nft list

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | Address
let chainId = "chainId_example"; // String | ChainID

apiInstance.getUserNftList(id, chainId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Address | 
 **chainId** | **String**| ChainID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserProtocol"></a>
# **getUserProtocol**
> getUserProtocol(id, protocolId)



Get the user&#x27;s portfolio in the protocol

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | User Address
let protocolId = "protocolId_example"; // String | protocol id

apiInstance.getUserProtocol(id, protocolId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User Address | 
 **protocolId** | **String**| protocol id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserSimpleProtocolList"></a>
# **getUserSimpleProtocolList**
> getUserSimpleProtocolList(id, opts)



Stats the user&#x27;s protocol assets on a chain

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | User Address
let opts = { 
  'chainId': "chainId_example" // String | ChainID
};
apiInstance.getUserSimpleProtocolList(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User Address | 
 **chainId** | **String**| ChainID | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserToken"></a>
# **getUserToken**
> getUserToken(id, tokenId, opts)



Get user token balance

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | Address
let tokenId = "tokenId_example"; // String | token id
let opts = { 
  'chainId': "chainId_example" // String | ChainID
};
apiInstance.getUserToken(id, tokenId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Address | 
 **tokenId** | **String**| token id | 
 **chainId** | **String**| ChainID | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserTokenAuthorizedList"></a>
# **getUserTokenAuthorizedList**
> getUserTokenAuthorizedList(id, chainId)



Show the user&#x27;s risk exposure of approved token on a chain

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | User Address
let chainId = "chainId_example"; // String | ChainID

apiInstance.getUserTokenAuthorizedList(id, chainId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User Address | 
 **chainId** | **String**| ChainID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserTokenList"></a>
# **getUserTokenList**
> getUserTokenList(id, opts)



Get user token balance

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | Address
let opts = { 
  'chainId': "chainId_example", // String | ChainID
  'isAll': true, // Boolean | If true, all tokens are returned, including protocol-derived tokens
  'hasBalance': true // Boolean | If true, only token with balance will returned
};
apiInstance.getUserTokenList(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Address | 
 **chainId** | **String**| ChainID | [optional] 
 **isAll** | **Boolean**| If true, all tokens are returned, including protocol-derived tokens | [optional] [default to true]
 **hasBalance** | **Boolean**| If true, only token with balance will returned | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserTokenSearch"></a>
# **getUserTokenSearch**
> getUserTokenSearch(id, q, opts)



Get Tokens By Filter

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | User Address
let q = "q_example"; // String | filter args
let opts = { 
  'chainId': "chainId_example", // String | ChainID
  'hasBalance': true // Boolean | If true, only token with balance will returned
};
apiInstance.getUserTokenSearch(id, q, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User Address | 
 **q** | **String**| filter args | 
 **chainId** | **String**| ChainID | [optional] 
 **hasBalance** | **Boolean**| If true, only token with balance will returned | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserTotalBalance"></a>
# **getUserTotalBalance**
> getUserTotalBalance(id, chainId)



Get the net assets of a chain

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | User Address
let chainId = "chainId_example"; // String | ChainID

apiInstance.getUserTotalBalance(id, chainId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User Address | 
 **chainId** | **String**| ChainID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserTotalBalance_0"></a>
# **getUserTotalBalance_0**
> getUserTotalBalance_0(id)



Get net assets on multiple chains, including tokens and protocols

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.UserApi();
let id = "id_example"; // String | User Address

apiInstance.getUserTotalBalance_0(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User Address | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

