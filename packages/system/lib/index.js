// Bundled with Packemon: https://packemon.dev
// Platform: browser, Support: stable, Format: lib
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

const React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null);

  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }

  n.default = e;
  return Object.freeze(n);
}

const React__namespace = /*#__PURE__*/_interopNamespace(React);
/**
 * Creates a type-safe component with the `as` prop and `React.forwardRef`.
 *
 * Inspired by ariakit and chakra-ui.
 */


function createComponent(component) {
  return /*#__PURE__*/React__namespace.forwardRef(component);
}

exports.createComponent = createComponent;
//# sourceMappingURL=index.js.map
