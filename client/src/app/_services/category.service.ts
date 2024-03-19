import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = "http://localhost:5021/api/"
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl + "categories");
  }
}
