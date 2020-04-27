import {ApiClient, UsersApi, AuthenticationApi} from './unimoove-api-client';

class CustomApiClient extends ApiClient {
  callApi(
    path,
    httpMethod,
    pathParams,
    queryParams,
    headerParams,
    formParams,
    bodyParam,
    authNames,
    contentTypes,
    accepts,
    returnType,
    callback,
  ) {
    console.log(
      '===================================================================================================================',
    );
    console.log('Calling api');
    console.log(`path: ${JSON.stringify(path)})`);
    console.log(`httpMethod: ${JSON.stringify(httpMethod)})`);
    console.log(`pathParams: ${JSON.stringify(pathParams)})`);
    console.log(`queryParams: ${JSON.stringify(queryParams)})`);
    console.log(`headerParams: ${JSON.stringify(headerParams)})`);
    console.log(`formParams: ${JSON.stringify(formParams)})`);
    console.log(`bodyParam: ${JSON.stringify(bodyParam)})`);
    console.log(`authNames: ${JSON.stringify(authNames)})`);
    console.log(`contentTypes: ${JSON.stringify(contentTypes)})`);
    console.log(`accepts: ${JSON.stringify(accepts)})`);
    console.log(`returnType: ${JSON.stringify(returnType)})`);
    console.log(`callback: ${callback}`);
    console.log(
      '===================================================================================================================',
    );
    bodyParam = JSON.stringify(bodyParam);
    return fetch(`${this.basePath}${path}`, {
      method: httpMethod,
      headers: new Headers({'content-type': 'application/json', 'Accept': 'application/json' }),
      body: bodyParam, 
    }).then(callback).catch(reason=>console.log(reason));
  }
}

class CustomUsersApi extends UsersApi {
  constructor() {
    super(new CustomApiClient());
  }
}

class CustomAuthenticationApi extends AuthenticationApi {
  constructor() {
    super(new CustomApiClient());
  }
}
export {CustomUsersApi, CustomAuthenticationApi};
