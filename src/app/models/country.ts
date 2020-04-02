export interface Country {
  city?: string;
  province?: string;
  country: string;
  lastUpdate: string;
  keyId?: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}
