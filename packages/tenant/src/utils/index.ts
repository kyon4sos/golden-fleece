import loadable from '@loadable/component';

// function load(fn: any, options?: any) {
//     const Component = loadable(fn, options)
//     Component.preload = fn.requireAsync || fn;
//     return Component
// }

export const lazyLoad = (fun) => loadable(fun)