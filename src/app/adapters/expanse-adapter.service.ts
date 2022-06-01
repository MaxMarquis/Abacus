import { Injectable } from '@angular/core';
import { CanonicDTO, Depense, DepenseDTO } from '../interface/depense';

@Injectable({
  providedIn: 'root',
})
export class ExpanseAdapterService {
  constructor() {}

  public createDTO(income: Depense): CanonicDTO<DepenseDTO> {
    const revenuDTO: DepenseDTO = {
      montant: Number(income.montant),
      description: income.description,
      date: new Date(income.date),
    };

    return {
      input: revenuDTO,
    };
  }
}
