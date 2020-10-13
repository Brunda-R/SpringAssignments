package com.training;

import java.util.ArrayList;
import java.util.Iterator;

public class Student extends Person{
	private int numCourses;
	private ArrayList<String> courses;
	private ArrayList<Integer> grades;
	
	public Student() {
		super();
		System.out.println("Default Constructor of Student is called");
		numCourses=0;
		courses = new ArrayList<String>();
		grades = new ArrayList<Integer>();
	}

	public Student(String name, String address) {
		super(name, address);
		System.out.println("Parameterised Constructor of Student is called");
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

	public ArrayList<Integer> getGrades() {
		return grades;
	}

	public void setGrades(ArrayList<Integer> grades) {
		this.grades = grades;
	}

	@Override
	public String toString() {
		return "Student [ name = " + getName()+", address= "+getAddress()+", numCourses=" + numCourses + ", courses=" + courses + ", grades=" + grades + "]";
	}

	public void addCourseGrade(String course,int grade) {
		courses.add(course);
		grades.add(grade);
		numCourses+=1;
	}
	
	public void printGrades() {
		Iterator<Integer> itr=grades.iterator();
		while(itr.hasNext())
			System.out.println(itr.next());
	}
	
	public double getAverageGrade() {
		double total=0;
		Iterator<Integer> itr=grades.iterator();
		while(itr.hasNext())
			total+=itr.next();
		total/=numCourses;
		return total;
	}
	
	
}
