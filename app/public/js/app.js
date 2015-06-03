'use strict';

var app = angular.module('app', [])
	.factory('GUI', function() {
        return require('nw.gui');
    })
    .factory('Window', ['GUI', function(gui) {
        return gui.Window.get();
    }]).run(['GUI', 'Window', function(GUI, Window) {
 
        var nativeMenuBar = new GUI.Menu({
            type: "menubar"
        });
        try {
            nativeMenuBar.createMacBuiltin("app");
            Window.menu = nativeMenuBar;
        } catch (ex) {
        }
    }]);