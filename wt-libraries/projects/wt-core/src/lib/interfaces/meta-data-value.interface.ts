import { IdValue } from './id-value.interface';

export interface MetaDataWithValue {
  hidden?: string;
  readonly?: string;
  mandatory?: string;
  values: Array<IdValue>;
}
