"use strict";
var db = {
    filterUsers: function (filter) {
        var user1 = {
            admin: true
        };
        var user2 = {
            admin: false
        };
        return [user1, user2];
    }
};
//不能使用箭头函数
var admins = db.filterUsers(function () {
    return this.admin;
});
console.log(admins);
