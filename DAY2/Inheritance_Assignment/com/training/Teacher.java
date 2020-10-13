package com.training;

import java.util.ArrayList;
import java.util.Iterator;

public class Teacher extends Person{
	private int numCourses;
	private ArrayList<String> courses;

	
	public Teacher() {
		super();
		System.out.println("Default Constructor of Teacher is called");
		numCourses=0;
		courses = new ArrayList<String>();
	}

	public Teacher(String name, String address) {
		super(name, address);
		System.out.println("Parameterised Constructor of Teacher is called");
	}
	
	public int getNumCourses() {
		return numCourses;
	}

	public void setNumCourses(int numCourses) {
		this.numCourses = numCourses;
	}

	public ArrayList<String> getCourses() {
		return courses;
	}

	public void setCourses(ArrayList<String> courses) {
		this.courses = courses;
	}
	
	@Override
	public String toString() {
		return "Teacher [ name = " + getName()+", address= "+getAddress()+", numCourses=" + numCourses + ", courses=" + courses + "]";
	}

	public boolean addCourse(String course) {
		if(courses.contains(course))
			return false;
		courses.add(course);
		numCourses+=1;
		return true;
	}
	
	public boolean removeCourse(String course) {
		if(courses.contains(course)) {
			courses.remove(course);
			numCourses-=1;
			return true;
		}
		return false;
	}
		
	
}
