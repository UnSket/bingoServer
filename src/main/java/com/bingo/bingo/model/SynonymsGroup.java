package com.bingo.bingo.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity @Table(name = "synonymsMain")
public class SynonymsGroup {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

    @ElementCollection
    @CollectionTable(name = "synonyms")
    @Column(name = "name")
    protected List<String> images = new ArrayList<String>();

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }
}
