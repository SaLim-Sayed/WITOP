import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  // Navigate to a specific path
  const navigateTo = (path: string) => {
    router.push(path);
  };

  // Navigate back to the previous page
  const goBack = () => {
    router.back();
  };

  // Navigate to the home page
  const goToHome = () => {
    router.push("/");
  };

  // Navigate to a specific page with query parameters
  const navigateWithQuery = (path: string, query: Record<string, any>) => {
    const queryString = new URLSearchParams(query).toString();
    const fullPath = `${path}?${queryString}`;
    router.push(fullPath);
  };

  return {
    navigateTo,
    goBack,
    goToHome,
    navigateWithQuery,
  };
};
