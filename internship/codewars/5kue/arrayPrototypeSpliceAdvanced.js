var vm = require("vm");
var sandbox = vm.createContext({});
vm.runInContext("var splice = Array.prototype.splice", sandbox);
Array.prototype.splice = sandbox.splice;