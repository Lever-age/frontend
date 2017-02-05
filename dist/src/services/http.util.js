"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/observable/map');
var HttpUtil = (function () {
    function HttpUtil(http) {
        this.http = http;
    }
    HttpUtil.prototype.doPost = function (endPointUrl, requestObject, headers) {
        return Observable_1.Observable.of(requestObject);
        //     return this.http.post(
        //         this.getUrl(endPointUrl),
        //         this.getRequestObjectAsString(requestObject),
        //     { headers: this.initializeDefaultHeaders(headers) })
        //     ,map<T>((response: Response) => {
        //         let toReturn: T = response.json();
        //         return toReturn;
        //     })
        //     .share()
        //     .catch<T>((err: Response) => this.handleError(err));
    };
    HttpUtil.prototype.doMockPost = function (reqObject, delayLength) {
        return Observable_1.Observable.of(reqObject);
        //     delayLength = delayLength || 1000;
        //     let data = Observable.of(<T>reqObject)
        //         .delay(delayLength)
        //         .do(() => console.log('have mock data'));
        //     return data
    };
    HttpUtil = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpUtil);
    return HttpUtil;
}());
exports.HttpUtil = HttpUtil;
//# sourceMappingURL=http.util.js.map