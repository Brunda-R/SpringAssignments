import "js/web.jsx";

class _Main {
    static function main(args : string[]) : void {
        var document = dom.window.document;
        var text = document.createTextNode("Hello, user!");
        document.getElementById("hello").appendChild(text);
    }
}