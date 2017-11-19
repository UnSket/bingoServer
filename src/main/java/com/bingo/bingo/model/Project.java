package com.bingo.bingo.model;

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
