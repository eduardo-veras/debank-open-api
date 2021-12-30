# DeBankOpenApi.WalletApi

All URIs are relative to *https://openapi.debank.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCheckOrigin**](WalletApi.md#getCheckOrigin) | **GET** /v1/wallet/check_origin | 
[**getEns**](WalletApi.md#getEns) | **GET** /v1/wallet/ens | 
[**getExplainOrigin**](WalletApi.md#getExplainOrigin) | **GET** /v1/wallet/explain_origin | 
[**getExplainTx**](WalletApi.md#getExplainTx) | **GET** /v1/wallet/get_tx | 
[**getGasMarket**](WalletApi.md#getGasMarket) | **GET** /v1/wallet/gas_market | 
[**getPendingTxCount**](WalletApi.md#getPendingTxCount) | **GET** /v1/wallet/pending_tx_count | 
[**getRecommendChains**](WalletApi.md#getRecommendChains) | **GET** /v1/wallet/recommend_chains | 
[**getSupportChains**](WalletApi.md#getSupportChains) | **GET** /v1/wallet/supported_chains | 
[**getUrlConfig**](WalletApi.md#getUrlConfig) | **GET** /v1/wallet/config | 
[**postCheckText**](WalletApi.md#postCheckText) | **POST** /v1/wallet/check_text | 
[**postCheckTx**](WalletApi.md#postCheckTx) | **POST** /v1/wallet/check_tx | 
[**postEthCall**](WalletApi.md#postEthCall) | **POST** /v1/wallet/eth_rpc | 
[**postExplainText**](WalletApi.md#postExplainText) | **POST** /v1/wallet/explain_text | 
[**postExplainTx**](WalletApi.md#postExplainTx) | **POST** /v1/wallet/explain_tx | 
[**postPushTx**](WalletApi.md#postPushTx) | **POST** /v1/wallet/push_tx | 

<a name="getCheckOrigin"></a>
# **getCheckOrigin**
> getCheckOrigin(userAddr, origin)



check origin

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
let userAddr = "userAddr_example"; // String | User Address
let origin = "origin_example"; // String | DApp WebHost

apiInstance.getCheckOrigin(userAddr, origin).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAddr** | **String**| User Address | 
 **origin** | **String**| DApp WebHost | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getEns"></a>
# **getEns**
> getEns(text)



ens

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
let text = "text_example"; // String | text

apiInstance.getEns(text).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| text | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExplainOrigin"></a>
# **getExplainOrigin**
> getExplainOrigin(userAddr, origin)



explain origin

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
let userAddr = "userAddr_example"; // String | User Address
let origin = "origin_example"; // String | DApp WebHost

apiInstance.getExplainOrigin(userAddr, origin).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAddr** | **String**| User Address | 
 **origin** | **String**| DApp WebHost | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExplainTx"></a>
# **getExplainTx**
> getExplainTx(chainId, txId, gasPrice)



get tx

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
let chainId = "chainId_example"; // String | ChainId
let txId = "txId_example"; // String | tx hash id
let gasPrice = "gasPrice_example"; // String | gasPrice

apiInstance.getExplainTx(chainId, txId, gasPrice).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| ChainId | 
 **txId** | **String**| tx hash id | 
 **gasPrice** | **String**| gasPrice | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGasMarket"></a>
# **getGasMarket**
> getGasMarket(chainId, opts)



gas market

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
let chainId = "chainId_example"; // String | ChainId
let opts = { 
  'customPrice': "0" // String | CustomPrice
};
apiInstance.getGasMarket(chainId, opts).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| ChainId | 
 **customPrice** | **String**| CustomPrice | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPendingTxCount"></a>
# **getPendingTxCount**
> getPendingTxCount(userAddr)



user pending tx count

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
let userAddr = "userAddr_example"; // String | User Address

apiInstance.getPendingTxCount(userAddr).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAddr** | **String**| User Address | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getRecommendChains"></a>
# **getRecommendChains**
> getRecommendChains(userAddr, origin)



recommend chains

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
let userAddr = "userAddr_example"; // String | User Address
let origin = "origin_example"; // String | DApp WebHost

apiInstance.getRecommendChains(userAddr, origin).then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAddr** | **String**| User Address | 
 **origin** | **String**| DApp WebHost | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSupportChains"></a>
# **getSupportChains**
> getSupportChains()



wallet support chain

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
apiInstance.getSupportChains().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUrlConfig"></a>
# **getUrlConfig**
> getUrlConfig()



wallet api config

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
apiInstance.getUrlConfig().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postCheckText"></a>
# **postCheckText**
> postCheckText()



check text

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
apiInstance.postCheckText().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postCheckTx"></a>
# **postCheckTx**
> postCheckTx()



check tx

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
apiInstance.postCheckTx().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postEthCall"></a>
# **postEthCall**
> postEthCall()



eth rpc

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
apiInstance.postEthCall().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postExplainText"></a>
# **postExplainText**
> postExplainText()



explain text

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
apiInstance.postExplainText().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postExplainTx"></a>
# **postExplainTx**
> postExplainTx()



explain tx

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
apiInstance.postExplainTx().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postPushTx"></a>
# **postPushTx**
> postPushTx()



push tx

### Example
```javascript
const DeBankOpenApi = require('debank-open-api');

let apiInstance = new DeBankOpenApi.WalletApi();
apiInstance.postPushTx().then((response) => {
  console.log(response);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

