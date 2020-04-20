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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CarBrandChangeRequest', 'model/CarCreationRequest', 'model/CarModelChangeRequest', 'model/CarResponse', 'model/LoginRequest', 'model/LoginResponse', 'model/PaginationInfo', 'model/PlaceCategoryChangeRequest', 'model/PlaceCreationRequest', 'model/PlaceIdChangeRequest', 'model/PlaceNameChangeRequest', 'model/PlacePaginatedResponse', 'model/PlaceResponse', 'model/ReservationCreationRequest', 'model/ReservationPaginatedResponse', 'model/ReservationResponse', 'model/TripArrivalPlaceChangeRequest', 'model/TripCreationRequest', 'model/TripDepartureDateTimeChangeRequest', 'model/TripDeparturePlaceChangeRequest', 'model/TripNumberAvailableSeatsChangeRequest', 'model/TripPaginatedResponse', 'model/TripReservationResponse', 'model/TripResponse', 'model/UserBirthdateChangeRequest', 'model/UserEmailChangeRequest', 'model/UserGenderChangeRequest', 'model/UserLastnameChangeRequest', 'model/UserNameChangeRequest', 'model/UserPaginatedResponse', 'model/UserPasswordChangeRequest', 'model/UserRegistrationRequest', 'model/UserResponse', 'model/UserRoleChangeRequest', 'model/UserUsernameChangeRequest', 'api/AuthenticationApi', 'api/CarsApi', 'api/PlacesApi', 'api/ReservationsApi', 'api/TripsApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CarBrandChangeRequest'), require('./model/CarCreationRequest'), require('./model/CarModelChangeRequest'), require('./model/CarResponse'), require('./model/LoginRequest'), require('./model/LoginResponse'), require('./model/PaginationInfo'), require('./model/PlaceCategoryChangeRequest'), require('./model/PlaceCreationRequest'), require('./model/PlaceIdChangeRequest'), require('./model/PlaceNameChangeRequest'), require('./model/PlacePaginatedResponse'), require('./model/PlaceResponse'), require('./model/ReservationCreationRequest'), require('./model/ReservationPaginatedResponse'), require('./model/ReservationResponse'), require('./model/TripArrivalPlaceChangeRequest'), require('./model/TripCreationRequest'), require('./model/TripDepartureDateTimeChangeRequest'), require('./model/TripDeparturePlaceChangeRequest'), require('./model/TripNumberAvailableSeatsChangeRequest'), require('./model/TripPaginatedResponse'), require('./model/TripReservationResponse'), require('./model/TripResponse'), require('./model/UserBirthdateChangeRequest'), require('./model/UserEmailChangeRequest'), require('./model/UserGenderChangeRequest'), require('./model/UserLastnameChangeRequest'), require('./model/UserNameChangeRequest'), require('./model/UserPaginatedResponse'), require('./model/UserPasswordChangeRequest'), require('./model/UserRegistrationRequest'), require('./model/UserResponse'), require('./model/UserRoleChangeRequest'), require('./model/UserUsernameChangeRequest'), require('./api/AuthenticationApi'), require('./api/CarsApi'), require('./api/PlacesApi'), require('./api/ReservationsApi'), require('./api/TripsApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, CarBrandChangeRequest, CarCreationRequest, CarModelChangeRequest, CarResponse, LoginRequest, LoginResponse, PaginationInfo, PlaceCategoryChangeRequest, PlaceCreationRequest, PlaceIdChangeRequest, PlaceNameChangeRequest, PlacePaginatedResponse, PlaceResponse, ReservationCreationRequest, ReservationPaginatedResponse, ReservationResponse, TripArrivalPlaceChangeRequest, TripCreationRequest, TripDepartureDateTimeChangeRequest, TripDeparturePlaceChangeRequest, TripNumberAvailableSeatsChangeRequest, TripPaginatedResponse, TripReservationResponse, TripResponse, UserBirthdateChangeRequest, UserEmailChangeRequest, UserGenderChangeRequest, UserLastnameChangeRequest, UserNameChangeRequest, UserPaginatedResponse, UserPasswordChangeRequest, UserRegistrationRequest, UserResponse, UserRoleChangeRequest, UserUsernameChangeRequest, AuthenticationApi, CarsApi, PlacesApi, ReservationsApi, TripsApi, UsersApi) {
  'use strict';

  /**
   * An_API_for_the_Unimoove_application.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var UnimooveApi = require('index'); // See note below*.
   * var xxxSvc = new UnimooveApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new UnimooveApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new UnimooveApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new UnimooveApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CarBrandChangeRequest model constructor.
     * @property {module:model/CarBrandChangeRequest}
     */
    CarBrandChangeRequest: CarBrandChangeRequest,
    /**
     * The CarCreationRequest model constructor.
     * @property {module:model/CarCreationRequest}
     */
    CarCreationRequest: CarCreationRequest,
    /**
     * The CarModelChangeRequest model constructor.
     * @property {module:model/CarModelChangeRequest}
     */
    CarModelChangeRequest: CarModelChangeRequest,
    /**
     * The CarResponse model constructor.
     * @property {module:model/CarResponse}
     */
    CarResponse: CarResponse,
    /**
     * The LoginRequest model constructor.
     * @property {module:model/LoginRequest}
     */
    LoginRequest: LoginRequest,
    /**
     * The LoginResponse model constructor.
     * @property {module:model/LoginResponse}
     */
    LoginResponse: LoginResponse,
    /**
     * The PaginationInfo model constructor.
     * @property {module:model/PaginationInfo}
     */
    PaginationInfo: PaginationInfo,
    /**
     * The PlaceCategoryChangeRequest model constructor.
     * @property {module:model/PlaceCategoryChangeRequest}
     */
    PlaceCategoryChangeRequest: PlaceCategoryChangeRequest,
    /**
     * The PlaceCreationRequest model constructor.
     * @property {module:model/PlaceCreationRequest}
     */
    PlaceCreationRequest: PlaceCreationRequest,
    /**
     * The PlaceIdChangeRequest model constructor.
     * @property {module:model/PlaceIdChangeRequest}
     */
    PlaceIdChangeRequest: PlaceIdChangeRequest,
    /**
     * The PlaceNameChangeRequest model constructor.
     * @property {module:model/PlaceNameChangeRequest}
     */
    PlaceNameChangeRequest: PlaceNameChangeRequest,
    /**
     * The PlacePaginatedResponse model constructor.
     * @property {module:model/PlacePaginatedResponse}
     */
    PlacePaginatedResponse: PlacePaginatedResponse,
    /**
     * The PlaceResponse model constructor.
     * @property {module:model/PlaceResponse}
     */
    PlaceResponse: PlaceResponse,
    /**
     * The ReservationCreationRequest model constructor.
     * @property {module:model/ReservationCreationRequest}
     */
    ReservationCreationRequest: ReservationCreationRequest,
    /**
     * The ReservationPaginatedResponse model constructor.
     * @property {module:model/ReservationPaginatedResponse}
     */
    ReservationPaginatedResponse: ReservationPaginatedResponse,
    /**
     * The ReservationResponse model constructor.
     * @property {module:model/ReservationResponse}
     */
    ReservationResponse: ReservationResponse,
    /**
     * The TripArrivalPlaceChangeRequest model constructor.
     * @property {module:model/TripArrivalPlaceChangeRequest}
     */
    TripArrivalPlaceChangeRequest: TripArrivalPlaceChangeRequest,
    /**
     * The TripCreationRequest model constructor.
     * @property {module:model/TripCreationRequest}
     */
    TripCreationRequest: TripCreationRequest,
    /**
     * The TripDepartureDateTimeChangeRequest model constructor.
     * @property {module:model/TripDepartureDateTimeChangeRequest}
     */
    TripDepartureDateTimeChangeRequest: TripDepartureDateTimeChangeRequest,
    /**
     * The TripDeparturePlaceChangeRequest model constructor.
     * @property {module:model/TripDeparturePlaceChangeRequest}
     */
    TripDeparturePlaceChangeRequest: TripDeparturePlaceChangeRequest,
    /**
     * The TripNumberAvailableSeatsChangeRequest model constructor.
     * @property {module:model/TripNumberAvailableSeatsChangeRequest}
     */
    TripNumberAvailableSeatsChangeRequest: TripNumberAvailableSeatsChangeRequest,
    /**
     * The TripPaginatedResponse model constructor.
     * @property {module:model/TripPaginatedResponse}
     */
    TripPaginatedResponse: TripPaginatedResponse,
    /**
     * The TripReservationResponse model constructor.
     * @property {module:model/TripReservationResponse}
     */
    TripReservationResponse: TripReservationResponse,
    /**
     * The TripResponse model constructor.
     * @property {module:model/TripResponse}
     */
    TripResponse: TripResponse,
    /**
     * The UserBirthdateChangeRequest model constructor.
     * @property {module:model/UserBirthdateChangeRequest}
     */
    UserBirthdateChangeRequest: UserBirthdateChangeRequest,
    /**
     * The UserEmailChangeRequest model constructor.
     * @property {module:model/UserEmailChangeRequest}
     */
    UserEmailChangeRequest: UserEmailChangeRequest,
    /**
     * The UserGenderChangeRequest model constructor.
     * @property {module:model/UserGenderChangeRequest}
     */
    UserGenderChangeRequest: UserGenderChangeRequest,
    /**
     * The UserLastnameChangeRequest model constructor.
     * @property {module:model/UserLastnameChangeRequest}
     */
    UserLastnameChangeRequest: UserLastnameChangeRequest,
    /**
     * The UserNameChangeRequest model constructor.
     * @property {module:model/UserNameChangeRequest}
     */
    UserNameChangeRequest: UserNameChangeRequest,
    /**
     * The UserPaginatedResponse model constructor.
     * @property {module:model/UserPaginatedResponse}
     */
    UserPaginatedResponse: UserPaginatedResponse,
    /**
     * The UserPasswordChangeRequest model constructor.
     * @property {module:model/UserPasswordChangeRequest}
     */
    UserPasswordChangeRequest: UserPasswordChangeRequest,
    /**
     * The UserRegistrationRequest model constructor.
     * @property {module:model/UserRegistrationRequest}
     */
    UserRegistrationRequest: UserRegistrationRequest,
    /**
     * The UserResponse model constructor.
     * @property {module:model/UserResponse}
     */
    UserResponse: UserResponse,
    /**
     * The UserRoleChangeRequest model constructor.
     * @property {module:model/UserRoleChangeRequest}
     */
    UserRoleChangeRequest: UserRoleChangeRequest,
    /**
     * The UserUsernameChangeRequest model constructor.
     * @property {module:model/UserUsernameChangeRequest}
     */
    UserUsernameChangeRequest: UserUsernameChangeRequest,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The CarsApi service constructor.
     * @property {module:api/CarsApi}
     */
    CarsApi: CarsApi,
    /**
     * The PlacesApi service constructor.
     * @property {module:api/PlacesApi}
     */
    PlacesApi: PlacesApi,
    /**
     * The ReservationsApi service constructor.
     * @property {module:api/ReservationsApi}
     */
    ReservationsApi: ReservationsApi,
    /**
     * The TripsApi service constructor.
     * @property {module:api/TripsApi}
     */
    TripsApi: TripsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
