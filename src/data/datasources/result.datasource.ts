import { ENVIRONMENTS } from 'environments/environments';
import { HttpClient } from 'plugins/http-client';
import { GetResponseResult } from 'types/result-item';

export class ResultDataSource extends HttpClient {
  private readonly _url = `${ENVIRONMENTS.SERVICES.SEARCH}`;

  public constructor() {
    super(`${ENVIRONMENTS.API}`);
  }

  public getResults = (query: string): Promise<GetResponseResult> =>
    this.instance
      .get(`${this._url}${query}`)
      .then((data) => {
        return data})
      .catch((error) => error.response.data);
}
