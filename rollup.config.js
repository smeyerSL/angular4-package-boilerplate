export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ng4npmboilerplate.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.ng4npmboilerplate',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/http': 'ng.http',
        'rxjs/Observable': 'Rx'
    }
}