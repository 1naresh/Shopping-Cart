import angular from 'angular';
import uirouter from 'angular-ui-router';
import config from './config';
import userService from './userService';
import './css/bootstrap.css';
import './css/style.css';
angular.module("app",[uirouter,require("ngstorage-webpack")])
    .config(config)
    .service("userService",userService)