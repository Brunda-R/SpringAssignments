package com.training.org;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

@Service
public class RestService {
	@Autowired
	private RestTemplate myRestTemplate;
	
	@Value("${myrest.url}")
	private String restUrl;
	
	public User[] getUsers() {
		var users=myRestTemplate.getForObject(restUrl, User[].class);
		return users;
	}
//	@Bean
//	public RestTemplate restTemplate() {
//	    return new RestTemplate();
//	}
	
}
