export interface ITextInput {
  type?: string;
  name?: string;
  required?: boolean;
  id?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
