import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncomeAdapterService } from '../adapters/income-adapter.service';
import { Revenu } from '../interface/revenu';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  Header:
    'Authorization: [628db71916117200099a2c2c-a3839c4e-5515-4f8c-960c-5ccf25440ee3]',
};

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  constructor(
    private adapter: IncomeAdapterService,
    private http: HttpClient
  ) {}

  incomeUrl = 'https://my-temp-project-26d60b.can.canonic.dev/api/depenses';

  getIncomeList(): Observable<Revenu[]> {
    return this.http.get<Revenu[]>(this.incomeUrl);
  }

  addIncome(revenu: Revenu): Observable<Revenu> {
    return this.http.post<Revenu>(
      this.incomeUrl,
      this.adapter.createDTOObjectRevenu(revenu),
      httpOptions
    );
  }

  editIncome(revenu: Revenu): Observable<Revenu> {
    const url = `${this.incomeUrl}/${revenu._id}`;
    return this.http.put<Revenu>(
      url,
      this.adapter.createDTOObjectRevenu(revenu),
      httpOptions
    );
  }

  removeIncome(revenu: Revenu): Observable<Revenu> {
    const url = `${this.incomeUrl}/${revenu._id}`;
    return this.http.delete<Revenu>(url);
  }
}
