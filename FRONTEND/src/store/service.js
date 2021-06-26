
export default class RestResource {
 
  sendRequest() {
    // eslint-disable-next-line no-debugger
    debugger
    return fetch("https://localhost:44327/api/values")
    .then(response => response.json())
    .then(data => {
      // eslint-disable-next-line no-debugger
      debugger
      return data
    } );
    

    // Use vue-resource or any other http library to send your request
  }

}