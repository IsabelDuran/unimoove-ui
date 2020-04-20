/**
 * Unimoove API
 * An API for the Unimoove application
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UnimooveApi) {
      root.UnimooveApi = {};
    }
    root.UnimooveApi.UserEmailChangeRequest = factory(root.UnimooveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserEmailChangeRequest model module.
   * @module model/UserEmailChangeRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserEmailChangeRequest</code>.
   * @alias module:model/UserEmailChangeRequest
   * @class
   * @param newEmail {String} 
   */
  var exports = function(newEmail) {
    var _this = this;

    _this['newEmail'] = newEmail;
  };

  /**
   * Constructs a <code>UserEmailChangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserEmailChangeRequest} obj Optional instance to populate.
   * @return {module:model/UserEmailChangeRequest} The populated <code>UserEmailChangeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('newEmail')) {
        obj['newEmail'] = ApiClient.convertToType(data['newEmail'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} newEmail
   */
  exports.prototype['newEmail'] = undefined;



  return exports;
}));


