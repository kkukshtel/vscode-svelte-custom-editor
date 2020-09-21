"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const customDataEditor_1 = require("./customDataEditor");
function activate(context) {
    // Register our custom editor providers
    context.subscriptions.push(customDataEditor_1.CustomDataEditorProvider.register(context));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map