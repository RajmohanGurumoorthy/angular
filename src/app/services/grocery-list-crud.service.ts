import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError,tap }from "rxjs/operators";
import{ Grocery } from "../models/Grocery";
@Injectable({
  providedIn: 'root'
})
export class GroceryListCrudService {

  private url = "http://localhost:3000/groceries";
  constructor(private http:HttpClient) { }
  
  fetchAll():Observable<Grocery[]>{
	  return this.http
	  .get<Grocery[]>(this.url,{responseType:"json"})
	  .pipe( tap( (_) => console.log("fetched groceries")) );
  }
}
