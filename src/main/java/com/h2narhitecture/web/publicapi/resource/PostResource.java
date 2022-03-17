package com.h2narhitecture.web.publicapi.resource;

import com.h2narhitecture.web.publicapi.entity.PostEntity;
import com.h2narhitecture.web.publicapi.repository.PostRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class PostResource {
    private final PostRepository repository;

    @Value("${spring.datasource.url}")
    private String url;
    @Value("${spring.datasource.username}")
    private String username;
    @Value("${spring.datasource.password}")
    private String pass;

    @GetMapping("/posts")
    public List<PostEntity> findAll() {
        log.info(url);
        log.info(username);
        log.info(pass);
        return repository.findAll();
    }
}
