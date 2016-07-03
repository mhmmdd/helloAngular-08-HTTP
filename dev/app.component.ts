import {Component} from 'angular2/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'my-app',
  template: `
    <div>
      <div class="input">
        <label for="title">Title</label>
        <input type="text" id="title" #title />
      </div>
      <div class="input">
        <label for="body">Body</label>
        <input type="text" id="body" #body />
      </div>
      <div class="input">
        <label for="user-id">User ID</label>
        <input type="text" id="user-id" #userId />
      </div>
      <button (click)="onPost(title.value, body.value, userId.value)">Post Data</button>
      <button (click)="onGetPosts()">Get all Posts</button>
      <p>Response: {{response | json}}</p>
    </div>
  `,
  providers: [HttpService]
})
export class AppComponent {
  response: string;

  constructor(private _httpService: HttpService) {}

  onGetPosts() {
    this._httpService.getPosts()
      .subscribe(
        response => this.response = response,
        error => console.log(error)
      )
  }
}
