package com.h2narhitecture.web.publicapi;

import java.time.Instant;

import com.h2narhitecture.web.publicapi.entity.PostEntity;
import com.h2narhitecture.web.publicapi.repository.PostRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;

@SpringBootApplication
@Slf4j
public class PublicapiApplication implements CommandLineRunner {

    @Autowired
    private PostRepository repository;

    @Autowired
    private Environment environment;

    public static void main(String[] args) {
        log.warn(Instant.now().toString());
        SpringApplication.run(PublicapiApplication.class, args);
    }

    @Override
    public void run(final String... args) {
        if (environment.acceptsProfiles(Profiles.of("local"))) {
            for (int i = 0; i < 50; i++) {
                PostEntity entity = new PostEntity();
                entity.setPostText("Post Text");
                entity.setSummarizeText("Summarize");
                this.repository.save(entity);
            }
        }
    }

}
