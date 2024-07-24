export function setCookie(name: string, value: string, days: number) {
  if (typeof window === "undefined") return null;

  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  document.cookie = cookie;
}

export function getCookie(name: string) {
  if (typeof window === "undefined") return null;

  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
