export interface Client {
  id: string;
  title: string;
  content: string;
}

export interface TodoStore {
  id?: string;
  selectedClient: Client;
  setSelectedClient: (client: Client) => void;
}
