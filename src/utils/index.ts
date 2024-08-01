export const handleDownload = (url: string, filename = "") => {
  const link = document.createElement("a");
  link.download = "true";
  link.target = "_self";
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
