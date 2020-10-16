package com.training.org;

import java.util.List;
//import javax.management.relation.Role;

public class User {
	private String email;
	private String password;
	private String phoneNumber;
	private Address address;
	private boolean verified;
	private List<Role> roles;
	private boolean enabled;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public boolean isVerified() {
		return verified;
	}
	public void setVerified(boolean verified) {
		this.verified = verified;
	}
	public List<Role> getRoles() {
		return roles;
	}
	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	@Override
	public String toString() {
		return "User [email=" + email + ", password=" + password + ", phoneNumber=" + phoneNumber + ", address="
				+ address + ", verified=" + verified + ", roles=" + roles + ", enabled=" + enabled + "]";
	}
	
	
}

class Address{
	private String city;
	private String state;
	private int pincode;
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	
}

class Role{
	private String name;

	public void setName(String name) {
		this.name=name;
	}
	
}