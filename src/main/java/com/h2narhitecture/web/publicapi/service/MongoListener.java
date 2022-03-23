package com.h2narhitecture.web.publicapi.service;

import com.h2narhitecture.web.publicapi.entity.BaseModel;
import java.time.LocalDateTime;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class MongoListener extends AbstractMongoEventListener<BaseModel> {
    @Override
    public void onBeforeConvert(BeforeConvertEvent<BaseModel> event) {
        super.onBeforeConvert(event);

        LocalDateTime dateNow = LocalDateTime.now();
        event.getSource().setCreatedAt(dateNow);
        event.getSource().setUpdatedAt(dateNow);
    }
}