"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { hotjar } from "react-hotjar";
import axios, { AxiosError, AxiosResponse } from "axios";
import React from "react";
import { useViewEvent } from "@/hooks/use-view-event";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1_000,
      refetchOnWindowFocus: false,
    },
  },
});

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const HJID = 4961250;
const HJSV = 6;

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [client] = React.useState(() => new QueryClient());
  useViewEvent();

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      hotjar.initialize({
        id: HJID,
        sv: HJSV,
      });
    }
  }, []);

  return (
    <QueryClientProvider client={client}>
      {children}
      <GoogleAnalytics gaId="G-K20DRKXNTC" />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
