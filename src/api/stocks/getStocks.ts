import { HTTP } from "@/api/http";

export interface Stock {
  stockId: string;
  ticker: string;
  companyName: string;
  sectorName: string;
  exchange: string;
  industry: string;
  price: number;
  volume: number;
  logoUrl: string;
}

export const getStocks = async (keyword: string) => {
  const res = await HTTP.get<Stock[]>(`/api/stocks/search?keyword=${keyword}&pageNumber=${1}&pageSize=${20}`);

  return res.data;
};
