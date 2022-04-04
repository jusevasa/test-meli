import { ResultItem } from 'types/result-item';

export interface IResultDataSource {
  getResults(query: string): Promise<ResultItem>;
}
