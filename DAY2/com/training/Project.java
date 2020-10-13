package com.training;

public class Project {
	
	private String name;
	private String technology;
	private String mentor;
	private int teamCount;
	
	public Project() {
		System.out.println("Default Constructor of Project is called");
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTechnology() {
		return technology;
	}
	public void setTechnology(String technology) {
		this.technology = technology;
	}
	public String getMentor() {
		return mentor;
	}
	public void setMentor(String mentor) {
		this.mentor = mentor;
	}
	public int getTeamCount() {
		return teamCount;
	}
	public void setTeamCount(int teamCount) {
		this.teamCount = teamCount;
	}
	@Override
	public String toString() {
		return "Project [name=" + name + ", technology=" + technology + ", mentor=" + mentor + ", teamCount="
				+ teamCount + "]";
	}

}
