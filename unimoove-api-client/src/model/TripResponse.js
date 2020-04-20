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
    root.UnimooveApi.TripResponse = factory(root.UnimooveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TripResponse model module.
   * @module model/TripResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TripResponse</code>.
   * @alias module:model/TripResponse
   * @class
   * @param arrivalPlace {String} 
   * @param departureDateTime {Date} 
   * @param departurePlace {String} 
   * @param id {Integer} 
   * @param numberAvailableSeats {Integer} 
   * @param price {Number} 
   * @param state {Integer} 
   */
  var exports = function(arrivalPlace, departureDateTime, departurePlace, id, numberAvailableSeats, price, state) {
    var _this = this;

    _this['arrivalPlace'] = arrivalPlace;
    _this['departureDateTime'] = departureDateTime;
    _this['departurePlace'] = departurePlace;
    _this['id'] = id;
    _this['numberAvailableSeats'] = numberAvailableSeats;
    _this['price'] = price;
    _this['state'] = state;
  };

  /**
   * Constructs a <code>TripResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TripResponse} obj Optional instance to populate.
   * @return {module:model/TripResponse} The populated <code>TripResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('arrivalPlace')) {
        obj['arrivalPlace'] = ApiClient.convertToType(data['arrivalPlace'], 'String');
      }
      if (data.hasOwnProperty('departureDateTime')) {
        obj['departureDateTime'] = ApiClient.convertToType(data['departureDateTime'], 'Date');
      }
      if (data.hasOwnProperty('departurePlace')) {
        obj['departurePlace'] = ApiClient.convertToType(data['departurePlace'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('numberAvailableSeats')) {
        obj['numberAvailableSeats'] = ApiClient.convertToType(data['numberAvailableSeats'], 'Integer');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} arrivalPlace
   */
  exports.prototype['arrivalPlace'] = undefined;
  /**
   * @member {Date} departureDateTime
   */
  exports.prototype['departureDateTime'] = undefined;
  /**
   * @member {String} departurePlace
   */
  exports.prototype['departurePlace'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} numberAvailableSeats
   */
  exports.prototype['numberAvailableSeats'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Integer} state
   */
  exports.prototype['state'] = undefined;



  return exports;
}));


