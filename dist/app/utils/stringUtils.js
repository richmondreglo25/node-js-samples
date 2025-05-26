"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    isBlank: (value) => value === "" || undefined === value || value.trim().length === 0,
    isEmpty: (value) => value === "" && undefined !== value && value.trim().length === 0
};
