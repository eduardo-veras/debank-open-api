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
/**
 * 
 * @export
 * @interface Chain
 */
export interface Chain {
    /**
     * chain id
     * @type {string}
     * @memberof Chain
     */
    id?: any;
    /**
     * Community-identified id
     * @type {number}
     * @memberof Chain
     */
    communityId?: any;
    /**
     * 
     * @type {string}
     * @memberof Chain
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof Chain
     */
    logoUrl?: any;
    /**
     * native token
     * @type {string}
     * @memberof Chain
     */
    nativeTokenId?: any;
    /**
     * the erc20-wrapped of native token
     * @type {string}
     * @memberof Chain
     */
    wrappedTokenId?: any;
}
