/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Payout Server API
 * Payout Server API 명세서입니다.
 * OpenAPI spec version: 1.0.0
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type {
  DividendRequest,
  MonthlyDividendResponse,
  SearchStockParams,
  SectorRatioRequest,
  SectorRatioResponse,
  StockDetailResponse,
  StockResponse,
  YearlyDividendResponse,
} from "./endpoint.schemas";

/**
 * @summary 섹터 비중 분석
 */
export const findSectorRatios = <TData = AxiosResponse<SectorRatioResponse[]>>(
  sectorRatioRequest: SectorRatioRequest,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/api/stocks/sector-ratio`, sectorRatioRequest, options);
};

/**
 * @summary 연간 배당금 조회
 */
export const getYearlyDividends = <TData = AxiosResponse<YearlyDividendResponse>>(
  dividendRequest: DividendRequest,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/api/dividends/yearly`, dividendRequest, options);
};

/**
 * @summary 월별 배당금 조회
 */
export const getMonthlyDividends = <TData = AxiosResponse<MonthlyDividendResponse[]>>(
  dividendRequest: DividendRequest,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/api/dividends/monthly`, dividendRequest, options);
};

/**
 * @summary 종목 상세 조회
 */
export const getStockByTicker = <TData = AxiosResponse<StockDetailResponse>>(
  ticker: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/api/stocks/${ticker}`, options);
};

/**
 * @summary 티커명/회사명 검색
 */
export const searchStock = <TData = AxiosResponse<StockResponse[]>>(
  params: SearchStockParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/api/stocks/search`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export type FindSectorRatiosResult = AxiosResponse<SectorRatioResponse[]>;
export type GetYearlyDividendsResult = AxiosResponse<YearlyDividendResponse>;
export type GetMonthlyDividendsResult = AxiosResponse<MonthlyDividendResponse[]>;
export type GetStockByTickerResult = AxiosResponse<StockDetailResponse>;
export type SearchStockResult = AxiosResponse<StockResponse[]>;