package com.training.org;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.CommandLineRunner;

//3) Using CommandLineRunner as Bean
//You can define a bean in SpringBootApplication which return the class that implements CommandLineRunner interface.
//ApplicationStartupRunner.java

public class ApplicationStartUpRunner implements CommandLineRunner {
    protected final Log logger = LogFactory.getLog(getClass());
    @Override
    public void run(String... args) throws Exception {
    	System.out.println("run method3 ");
        logger.info("Application Started !!");
    }
}
