export function throttle(cb, wait) {
  let waiting = false;

  return function () {
    if (!waiting) {
      cb.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, wait);
    }
  };
}
