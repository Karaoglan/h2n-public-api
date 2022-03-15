package com.h2narhitecture.web.publicapi.resource;

import com.h2narhitecture.web.publicapi.entity.PostEntity;
import com.h2narhitecture.web.publicapi.repository.PostRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PostResource {
    private final PostRepository repository;

    @GetMapping("/posts")
    public List<PostEntity> findAll() {
        return repository.findAll();
    }
}
