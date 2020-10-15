package com.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.Person;



public class Test {
	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");

		Person p1=(Person)context.getBean("person");
		System.out.println(p1.getPersonName());
		System.out.println(p1.getPersonAge());
		p1.printChecker();
	
	}

}
