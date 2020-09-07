import { getScrollParent, debounce } from '@/util/index.js'
const cache = {};
let puid = 0;
let uid = 0;

function observeFunc(target) {
  const scrollParent = getScrollParent(target);
  if (!scrollParent.puid) {
    cache[++puid] = {
      parent: scrollParent,
      handle: null,
      children: []
    };
    scrollParent.puid = puid
  }
  target.uid = ++uid;
  target.puid = puid;

  const wrappedHandle = debounce(function() {
    _scrollHandle(scrollParent)
  }, 300)

  if (cache[puid].children.length == 0) {
    cache[puid].handle = wrappedHandle;
    scrollParent.addEventListener('scroll', cache[puid].handle, { passive: true })
    window.addEventListener('scroll', cache[puid].handle, { passive: true })
  }
  cache[puid].children.push(target)
  wrappedHandle()
}

function checkInView(element, parent) {
  parent = parent || window;
  const rect = element.getBoundingClientRect();
  const parentRect = parent == window ? {
    top: window.innerHeight,
    left: window.innerWidth,
  } : {
    top: parent.getBoundingClientRect().bottom,
    left: parent.getBoundingClientRect().right,
  }
  return (rect.top < parentRect.top) && 
    (rect.left < parentRect.left)
}

function _scrollHandle(puid) {
  for (let i = 0; i < cache[puid].children.length; i++) {
    const element = cache[puid].children[i]
    if (checkInView(element, cache[puid].parent)) {
      showMark(element);
      cache[puid].children.splice(i, 1);
      i--;
    }
  }
  if (cache[puid].children.length == 0) {
    removeEventListener(puid);
  }
}

function showMark(element) {
  const size = element.getAttribute('data-mark-size');
  const duration = element.getAttribute('data-mark-duration');
  element.style['transition-duration'] = `${duration}s`;
  element.style['background-size'] = `100% ${size}%`;
}

function removeEventListener(puid) {
  let parent = cache[puid].parent
  parent.removeEventListener('scroll', cache[puid].handle)
  window.removeEventListener('scroll', cache[puid].handle)
  delete cache[puid]
}

function unobserveFunc(target) {
  let puid = target.puid;
  if (cache[puid]) {
    let index = cache[puid].children.findIndex(child => {
      return child.uid == target.uid
    })
    if (index > -1) {
      cache[puid].children.splice(index, 1);
    }
    if (cache[puid].children.length == 0) {
      removeEventListener(puid);
    }
  }
}

let observer;
if (IntersectionObserver) {
  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showMark(entry.target);
        observer.unobserve(entry.target);
      }
    })
  })
} else {
  observer = {
    observe: observeFunc,
    unobserve: unobserveFunc
  }
}

export default observer