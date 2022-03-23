package com.h2narhitecture.web.publicapi.resource;

import com.h2narhitecture.web.publicapi.resource.response.PostPageResponse;
import com.h2narhitecture.web.publicapi.service.PostService;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@Validated
public class PostResource {
    private final PostService service;

    @GetMapping("/posts")
    public ResponseEntity<PostPageResponse> findAll(@RequestParam(value = "pageNumber", defaultValue = "0")
                                                    @Min(0) Integer pageNumber,
                                                    @RequestParam(value = "pageSize", defaultValue = "25")
                                                    @Min(1) @Max(30) Integer pageSize) {
        return ResponseEntity.ok(service.findAll(pageNumber, pageSize));
    }
}
