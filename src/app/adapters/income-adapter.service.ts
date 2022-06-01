import { Injectable } from '@angular/core';
import { CanonicDTO, Revenu, RevenuDTO } from '../interface/revenu';

@Injectable({
  providedIn: 'root',
})
export class IncomeAdapterService {
  constructor() {}

  public createDTO(revenu: Revenu): CanonicDTO<RevenuDTO> {
    const revenuDTO: RevenuDTO = {
      montant: Number(revenu.montant),
      description: revenu.description,
      date: new Date(revenu.date),
    };

    return {
      input: revenuDTO,
    };
  }
}
