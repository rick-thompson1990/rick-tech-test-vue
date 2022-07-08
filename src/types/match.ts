export interface Contract {
  id: string;
  name: string;
  odds: string;
}

export interface Match {
  competition: string;
  contracts: Array<Contract>;
}
