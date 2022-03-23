package com.h2narhitecture.web.publicapi.entity;

import java.time.LocalDateTime;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public abstract class BaseModel {
    @EqualsAndHashCode.Include
    @MongoId(FieldType.OBJECT_ID)
    protected String id;

    protected LocalDateTime createdAt;

    protected LocalDateTime updatedAt;
}
