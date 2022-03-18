package com.h2narhitecture.web.publicapi.service;

import com.h2narhitecture.web.publicapi.entity.PostDetailEntity;
import com.h2narhitecture.web.publicapi.exception.NotFoundException;
import com.h2narhitecture.web.publicapi.repository.PostDetailRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PostDetailService {
    private final PostDetailRepository repository;

    public PostDetailEntity findByPost(Long postId) {
        return repository.findByPost_Id(postId).orElseThrow(NotFoundException::new);
    }
}
