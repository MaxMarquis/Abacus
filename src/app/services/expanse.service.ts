import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExpanseAdapterService } from '../adapters/expanse-adapter.service';
import { Depense, ApiResponse } from '../interface/depense';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  Header:
    'Authorization: [628db71916117200099a2c2c-a3839c4e-5515-4f8c-960c-5ccf25440ee3]',
};
@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(
    private adapter: ExpanseAdapterService,
    private http: HttpClient
  ) {}

  private readonly expenseUrl =
    'https://my-temp-project-26d60b.can.canonic.dev/api/depenses';
  private _expenses = new BehaviorSubject<Depense[]>([]);
  public expensesList$ = this._expenses.asObservable();

  getExpenseList() {
    this.http
      .get<ApiResponse<Depense[]>>(this.expenseUrl)
      .subscribe((response) => {
        this._expenses.next(response.data);
      });
    return this.expensesList$;
  }

  removeExpense(depense: Depense) {
    const url = `${this.expenseUrl}/${depense._id}`;
    this.http.delete<Depense>(url);
    this.getExpenseList();
  }

  addExpense(depense: Depense) {
    this.http
      .post<ApiResponse<Depense[]>>(
        this.expenseUrl,
        this.adapter.createDTO(depense),
        httpOptions
      )
      .subscribe((response) => this._expenses.next(response.data));
  }

  editExpense(depense: Depense): Observable<Depense> {
    const url = `${this.expenseUrl}/${depense._id}`;
    return this.http.put<Depense>(this.expenseUrl, depense, httpOptions);
  }
}
