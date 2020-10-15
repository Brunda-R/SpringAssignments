package com.training;

import java.lang.reflect.Method;
import java.util.logging.FileHandler;
import java.util.logging.Logger;

import org.springframework.aop.MethodBeforeAdvice;

public class BeforeAdvice implements MethodBeforeAdvice{

	@Override
	public void before(Method arg0, Object[] arg1, Object arg2) throws Throwable {
		System.out.println("Additional concern before logic");
//		System.out.println("Method info "+arg0.getName());
//		for(Object arg:arg1) {
//			System.out.println(arg);
//		}
//		System.out.println("Target "+arg2);
//		System.out.println("Target class "+arg2.getClass().getName());
		
		FileHandler handler = new FileHandler("logfile.log",true);
		Logger logger = Logger.getLogger("Mylog");
		logger.addHandler(handler);
		logger.info("Before Advice");
	}
}
