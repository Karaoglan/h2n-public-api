package com.h2narhitecture.web.publicapi;

import java.time.Instant;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class PublicapiApplication {

    public static void main(String[] args) {
        log.warn(Instant.now().toString());
        SpringApplication.run(PublicapiApplication.class, args);
    }

}
