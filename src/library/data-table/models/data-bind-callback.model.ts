import { DataTableQueryResult } from './data-table-query-result.model';
import { DataTableRequestParams } from './data-table-request-params.model';
import { Observable } from 'rxjs/Observable';

export type DataBindCallback = (params: DataTableRequestParams) => Observable<DataTableQueryResult<any>>;
