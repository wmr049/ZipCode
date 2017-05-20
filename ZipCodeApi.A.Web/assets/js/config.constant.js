'use strict';

/**
 * Config constant
 */

var serviceBase = 'http://localhost:51055/';
app.constant('ngAuthSettings', {
	apiServiceBaseUri: serviceBase,
	clientId: 'ngAuthApp'
});

app.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});


app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Javascript Plugins
        'modernizr': ['/bower_components/js/modernizr.js'],
        'moment': ['/bower_components/js/moment.min.js'],
        'spin': '/bower_components/js/spin.js',

        //*** jQuery Plugins
        'perfect-scrollbar-plugin': ['/bower_components/js/perfect-scrollbar.jquery.min.js', '/bower_components/css/perfect-scrollbar.min.css'],
        'ladda': ['/bower_components/js/ladda.min.js', '/bower_components/css/ladda-themeless.min.css'],
        'sweet-alert': ['/bower_components/js/sweet-alert.min.js', '/bower_components/css/sweet-alert.css'],
        'chartjs': '/bower_components/js/Chart.min.js',
        'jquery-sparkline': '/bower_components/js/jquery.sparkline.min.js',
        'ckeditor-plugin': '/bower_components/js/ckeditor.js',
        'jquery-nestable-plugin': ['/bower_components/js/jquery.nestable.js'],
        'touchspin-plugin': ['/bower_components/js/jquery.bootstrap-touchspin.min.js', '/bower_components/css/jquery.bootstrap-touchspin.min.css'],

        //*** Controllers
        //'mainPageCtrl': 'assets/js/controllers/mainPageCtrl.js',
    },
    modules: [{
        name: 'angularMoment',
        files: ['/bower_components/js/angular-moment.min.js']
    }, {
        name: 'toaster',
        files: ['/bower_components/js/toaster.js', '/bower_components/css/toaster.css']
    }, {
        name: 'angularBootstrapNavTree',
        files: ['/bower_components/js/abn_tree_directive.js', '/bower_components/css/abn_tree.css']
    }, {
        name: 'angular-ladda',
        files: ['/bower_components/js/angular-ladda.min.js']
    }, {
        name: 'ngTable',
        files: ['/bower_components/js/ng-table.min.js', '/bower_components/css/ng-table.min.css']
    }, {
        name: 'ui.select',
        files: ['/bower_components/js/select.min.js', '/bower_components/css/select.min.css', '/bower_components/css/select2.min.css', '/bower_components/css/select2-bootstrap.min.css', '/bower_components/css/selectize.bootstrap3.css']
    }, {
        name: 'ui.mask',
        files: ['/bower_components/js/mask.min.js']
    }, {
        name: 'ngImgCrop',
        files: ['/bower_components/js/ng-img-crop.js', '/bower_components/css/ng-img-crop.css']
    }, {
        name: 'angularFileUpload',
        files: ['/bower_components/js/angular-file-upload.min.js']
    }, {
        name: 'ngAside',
        files: ['/bower_components/js/angular-aside.min.js', '/bower_components/css/angular-aside.min.css']
    }, {
        name: 'truncate',
        files: ['/bower_components/js/truncate.js']
    }, {
        name: 'oitozero.ngSweetAlert',
        files: ['/bower_components/js/SweetAlert.min.js']
    }, {
        name: 'monospaced.elastic',
        files: ['/bower_components/js/elastic.js']
    }, {
        name: 'ngMap',
        files: ['/bower_components/js/ng-map.min.js']
    }, {
        name: 'tc.chartjs',
        files: ['/bower_components/js/tc-angular-chartjs.min.js']
    }, {
        name: 'flow',
        files: ['/bower_components/js/ng-flow-standalone.min.js']
    }, {
        name: 'uiSwitch',
        files: ['/bower_components/js/angular-ui-switch.min.js', '/bower_components/css/angular-ui-switch.min.css']
    }, {
        name: 'ckeditor',
        files: ['/bower_components/js/angular-ckeditor.min.js']
    }, {
        name: 'mwl.calendar',
        files: ['/bower_components/js/angular-bootstrap-calendar-tpls.js', '/bower_components/css/angular-bootstrap-calendar.min.css', 'assets/js/config/config-calendar.js']
    }, {
        name: 'ng-nestable',
        files: ['/bower_components/js/angular-nestable.js']
    }, {
        name: 'vAccordion',
        files: ['/bower_components/js/v-accordion.min.js', '/bower_components/css/v-accordion.min.css']
    }, {
        name: 'xeditable',
        files: ['/bower_components/js/xeditable.min.js', '/bower_components/css/xeditable.css', 'assets/js/config/config-xeditable.js']
    }, {
        name: 'checklist-model',
        files: ['/bower_components/js/checklist-model.js']
    }, {
        name: 'angular-notification-icons',
        files: ['/bower_components/js/angular-notification-icons.min.js', '/bower_components/css/angular-notification-icons.min.css']
    }]
});