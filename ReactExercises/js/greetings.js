// console.log("Hello User");
class HealthDetails{
	constructor(height,weight){
		this.height=height;
		this.weight=weight;
	}
	displayHealthDetails(){
		console.log("Height:"+this
			.height+" Weight:"+this.weight);
	}
}
class Employee extends HealthDetails{
	constructor(name,id,height,weight){
		super(height,weight);
		this.name=name;
		this.id=id;
	}
	printDetails(){
		console.log("Hi "+this.name+".Your id is "+this.id);
		this.displayHealthDetails();
		
	}
}

var obj=new Employee("John",12345,5.5,55);
obj.printDetails();