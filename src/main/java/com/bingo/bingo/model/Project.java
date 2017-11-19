package com.bingo.bingo.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonAppend;

import javax.persistence.*;
import java.util.List;

@Entity @Table(name = "projects")
public class Project {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @OneToMany
    private List<SynonymsGroup> synonymsGroups;

    public Project(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Project(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<SynonymsGroup> getSynonymsGroups() {
        return synonymsGroups;
    }

    public void setSynonymsGroups(List<SynonymsGroup> synonymsGroups) {
        this.synonymsGroups = synonymsGroups;
    }
}
