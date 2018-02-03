package com.bingo.bingo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javafx.util.Pair;

import javax.persistence.*;
import java.util.*;

@Entity
public class ApprenticeSheet {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Project project;

    @ElementCollection()
    @CollectionTable(name = "keys")
    private List<Pair<Integer, Integer>> groupKeys;

    public ApprenticeSheet(){}

    public ApprenticeSheet(Project project, List<Pair<Integer, Integer>> groupKeys) {
        this.project = project;
        this.groupKeys = groupKeys;
    }

    public List<Pair<Integer, Integer>> getGroupKeys() {
        return groupKeys;
    }

    public void setGroupKeys(List<Pair<Integer, Integer>> groupKeys) {
        this.groupKeys = groupKeys;
    }
    @JsonIgnore
    public Long getId() {
        return id;
    }
}
