"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios, { AxiosError, AxiosResponse } from "axios";
import React from "react";

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

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [client] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
