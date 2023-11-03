import '@testing-library/jest-dom/extend-expect';
let windowSpy: jest.SpyInstance;

// global.window functions may be unavailable and
// must be mocked in jest envirionment

if (global.window) {
  global.DOMRect = {
    fromRect: () => ({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    }),
  };

  global.ResizeObserver = class ResizeObserver {
    constructor(cb) {
      this.cb = cb;
    }
    observe() {
      this.cb([{ borderBoxSize: { blockSize: 0, inlineSize: 0 } }]);
    }
    unobserve() {}
  };

  window.HTMLElement.prototype.scrollTo = () => {};

  window.HTMLElement.prototype.getBoundingClientRect = () => ({
    height: 1000,
    width: 1600,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });

  window.open = jest.fn();



  const originalGetComputedStyle = window.getComputedStyle;

  const getComputedStyle = (...args: any[]) => {
    const cssStyleDeclaration = originalGetComputedStyle(args[0], args[1]);
    cssStyleDeclaration.setProperty('padding-left', '0');
    cssStyleDeclaration.setProperty('padding-right', '0');
    cssStyleDeclaration.setProperty('padding-top', '0');
    cssStyleDeclaration.setProperty('padding-bottom', '0');
    cssStyleDeclaration.setProperty('margin-left', '0');
    cssStyleDeclaration.setProperty('margin-right', '0');
    cssStyleDeclaration.setProperty('margin-top', '0');
    cssStyleDeclaration.setProperty('margin-bottom', '0');
    cssStyleDeclaration.setProperty('border-left-width', '0');
    cssStyleDeclaration.setProperty('border-right-width', '0');
    cssStyleDeclaration.setProperty('border-top-width', '0');
    cssStyleDeclaration.setProperty('border-bottom-width', '0');
    return cssStyleDeclaration;
  };

  windowSpy = jest.spyOn(window, 'getComputedStyle');
  windowSpy.mockImplementation(getComputedStyle);
}
