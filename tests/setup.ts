import '@testing-library/jest-dom/extend-expect';
let windowSpy: jest.SpyInstance;

if (global.window) {
  // need to mock this function to pass default values as 0 so that we can avoid NaN warning in some of components
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
