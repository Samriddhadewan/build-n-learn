// Enum
// Set of fixed string Leteral ek jaigai rakhe
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
