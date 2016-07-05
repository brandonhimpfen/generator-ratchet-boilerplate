'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var RatchetBoilerplateGenerator = yeoman.generators.Base.extend({

    prompting: function() {
        var done = this.async();

        var prompts = [{
            name: 'appName',
            message: 'What is your mobile app\'s name?'
        }];

        this.prompt(prompts, function(props) {
            this.appName = props.appName;

            done();
        }.bind(this));

    },

    structure: function() {
        this.mkdir('app');
        this.mkdir('app/css');
        this.mkdir('app/fonts');
        this.mkdir('app/js');
    },

    files: function() {
        var context = {
            site_name: this.appName
        };

        this.template("_index.html", "app/index.html", context);

        this.copy("ratchet.css", "app/ratchet.css");
        this.copy("ratchet.min.css", "app/ratchet.min.css");
        this.copy("ratchet-theme-android.css", "app/ratchet-theme-android.css");
        this.copy("ratchet-theme-android.min.css", "app/ratchet-theme-android.min.css");
        this.copy("ratchet-theme-ios.css", "app/ratchet-theme-ios.css");
        this.copy("ratchet-theme-ios.min.css", "app/ratchet-theme-ios.min.css");

        this.copy("ratchicons.eot", "app/ratchicons.eot");
        this.copy("ratchicons.svg", "app/ratchicons.svg");
        this.copy("ratchicons.ttf", "app/ratchicons.ttf");
        this.copy("ratchicons.woff", "app/ratchicons.woff");

        this.copy("ratchet.js", "app/ratchet.js");
        this.copy("ratchet.min.js", "app/ratchet.min.js");

        this.copy("LICENSE", "app/LICENSE");
        this.copy("README.md", "app/README.md");

    },

    end: function () {

    }

});

module.exports = RatchetBoilerplateGenerator;
