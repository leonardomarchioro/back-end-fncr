export interface ICreateTransaction {
  title: string;
  description: string;
  date: string;
  value: number;
  category: string;
  type: typeTransaction;
}

enum typeTransaction {
  entry = "entry",
  exit = "exit",
}

export interface IQueryParams {
  category?: string;
  type?: typeTransaction;
  ltDate?: string;
  gtDate?: string;
}
