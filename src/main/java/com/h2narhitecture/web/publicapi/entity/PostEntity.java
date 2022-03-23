package com.h2narhitecture.web.publicapi.entity;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("h2npost")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PostEntity extends BaseModel {
    @NotBlank
    private String summarizeText;

    @NotBlank
    private String postText;
}