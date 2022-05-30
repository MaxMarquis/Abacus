import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { Details, DetailsDTO, CanonicDTO } from '../interface/details';
import { Depense, DepenseDTO } from '../interface/depense';
import { Revenu, RevenuDTO } from '../interface/revenu';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
  Header: "Authorization: [628db71916117200099a2c2c-a3839c4e-5515-4f8c-960c-5ccf25440ee3]"};

@Injectable({
  providedIn: 'root'
})
export class CanonicApiService {

  detailsUrl = 'https://my-temp-project-26d60b.can.canonic.dev/api/details';
  revenuUrl = 'https://my-temp-project-26d60b.can.canonic.dev/api/revenus';
  depenseUrl = 'https://my-temp-project-26d60b.can.canonic.dev/api/depenses';
  
  


  constructor(private http: HttpClient) { }


  // * Cette requête permet de répondre à l'api Canonic
// * C'est à dire que c'est l'api qui determine quel information utilisée pour appeller nos données. 
// * Un DTO est un Data transfert Objet: on l'utilise pour determiner le type et aussi juste les données dont on a besoin lors de l'appel de l'api pour pas l'alourdir.

private createDTOObject(details: Details): CanonicDTO<DetailsDTO> {
  const detailsDTO: DetailsDTO = {
    montant: Number(details.montant),
    description: details.description,
    date: new Date(details.date),
    revenu: details.revenu,
    depense: details.depense,
    isIncome: false,

  }

  return {
    input: detailsDTO
  }
}

// *Ce code correspond aux dépenses/Canonic
private createDTOObjectDepense(depense: Depense): CanonicDTO<DepenseDTO> {
  const depenseDTO: DepenseDTO = {
    montant: Number(depense.montant),
    description: depense.description,
    date: new Date(depense.date),

  }

  return {
    input: depenseDTO
  }
}

// *Ce code correspond aux revenus/Canonic

private createDTOObjectRevenu(revenu: Revenu): CanonicDTO<RevenuDTO> {
  const revenuDTO: RevenuDTO = {
    montant: Number(revenu.montant),
    description: revenu.description,
    date: new Date(revenu.date),

  }

  return {
    input: revenuDTO
  }
}






// * toutes les fonctions CRUD Revenu

getIncomeList(): Observable<Revenu[]> {
  return this.http.get<Revenu[]>(this.revenuUrl);
}

addIncome(revenu: Revenu): Observable<Revenu> {
  return this.http.post<Revenu>(this.revenuUrl, this.createDTOObjectRevenu(revenu), httpOptions);
}

editIncome(revenu: Revenu): Observable<Revenu> {
const url = `${this.revenuUrl}/${revenu._id}`;
return this.http.put<Revenu>(this.revenuUrl, revenu, httpOptions);
}

removeIncome(revenu: Revenu): Observable<Revenu> {
  const url = `${this.revenuUrl}/${revenu._id}`;
  return this.http.delete<Revenu>(url);
}



// * toutes les fonctions CRUD pour les dépenses


getExpenseList(): Observable<Depense[]> {
  return this.http.get<Depense[]>(this.depenseUrl);
}
  
removeExpense(depense: Depense): Observable<Depense> {
  const url = `${this.depenseUrl}/${depense._id}`;
  return this.http.delete<Depense>(url);
}

addExpense(depense: Depense): Observable<Depense> {
  return this.http.post<Depense>(this.depenseUrl, this.createDTOObjectDepense(depense), httpOptions);
}

editExpense(depense: Depense): Observable<Depense> {
  const url = `${this.depenseUrl}/${depense._id}`;
  return this.http.put<Depense>(this.depenseUrl, depense, httpOptions);
}





// * Crud pour la gestion de la liste du sommaire globale pour les revenus et les dépenses ensemble


getIncomeExpenseList(): Observable<Details[]> {
  return this.http.get<Details[]>(this.detailsUrl)
}

getSummaryIncome(): Observable<Details[]> {
  return this.http.get<Details[]>(this.revenuUrl)
}

getSummaryDepense(): Observable<Details[]> {
  return this.http.get<Details[]>(this.depenseUrl)
}

// * test pour supprimer des données du sommaire/pas deployé sur le HTML-Je l'avait utilisé comme test
removeSummary(_id: string): Observable<any> {
    return this.http.delete<any>(`${this.detailsUrl}/${_id}`)
  

}



// * Balance à définir
// getBalance(): number {
//   let income = 0;
//   let expense = 0;
//   let incomeList = this.getIncomeList();
//   let expenseList = this.getExpenseList();

//   incomeList.forEach((element: Details) => {
//     income += element.montant;
//   }
//   );
//   expenseList.forEach((element: Details) => {
//     expense += element.montant;
//   }
//   );

//   let value = (income - expense);
//   this.balanceValue.next(value);
//   return income - expense;
// }


}
