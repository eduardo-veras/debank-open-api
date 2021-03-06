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
 * @interface Token
 */
export interface Token {
    /**
     * Ethereum Address or native token id
     * @type {string}
     * @memberof Token
     */
    id?: any;
    /**
     * ChainID
     * @type {number}
     * @memberof Token
     */
    chain?: any;
    /**
     *
     * @type {string}
     * @memberof Token
     */
    name?: any;
    /**
     *
     * @type {string}
     * @memberof Token
     */
    symbol?: any;
    /**
     *
     * @type {number}
     * @memberof Token
     */
    decimals?: any;
    /**
     *
     * @type {string}
     * @memberof Token
     */
    logoUrl?: any;
    /**
     *
     * @type {boolean}
     * @memberof Token
     */
    isVerified?: any;
    /**
     * USD price.Price of 0 means no data
     * @type {number}
     * @memberof Token
     */
    price?: any;
    /**
     * Whether or not to show as a common token in the wallet
     * @type {boolean}
     * @memberof Token
     */
    isWallet?: any;
}
