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
