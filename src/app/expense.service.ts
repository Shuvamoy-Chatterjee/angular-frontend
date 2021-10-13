import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Expenses } from './expenses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseURL ="https://spring-backend.azurewebsites.net/api/expenses";
  header : any;

  constructor(private httpClient: HttpClient) { 
    const headerSettings: {[name: string]: string | string[]; } = {};  

    this.header = new HttpHeaders(headerSettings);

  }

  getEmployeesList(): Observable<Expenses[]>{
    return this.httpClient.get<Expenses[]>(this.baseURL);
  }
  createExpense(expenses:Expenses){
    console.log(expenses)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.post<Expenses>(this.baseURL,expenses, httpOptions);
  }
  deleteExpense(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}

 
