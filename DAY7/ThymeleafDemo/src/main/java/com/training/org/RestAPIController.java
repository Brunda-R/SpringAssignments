package com.training.org;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class RestAPIController {
	
	@Autowired
	private RestService myRestService;
	
	private static Map<String,Product> productRepo=new HashMap<>();
	static {
		Product honey=new Product();
		honey.setId("H101");
		honey.setName("Honey 1");
		productRepo.put(honey.getId(), honey);
		
		Product almond=new Product();
		almond.setId("A201");
		almond.setName("Almond 1");
		productRepo.put(almond.getId(), almond);
	}

	
	@RequestMapping(value = "/products")
	public ResponseEntity<Object> getProducts(){
		return new ResponseEntity<> (productRepo.values(),HttpStatus.OK); 
	}
	
//	@RequestMapping(value="/users")
//	public String getUsers(Model model) {
//		var users =  myRestService.getUsers();
//		model.addAttribute("users",users);
//		return "user";
//		}

}
