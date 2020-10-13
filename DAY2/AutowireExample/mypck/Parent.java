package mypck;

public class Parent {
	private Child child;
	
	public Parent() {
		System.out.println("Parent class default constructor is called");
	}

	public Child getChild() {
		return child;
	}

	public void setChild(Child child) {
		this.child = child;
	}
	
	public void displayParentDetails() {
		System.out.println("Parent Details");
		child.displayChildDetails();
	}

}
