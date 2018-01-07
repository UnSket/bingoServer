package com.bingo.bingo.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class ApprenticeSheet {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Project project;

    @ElementCollection()
    @CollectionTable(name = "keys")
    private List<Integer>  groupKeys;

    public ApprenticeSheet(){}

    public ApprenticeSheet(Project project, List<Integer> groupKeys) {
        this.project = project;
        this.groupKeys = groupKeys;
    }

    public List<Integer> getGroupKeys() {
        return groupKeys;
    }

    public void setGroupKeys(List<Integer> groupKeys) {
        this.groupKeys = groupKeys;
    }
}
