export class Details {
    _id!: string;
    description!: string;
    montant!: number;
    date!: Date;
    revenu!: string;
    depense!: string
    isIncome: boolean = false;
    createdAt!: string;
    updatedAt!: string;
}

// * Ce code est reservé à l'appel des données de l'api canonic


export type DetailsDTO = Omit<Details, "_id" | "createdAt" | "updatedAt" | "date"> & {
    date: Date;
};

export interface CanonicDTO<T> {
    input: T;
}































