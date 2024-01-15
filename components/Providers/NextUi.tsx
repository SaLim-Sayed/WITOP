"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

export default function NextUi({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          {children}{" "}
        </QueryClientProvider>
      </ChakraProvider>
    </NextUIProvider>
  );
}
