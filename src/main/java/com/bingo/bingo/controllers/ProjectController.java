package com.bingo.bingo.controllers;

import com.bingo.bingo.data.ProjectRepository;
import com.bingo.bingo.model.Project;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@RequestMapping(value = "/api/projects")
public class ProjectController {
    private ProjectRepository projectData;
    ObjectMapper objectMapper;
    @Autowired
    public ProjectController(ProjectRepository projectData) {
        this.projectData = projectData;
        this.objectMapper = new ObjectMapper();
    }

    @PostMapping(value = "")
    public ResponseEntity addProject(@RequestParam(value = "name") String name, HttpServletRequest request) {
        System.out.println(request.getRequestURI());
        System.out.println("connect");
        if(name.length() > 0){
            projectData.saveAndFlush(new Project(name));
        }
        System.out.println("success");
        return ResponseEntity.ok(" { \"message\" : \"" + name + " добавлен\" }");
    }

    @GetMapping(value = "getAll")
    public ResponseEntity getAllProjects(){
        try {
            String answer = objectMapper.writer().writeValueAsString(projectData.findAll().toArray());
            System.out.println(answer);
            return ResponseEntity.ok(answer);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }

    }
}
