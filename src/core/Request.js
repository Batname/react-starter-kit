import http from 'superagent';
import Q from 'q';

let Request = {
  get(url){
    let deferred = Q.defer();
    http
    .get(url)
    .accept('application/json')
    .end(function(err, res){
      if (err) {
        deferred.reject(new Error(err));
      } else {
        deferred.resolve(res);
      }
    });
    return deferred.promise;
  }
};

export default Request;
