package com.training.org.main;



import com.training.org.Organization;  
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

 

public class MainClass { 
	public static void main(String[] args) {  

		
		ApplicationContext factory = new ClassPathXmlApplicationContext("applicationContext.xml");

	
		Organization org=(Organization)factory.getBean("organizationbeanbyConstructor");  
		System.out.println(org); 
	}  
} 