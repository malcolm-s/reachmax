/// <reference path="../lib/typings/requirejs/require.d.ts" />

require.config({
    baseUrl: "/Source/",
    paths: {
        "knockout": "lib/knockout-3.2.0.debug",
        "jquery": "lib/jquery-2.1.1.min"
    },
    shim: {
        knockout: {
            exports: "ko",
            deps: ["jquery"]
        },
        jquery: {
            exports: "$"
        }
    }
});

require(["views/main"]);