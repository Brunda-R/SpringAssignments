package com.training;

import java.lang.reflect.Method;
import java.util.logging.FileHandler;
import java.util.logging.Logger;

import org.springframework.aop.AfterReturningAdvice;

public class AfterAdvice implements AfterReturningAdvice{

	@Override
	public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws Throwable {
		
		FileHandler handler = new FileHandler("logfile.log",true);
		Logger logger = Logger.getLogger("Mylog");
		logger.addHandler(handler);
		logger.info("After Advice");
		System.out.println("After returning additional concern");
		
	}

}
