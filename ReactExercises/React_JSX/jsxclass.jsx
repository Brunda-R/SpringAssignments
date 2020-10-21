class Point {
    var x = 0;
    var y = 0;
    function constructor() {
    	log("defult");
    }
    function constructor(x : number, y : number) {
    	log("x y");
        	this.set(x, y);
    }
    function constructor(other : Point) {
    	log("other");
	this.set(other);
    }
   function set(x : number, y : number) : void {
	this.x = x;
	this.y = y;
    }
    function set(other : Point) : void {
	this.set(other.x, other.y);
    }
    function show():void{
    	log(this.x);
    	log(this.y);
    }
}



class _Main{
    static function main(args : string[]) : void {
            var p=new Point();
            p.set(10,20);
            p.show();
    }
}