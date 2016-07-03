import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  constructor(private _http: Http) {}

  getPosts():Observable<any> {
    return this._http.get('http://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }
}
