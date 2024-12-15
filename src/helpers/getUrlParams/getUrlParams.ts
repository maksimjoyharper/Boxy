export function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const u = params.get("u");
  const v = params.get("v");
  const p = params.get("p");

  return { u, v, p };
}
