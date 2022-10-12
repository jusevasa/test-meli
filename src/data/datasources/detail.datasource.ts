import { ENVIRONMENTS } from 'environments/environments';
import { HttpClient } from 'plugins/http-client';
import { ItemDescription } from 'types/description-item';
import { ItemDetail } from 'types/detail-item';
import { ErrorItem } from 'types/error-item';

export class ItemDataSource extends HttpClient {
  private readonly _url = `${ENVIRONMENTS.SERVICES.DETAIL.BASE}`;

  public constructor() {
    super(`${ENVIRONMENTS.API}`);
  }

  public get = (id: string): Promise<ItemDetail[] | ErrorItem> =>
    this.instance
      .get(`${this._url}${id}`)
      .then((data) => data)
      .catch((error) => error.response.data);

  public getDescription = (
    id: string
  ): Promise<ItemDescription[] | ErrorItem> =>
    this.instance
      .get(`${this._url}${id}${ENVIRONMENTS.SERVICES.DETAIL.DESCRIPTION}`)
      .then((data) => data)
      .catch((error) => error.response.data);
}
