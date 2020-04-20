// tslint:disable-next-line:quotemark
import { Country } from "./country";

export interface DataResponse {
  error: boolean;
  statusCode: number;
  message: string;
  data: {
    lastChecked: string;
    covid19Stats: Array<Country>;
  };
}
