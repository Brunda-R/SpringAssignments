package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringBootDemoApplication {
	
	List<Employee> employees=new ArrayList<Employee>();

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDemoApplication.class, args);
		
	}

//	@GetMapping("/greeting")
//	public Greetings greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
//		return new Greetings(1,name);
//	}
	
	@GetMapping("/")
	public String message() {
		
		return "Retrieve All - http://localhost:8080/employees"
				+ "			 Add Employee - http://localhost:8080/addEmployee?id=1&name=Brunda&salary=12345 "
				+ "			 Edit Employee - http://localhost:8080/updateEmployee?id=1&name=Qwerty&salary=12345"
				+ "			Delete Employee - http://localhost:8080/deleteEmployee?id=1";
	}
	
	@GetMapping("/addEmployee")
	public String addEmployee(@RequestParam(value="id") int id,@RequestParam(value="name") String name,@RequestParam(value="salary") int salary) {
		employees.add(new Employee(id,name,salary));
		return "Added Employee";
	}
	
	@GetMapping("/updateEmployee")
	public String updateEmployee(@RequestParam(value="id") int id,@RequestParam(value="name") String name,@RequestParam(value="salary") int salary) {
		for(Employee e : employees) {
			if(e.getId()==id) {
				e.setName(name);
				e.setSalary(salary);
				return "updated";
			}
		}
		return "Record not found";
		
	}
	
	@GetMapping("/deleteEmployee")
	public String deleteEmployee(@RequestParam(value="id") int id){
		employees.removeIf(e->e.getId()==id);
		return "deleted";
	}
	
	@GetMapping("/employees")
	public List<Employee> AllEmployees(){
		return employees;
	}
	
	
}

