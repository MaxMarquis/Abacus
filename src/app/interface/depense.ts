export class Depense {
  _id!: string;
  description!: string;
  montant!: number;
  date!: Date;
  createdAt!: string;
  updatedAt!: string;
}

// * Ce code est reservé à l'appel des données de l'api canonic

export type DepenseDTO = Omit<
  Depense,
  '_id' | 'createdAt' | 'updatedAt' | 'date'
> & {
  date: Date;
};

export interface CanonicDTO<T> {
  input: T;
}

export interface ApiResponse<T> {
  data: T;
}
