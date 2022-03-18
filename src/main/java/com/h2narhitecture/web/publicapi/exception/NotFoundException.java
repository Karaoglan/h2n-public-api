package com.h2narhitecture.web.publicapi.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException() {
        super("Resource Could not be found");
    }
}
