package com.h2narhitecture.web.publicapi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "H2N_POST_DETAIL")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostDetailEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "POST_TEXT", columnDefinition = "CLOB")
    private String postText;

    @OneToOne
    private PostEntity post;
}