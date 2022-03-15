package com.h2narhitecture.web.publicapi.repository;

import com.h2narhitecture.web.publicapi.entity.PostEntity;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends PagingAndSortingRepository<PostEntity, Long> {
    List<PostEntity> findAll();
}