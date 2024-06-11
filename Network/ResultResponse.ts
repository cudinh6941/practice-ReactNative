class Failure extends Error {
    code: number;
    message: string;
  
    constructor(code: number, message: string) {
      super(message);
      this.code = code;
      this.message = message;
    }
  }
  
  export default Failure;
  
  export const Errors = {
    requestFailed: new Failure(400, 'Request failed'),
    requestTimeout: new Failure(404, 'Request timeout'),
    internalServerError: new Failure(500, 'Internal server error'),
    noInternetConnection: new Failure(1000, 'No internet connection'),
    cannotConnectToTheServer: new Failure(1001, 'Cannot connect to the server'),
    cannotParseData: new Failure(1002, 'Cannot parse data'),
    downloadInterrupted: new Failure(1777, 'Download interrupted'),
    downloadFailed: new Failure(1888, 'Download failed'),
  };
  