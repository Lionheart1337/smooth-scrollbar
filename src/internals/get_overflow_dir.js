/**
 * @module
 * @prototype {Function} __getOverflowDir
 */

import { SmoothScrollbar } from '../smooth_scrollbar';
import { getPosition } from '../utils/index';

export { SmoothScrollbar };

function __getOverflowDir(evt, edge = 0) {
    const { top, right, bottom, left } = this.bounding;
    const { x, y } = getPosition(evt);

    const res = {
        x: 0,
        y: 0
    };

    if (x === 0 && y === 0) return res;

    if (x > right - edge) {
        res.x = (x - right + edge) / 100;
    } else if (x < left + edge) {
        res.x = (x - left - edge) / 100;
    }

    if (y > bottom - edge) {
        res.y = (y - bottom + edge) / 100;
    } else if (y < top + edge) {
        res.y = (y - top - edge) / 100;
    }

    return res;
};

Object.defineProperty(SmoothScrollbar.prototype, '__getOverflowDir', {
    value: __getOverflowDir,
    writable: true,
    configurable: true
});