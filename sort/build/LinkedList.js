"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (this.head) {
            var tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
        else {
            this.head = node;
            return;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
