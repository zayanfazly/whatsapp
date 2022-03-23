import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts(url: string): Observable<any>{
    return this.httpClient.get(url, {
      responseType: 'json'
    })
  }
}
