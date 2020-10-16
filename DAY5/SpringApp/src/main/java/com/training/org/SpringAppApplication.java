package com.training.org;

import java.util.Arrays;
import java.util.List;
import java.util.Map;


import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@SpringBootApplication
//@Validated
@ConfigurationProperties(prefix="mail")
public class SpringAppApplication {
	
	private String hostname;
	private int port;
	private String from;
	private MyDatabase mydb;
	private List<String> mailCollection;
	private Map<String,String> mymap;
	private User user;

	public void setUser(User user) {
		this.user = user;
	}

	public void setLogger(Logger logger) {
		this.logger = logger;
	}

	public void setMymap(Map<String, String> mymap) {
		this.mymap = mymap;
	}

	//	@Value("${spring.application.name}")
	//	private String appName;
	//	
	//	@Pattern(regexp = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$")
	//	private String email;
	//	
	//	@Min(0)
	//	@Max(5)
	//	private int threadPool;
	//	

	Logger logger= LoggerFactory.getLogger(SpringAppApplication.class);
	public void setMailCollection(List<String> mailCollection) {
		this.mailCollection = mailCollection;
	}
	
	public void setMydb(MyDatabase mydb) {
		this.mydb = mydb;
	}
	
	public void setHostname(String hostname) {
		this.hostname = hostname;
	}

	public void setPort(int port) {
		this.port = port;
	}

	public void setFrom(String from) {
		this.from = from;
	}
	
	@GetMapping(value="/")
	public String getName() {
		logger.debug("Debug message");
		logger.info("Info message");
		logger.warn("Warning message");
		logger.error("error message");
		return hostname+" "+port+" "+from+" "+mailCollection+" "+mydb+" "+mymap+" "+user;
	}

	public static void main(String[] args) {
		ApplicationContext ctx=SpringApplication.run(SpringAppApplication.class, args);
        String[] beanNames = ctx.getBeanDefinitionNames();
        Arrays.sort(beanNames);
        for (String beanName : beanNames){
            System.out.println(beanName);
        }
	}

}
