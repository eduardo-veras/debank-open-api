"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainApi = exports.ChainApiFactory = exports.ChainApiFp = exports.ChainApiAxiosParamCreator = void 0;
/* tslint:disable */
/* eslint-disable */
/**
 * DeBank OpenAPI
 * Build for DeFi Developers.
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
const axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * ChainApi - axios parameter creator
 * @export
 */
exports.ChainApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get supported chain list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChainList: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/v1/chain/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * Get chain info by id
         * @param {string} id ChainID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChainR: (id, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling getChainR.');
            }
            const localVarPath = `/v1/chain`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * ChainApi - functional programming interface
 * @export
 */
exports.ChainApiFp = function (configuration) {
    return {
        /**
         * Get supported chain list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChainList(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ChainApiAxiosParamCreator(configuration).getChainList(options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get chain info by id
         * @param {string} id ChainID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChainR(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ChainApiAxiosParamCreator(configuration).getChainR(id, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * ChainApi - factory interface
 * @export
 */
exports.ChainApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Get supported chain list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChainList(options) {
            return exports.ChainApiFp(configuration).getChainList(options).then((request) => request(axios, basePath));
        },
        /**
         * Get chain info by id
         * @param {string} id ChainID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChainR(id, options) {
            return exports.ChainApiFp(configuration).getChainR(id, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * ChainApi - object-oriented interface
 * @export
 * @class ChainApi
 * @extends {BaseAPI}
 */
class ChainApi extends base_1.BaseAPI {
    /**
     * Get supported chain list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChainApi
     */
    getChainList(options) {
        return exports.ChainApiFp(this.configuration).getChainList(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get chain info by id
     * @param {string} id ChainID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChainApi
     */
    getChainR(id, options) {
        return exports.ChainApiFp(this.configuration).getChainR(id, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.ChainApi = ChainApi;