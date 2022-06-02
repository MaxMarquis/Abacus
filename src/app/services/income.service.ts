import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IncomeAdapterService } from '../adapters/income-adapter.service';
import { ApiResponse, Revenu } from '../interface/revenu';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  Header:
    'Authorization: [628db71916117200099a2c2c-a3839c4e-5515-4f8c-960c-5ccf25440ee3]',
};
/**
 * TODO:
 * Confirmer le retour des données de l'api (Est-ce que l'on doit wrapper les types revenus dans ApiResponse?)
 */
@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  constructor(
    private adapter: IncomeAdapterService,
    private http: HttpClient
  ) {}

  private incomeUrl =
    'https://my-temp-project-26d60b.can.canonic.dev/api/revenus';
  private _incomes = new BehaviorSubject<Revenu[]>([]);

  public incomesList$ = this._incomes.asObservable();

  getIncomeList() {
    this.http
      .get<ApiResponse<Revenu[]>>(this.incomeUrl)
      .subscribe((response) => {
        this._incomes.next(response.data);
      });

    return this._incomes.asObservable();
  }

  addIncome(revenu: Revenu) {
    return this.http
      .post<ApiResponse<Revenu>>(
        this.incomeUrl,
        this.adapter.createDTO(revenu),
        httpOptions
      )
      .subscribe(() => {
        this.getIncomeList();
      });
  }

  editIncome(revenu: Revenu): Observable<Revenu> {
    const url = `${this.incomeUrl}/${revenu._id}`;
    return this.http.put<Revenu>(
      url,
      this.adapter.createDTO(revenu),
      httpOptions
    );
  }

  removeIncome(revenu: Revenu) {
    const url = `${this.incomeUrl}/${revenu._id}`;
    return this.http.delete<Revenu>(url).subscribe(() => {
      this.getIncomeList();
    });
  }
}
