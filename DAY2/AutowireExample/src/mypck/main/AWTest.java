package mypck.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import mypck.Parent;


public class AWTest {
	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");

		Parent p1=(Parent)context.getBean("parent");
		p1.displayParentDetails();
		
	}
}