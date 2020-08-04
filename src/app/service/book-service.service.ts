import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../model/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private URL_API = 'http://localhost:3000/books'

  constructor(private http:HttpClient) { }

  getAllBook():Observable<any>{
    return this.http.get(this.URL_API);
  }
  deleteById(id:number):Observable<IBook>{
    return this.http.delete<IBook>(this.URL_API +'/'+ id);
  }

  getBookById(id:number):Observable<IBook>{
    return this.http.get<IBook>(this.URL_API + '/'+ id);
  }

  updateBookById(id:number,data:IBook):Observable<IBook>{
    return this.http.put<IBook>(this.URL_API+'/'+ id, data);
  }

  createBook(data:IBook):Observable<IBook>{
    return this.http.post<IBook>(this.URL_API,data);
  }
}
