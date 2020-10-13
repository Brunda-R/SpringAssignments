package com.training;

public class Address {
	private String streetName;
	private String cityName;
	private int pincode;
	public Address() {
		System.out.println("Default Constructor of Address is called");
	}
	public Address(String streetName, String cityName, int pincode) {
		super();
		this.streetName = streetName;
		this.cityName = cityName;
		this.pincode = pincode;
	}
	public String getStreetName() {
		return streetName;
	}
	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	@Override
	public String toString() {
		return "Address [streetName=" + streetName + ", cityName=" + cityName + ", pincode=" + pincode + "]";
	}
	
}
