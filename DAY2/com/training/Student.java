package com.training;

import java.util.Iterator;
import java.util.List;

public class Student {

	private String studName;
	private Address address;
	private List<String> classes;
	private List<Project> projects;

	public Student() {
		System.out.println("Default Constructor of Student is called");
	}

	public Student(String studName, Address address) {
		super();
		this.studName = studName;
		this.address = address;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		System.out.println("Setter of address is called");
		this.address = address;
	}

	public String getStudName() {
		System.out.println(studName);
		return studName;
	}

	public void setStudName(String studName) {
		System.out.println("Setter of studName is called");
		this.studName = studName;
	}
	
	public List<String> getClasses() {
		return classes;
	}

	public void setClasses(List<String> classes) {
		System.out.println("Setter of classes is called");
		this.classes = classes;
	}
	
	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		System.out.println("Setter of projects is called");
		this.projects = projects;
	}

	@Override
	public String toString() {
		String str = "";
		Iterator<String> itr = classes.iterator();
		while(itr.hasNext())
			str+=itr.next()+",";
		
		String str1="";
		Iterator<Project> itr1 = projects.iterator();
		while(itr1.hasNext())
			str1+=itr1.next()+" ";
		
		return "Student [studName=" + studName + ", address=" + address + ", classes= [" + str + "] projects= " + str1+"]";
	}
	
	
}
