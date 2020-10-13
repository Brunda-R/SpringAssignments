package com.training.org;

public class Organization {
	private String orgName;
	private String location;
	private int noEmp;
	
	public Organization(){
		System.out.println("Default Constructor is called");
	}
	
	public Organization(String orgName, String location, int noEmp) {
		super();
		System.out.println("Parameterized Constructor is called");
		this.orgName = orgName;
		this.location = location;
		this.noEmp = noEmp;
	}

	public String getOrgName() {
		
		return orgName;
	}

	public void setOrgName(String orgName) {
		System.out.println("Setter is called");
		this.orgName = orgName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getNoEmp() {
		return noEmp;
	}

	public void setNoEmp(int noEmp) {
		this.noEmp = noEmp;
	}

	@Override
	public String toString() {
		return "Organization [orgName=" + orgName + ", location=" + location + ", noEmp=" + noEmp + "]";
	}
	

}
