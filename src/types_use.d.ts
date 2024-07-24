export interface Client {
  id: string; // UUID
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
  state?: boolean;
  created_at?: string; // Date in string format
  updated_at?: string; // Date in string format
}

export interface TableUseDistribution {
  header_text: string;
  value: string;
}

export interface PropsInputText {
  title: string;
  status_error?: boolean;
  error?: string;
  onChange: (aux: any) => void;
  value: any;
  key_value: string;
}

export interface PropsInputRadio extends PropsInputText {
  checked: boolean;
  name: string;
}
