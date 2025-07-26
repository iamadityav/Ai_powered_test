// src/utils/debounce.ts
export function debounce<F extends (...args: any[]) => void>(func: F, delay = 300): F {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  } as F;
}
