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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.url = "http://localhost:3000/data/books.json";
    }
    BookService.prototype.getBooksWithObservable = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    BookService.prototype.getBooksWithPromise = function () {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    BookService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    BookService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs_1.Observable.throw(error.message || error);
    };
    BookService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    BookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map