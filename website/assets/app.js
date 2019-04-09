/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../vendor/medtrainer/admincore-bundle/Resources/assets/admin-core.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

import DT from 'front-widgets/src/components/DataTable';
DT.load = function () {

};
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    components: {
        'data-table': DT
    }
});
