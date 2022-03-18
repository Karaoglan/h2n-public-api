package com.h2narhitecture.web.publicapi.resource;

import com.h2narhitecture.web.publicapi.entity.PostDetailEntity;
import com.h2narhitecture.web.publicapi.entity.PostEntity;
import com.h2narhitecture.web.publicapi.repository.PostRepository;
import com.h2narhitecture.web.publicapi.service.PostDetailService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class PostResource {
    private final PostRepository repository;
    private final PostDetailService service;

    @GetMapping("/posts")
    public List<PostEntity> findAll() {
        return repository.findAll();
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<PostDetailEntity> findDetail(@PathVariable Long id) {
        return ResponseEntity.ok(service.findByPost(id));
    }
}
