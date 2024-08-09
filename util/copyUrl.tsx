export const copyUrlWithoutSearchParams = (
  setCopied: (arg: boolean) => void
): void => {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);


  navigator.clipboard
    .writeText(url.href)
    .then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 6000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      setCopied(false);
    });
};
