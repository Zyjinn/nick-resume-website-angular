import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://mailthis.to/xsaber64@gmail.com'; // replace with email?
  constructor(private http: HttpClient) {}

  // Send a message
  PostMessage(input: any): any {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map(
        (Response) => {
          if (Response) {
            return Response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
