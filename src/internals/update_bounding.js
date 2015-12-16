/**
 * @module
 * @prototype {Function} __updateBounding
 * @dependencies [ SmoothScrollbar, selectors, #__readonly ]
 */

import '../internals';
import { SmoothScrollbar } from '../smooth_scrollbar';
import { selectors } from '../shared/selectors';

export { SmoothScrollbar };

function __updateBounding() {
    const { container } = this.targets;
    const { top, right, bottom, left } = container.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;

    this.__readonly('bounding', {
        top: Math.max(top, 0),
        right: Math.min(right, innerWidth),
        bottom: Math.min(bottom, innerHeight),
        left:Math.max(left, 0)
    });
};

Object.defineProperty(SmoothScrollbar.prototype, '__updateBounding', {
    value: __updateBounding,
    writable: true,
    configurable: true
});
