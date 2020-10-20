package com.training.org;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class ClrDemoApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ClrDemoApplication.class);
    }
    public static void main(String[] args) throws Exception {
        SpringApplication.run(ClrDemoApplication.class, args);
    }
    @Bean
    public ApplicationStartUpRunner schedulerRunner() {
        return new ApplicationStartUpRunner();
    }
}

//2) Implement CommandLineRunner in @SpringBootApplication
//public class ClrDemoApplication extends SpringBootServletInitializer implements CommandLineRunner {
// 
//	protected final Log logger = LogFactory.getLog(getClass());
//
//    @Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//    	System.out.println("SpringBootApplicationBuilder is called");
//        return application.sources(ClrDemoApplication.class);
//    }
//
//    public static void main(String[] args) {
//		
//		SpringApplication.run(ClrDemoApplication.class, args);
//		System.out.println("Main Part of application");
//	}
//
//	@Override
//	public void run(String... args) throws Exception {
//		System.out.println("run method2 ");
//		logger.info("ApplicationStartupRunner run method Started !!");
//	}
//}
