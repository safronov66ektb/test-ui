(function(global) {
    var paths = {
        "rxjs/*": "node_modules/rxjs/bundles/Rx.min.js",
        "@angular/*": "node_modules/@angular/*"
    }

    var packages = { "app": {},
    'jw-bootstrap-switch-ng2': {
        main: './dist/index.js',
        defaultExtension: 'js'
    } };

    var angularModules = [
        "common",
        "compiler",
        "core",
        "platform-browser",
        "platform-browser-dynamic",
        "forms"
    ];

    var map = {
        'jw-bootstrap-switch-ng2': 'npm:jw-bootstrap-switch-ng2',
    };

    angularModules.forEach(function (pkg) {
        packages["@angular/" + pkg] = {
            main: "/bundles/" + pkg + ".umd.min.js"
        };
    });

    System.config({ 
        paths: paths,
        map: map, 
        packages: packages });
})(this);