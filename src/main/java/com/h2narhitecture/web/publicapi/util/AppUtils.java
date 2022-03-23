package com.h2narhitecture.web.publicapi.util;

import com.h2narhitecture.web.publicapi.entity.PostEntity;
import com.h2narhitecture.web.publicapi.resource.response.PostResponse;
import org.springframework.beans.BeanUtils;

public class AppUtils {

    public static PostResponse fromEntity(PostEntity entity) {
        PostResponse response = new PostResponse();
        BeanUtils.copyProperties(entity, response);
        return response;
    }
}
