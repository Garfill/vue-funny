export function getScrollParent(target) {
  let element = target;
  if (!(element instanceof HTMLElement)) return window;
  while (element) {
    if (element === document.body || element === document.documentElement) {
      break;
    }
    if (!element.parentNode) {
      break;
    }
    if (/(scroll)|(auto)/.test(getStyleValue(element, 'overflow-x') + getStyleValue(element, 'overflow-y'))) {
      return element;
    }
    element = element.parentNode;
  }
  return window
}

export function getStyleValue(el, prop) {
  if (typeof getComputedStyle !== 'undefined') {
    return getComputedStyle(el, null).getPropertyValue(prop);
  } else {
    return el.style[prop];
  }
}

export function debounce(func, delay, context) {
  let timer = null
  return function() {
    context = context || this; // 复制执行上下文的副本，因为 setTimeout 总是在window 下
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, arguments)
    }, delay);
  }
}

export function throttle(func, wait, context) {
  let timer = null;
  return function() {
    context = context || this;
    if (!timer) {
      func.apply(context, arguments)
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    }
  }
}

export default {
  getScrollParent,
  getStyleValue,
}