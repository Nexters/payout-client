/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Payout Server API
 * Payout Server API 명세서입니다.
 * OpenAPI spec version: 1.0.0
 */
export type GetBiggestDividendYieldStocksParams = {
  /**
   * sector value
   */
  sector: string;
  /**
   * page number(start with 1) for pagination
   */
  pageNumber: number;
  /**
   * page size for pagination
   */
  pageSize: number;
};

export type GetUpComingDividendStocksParams = {
  /**
   * sector value
   */
  sector: string;
  /**
   * page number(start with 1) for pagination
   */
  pageNumber: number;
  /**
   * page size for pagination
   */
  pageSize: number;
};

export type SearchStockParams = {
  /**
   * ticker name or company name of stock ex) APPL, APPLE
   */
  keyword: string;
  /**
   * page number(start with 1) for pagination
   */
  pageNumber: number;
  /**
   * page size for pagination
   */
  pageSize: number;
};

export interface SingleStockDividendYieldResponse {
  dividendYield: number;
  lastModifiedAt?: string;
  logoUrl: string;
  stockId: string;
  ticker: string;
}

export interface StockDividendYieldResponse {
  dividends: SingleStockDividendYieldResponse[];
  lastModifiedAt: string;
}

export interface SingleUpcomingDividendResponse {
  exDividendDate: string;
  lastModifiedAt?: string;
  logoUrl: string;
  stockId: string;
  ticker: string;
}

export interface UpcomingDividendResponse {
  dividends: SingleUpcomingDividendResponse[];
  lastModifiedAt: string;
}

export type StockDetailResponseDividendMonthsItem =
  (typeof StockDetailResponseDividendMonthsItem)[keyof typeof StockDetailResponseDividendMonthsItem];

export const StockDetailResponseDividendMonthsItem = {
  JANUARY: "JANUARY",
  FEBRUARY: "FEBRUARY",
  MARCH: "MARCH",
  APRIL: "APRIL",
  MAY: "MAY",
  JUNE: "JUNE",
  JULY: "JULY",
  AUGUST: "AUGUST",
  SEPTEMBER: "SEPTEMBER",
  OCTOBER: "OCTOBER",
  NOVEMBER: "NOVEMBER",
  DECEMBER: "DECEMBER",
} as const;

export interface StockDetailResponse {
  companyName: string;
  dividendMonths: StockDetailResponseDividendMonthsItem[];
  dividendPerShare: number;
  dividendYield: number;
  earliestPaymentDate: string;
  exchange: string;
  exDividendDate: string;
  industry: string;
  lastModifiedAt: string;
  logoUrl: string;
  price: number;
  sectorName: string;
  sectorValue: string;
  stockId: string;
  ticker: string;
  volume: number;
}

export interface SingleMonthlyDividendResponse {
  dividend: number;
  logoUrl: string;
  share: number;
  ticker: string;
  totalDividend: number;
}

export interface MonthlyDividendResponse {
  dividends: SingleMonthlyDividendResponse[];
  month: number;
  totalDividend: number;
  year: number;
}

export interface SingleYearlyDividendResponse {
  logoUrl: string;
  share: number;
  ticker: string;
  totalDividend: number;
}

export interface YearlyDividendResponse {
  dividends: SingleYearlyDividendResponse[];
  totalDividend: number;
}

export interface DividendRequest {
  tickerShares: TickerShare[];
}

export interface StockResponse {
  companyName: string;
  exchange: string;
  industry: string;
  logoUrl: string;
  price: number;
  sectorName: string;
  sectorValue: string;
  stockId: string;
  ticker: string;
  volume: number;
}

export interface StockShareResponse {
  share: number;
  stockResponse: StockResponse;
}

export interface SectorRatioResponse {
  sectorName: string;
  sectorRatio: number;
  sectorValue: string;
  stockShares: StockShareResponse[];
}

export interface ErrorResponse {
  code?: number;
  message?: string;
}

export interface TickerShare {
  share: number;
  ticker: string;
}

export interface SectorRatioRequest {
  tickerShares: TickerShare[];
}
