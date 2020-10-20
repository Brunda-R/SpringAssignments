package com.training.org;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

//1] Using CommandLineRunner as @Component
@Order(value=1)
@Component
public class ApplicationStartRunner implements CommandLineRunner{
    protected final Log logger = LogFactory.getLog(getClass());
    @Autowired
	private HelloMessageService helloMessageService;
	@Override
	public void run(String... args) throws Exception {
		System.out.println(helloMessageService.getMessage());
		System.out.println("run method 1-1 ");
		logger.info("ApplicationStartupRunner run method Started !!");
		
	}
}

@Order(value=2)
@Component
class ApplicationStartRunnerTwo implements CommandLineRunner{
    protected final Log logger = LogFactory.getLog(getClass());

	@Override
	public void run(String... args) throws Exception {
		System.out.println("run method 1-2 ");
		logger.info("ApplicationStartupRunner run method Started !!");
		
	}
}