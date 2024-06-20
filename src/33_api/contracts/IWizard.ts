export interface IWizard {
  elixirs: Elixir[];
  id: string;
  firstName: string;
  lastName: string;
}

export interface Elixir {
  id: string;
  name: string;
}
