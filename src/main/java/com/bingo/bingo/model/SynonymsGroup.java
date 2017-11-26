package com.bingo.bingo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.*;
import org.hibernate.annotations.CascadeType;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.lang.reflect.Array;
import java.util.*;

@Entity @Table(name = "synonymsMain")
public class SynonymsGroup {
    @JsonProperty
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    private String name;

    @ElementCollection()
    @CollectionTable(name = "synonyms")
    @Column(name = "name")
    //@GenericGenerator(name="myGenerator",strategy="sequence")
    //@CollectionId(columns = @Column(name = "SYNONYMS_GROUP_ID"), type = @Type(type = "long"), generator = "myGenerator")
    private List<String> others = new ArrayList<String>();

    public List<String> getOthers() {
        return others;
    }

    public void setOthers(List<String> others) {
        this.others = others;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    @JsonIgnore
    public Project getProject() {
        return project;
    }
    @JsonIgnore
    public void setProject(Project project) {
        this.project = project;
    }

    public Long getId() {
        return id;
    }
}
