package com.bingo.bingo.controllers;

import com.bingo.bingo.data.ProjectRepository;
import com.bingo.bingo.model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value = "/api/projects")
public class ProjectController {
    private ProjectRepository projectData;
    @Autowired
    public ProjectController(ProjectRepository projectData) {
        this.projectData = projectData;
    }

    @PostMapping(value = "/api/project")
    public ResponseEntity addProject(@RequestParam("name") String name){
        if(name.length() > 0){
            projectData.saveAndFlush(new Project(name));
        }
        return ResponseEntity.ok(name+" добавлен");
    }
}
