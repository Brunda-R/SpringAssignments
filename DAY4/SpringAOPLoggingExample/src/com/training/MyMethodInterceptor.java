package com.training;
import org.aopalliance.intercept.MethodInvocation;
import org.aopalliance.intercept.MethodInterceptor;

public class MyMethodInterceptor implements MethodInterceptor {
	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable {
		Object obj;
		System.out.println("Additional Concern before actual logic");
		obj=invocation.proceed();
		System.out.println("Additional cocern after actual logic");
		return null;
	}

}
