package com.h2narhitecture.web.publicapi.service;

import com.h2narhitecture.web.publicapi.entity.PostEntity;
import com.h2narhitecture.web.publicapi.repository.PostRepository;
import com.h2narhitecture.web.publicapi.resource.response.PostPageResponse;
import com.h2narhitecture.web.publicapi.resource.response.PostResponse;
import com.h2narhitecture.web.publicapi.util.AppUtils;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository repository;

    public PostPageResponse findAll(Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("createdAt").descending());
        Page<PostEntity> entityPage = this.repository.findAll(pageable);
        List<PostResponse> postResponses = entityPage
                .stream()
                .map(AppUtils::fromEntity)
                .collect(Collectors.toList());
        return PostPageResponse.builder()
                .content(postResponses)
                .totalElements(entityPage.getTotalElements())
                .totalPages(entityPage.getTotalPages())
                .pageNumber(entityPage.getPageable().getPageNumber())
                .pageSize(entityPage.getSize())
                .build();
    }
}
