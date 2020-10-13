package com.training.main;

//import org.springframework.beans.factory.BeanFactory;
//import org.springframework.beans.factory.xml.XmlBeanFactory;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.core.io.Resource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.training.Student;  

public class Test { 
	public static void main(String[] args) {  
//		Resource resource=new ClassPathResource("applicationContext.xml");  
//		BeanFactory factory=new XmlBeanFactory(resource); 
		
		ApplicationContext factory = new ClassPathXmlApplicationContext("applicationContext.xml");

		Student student=(Student)factory.getBean("studentbean");  
		System.out.println(student); 
//		student.setStudName("Bk");
//		Student student1=(Student)factory.getBean("studentbean");  
//		System.out.println(student1); 
	}  
} 