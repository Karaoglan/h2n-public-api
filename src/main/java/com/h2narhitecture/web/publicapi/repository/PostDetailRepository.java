package com.h2narhitecture.web.publicapi.repository;

import com.h2narhitecture.web.publicapi.entity.PostDetailEntity;
import java.util.Optional;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostDetailRepository extends PagingAndSortingRepository<PostDetailEntity, Long> {
    Optional<PostDetailEntity> findByPost_Id(Long id);
}