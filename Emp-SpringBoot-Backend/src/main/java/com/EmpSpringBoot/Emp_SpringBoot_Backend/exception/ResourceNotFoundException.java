package com.EmpSpringBoot.Emp_SpringBoot_Backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
	private static final long serialVersionUID=1;
	public ResourceNotFoundException(String message) {
		super(message);
	}

}
