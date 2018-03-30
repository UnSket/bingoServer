package com.bingo.bingo.entity;

import javax.persistence.*;
import java.util.List;

@Entity @Table(name = "projects")
public class Project {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "project", orphanRemoval = true)
    private List<SynonymsGroup> synonymsGroups;

    @ManyToOne
    @JoinColumn(name = "users")
    private User user;

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
