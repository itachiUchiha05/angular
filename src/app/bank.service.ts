import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  uri = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }
  addbank(bname:string,head:string,address:string)
  {
    const obj ={
      bname:bname,
      head:head,
      address:address
    }
    return this.http.post(this.uri + 'app',obj);
  }
  getbank()
  {
    return this.http.get(this.uri + 'app/list');
  }
  deletebank(id:any)
  {
    return this.http.get(this.uri + 'app/delete/' + id)
  }
  editbank(id:any)
  {
    return this.http.get(this.uri + 'app/' + id);
  }
}
