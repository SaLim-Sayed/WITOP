"use client";
import { ReactNode, useEffect, useState } from "react";

const ClientHydration = ({
  children,
  LoaderComponent,
}: {
  children: ReactNode;
  LoaderComponent: ReactNode;
}) => {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? children : LoaderComponent}</>;
};

export default ClientHydration;
