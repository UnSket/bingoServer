package com.bingo.bingo.controllers;

import com.bingo.bingo.data.ApprenticeSheetRepository;
import com.bingo.bingo.data.ProjectRepository;
import com.bingo.bingo.data.SynonymsGroupRepository;
import com.bingo.bingo.model.Project;
import com.bingo.bingo.model.SynonymsGroup;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(value = "/api/projects")
public class ProjectController {
    private ProjectRepository projectData;
    private SynonymsGroupRepository synonymsGroupData;
    private ApprenticeSheetRepository apprenticeSheetData;

    private ObjectMapper objectMapper;
    @Autowired
    public ProjectController(ProjectRepository projectData, SynonymsGroupRepository synonymsGroupData, ApprenticeSheetRepository apprenticeSheetRepository) {
        this.projectData = projectData;
        this.synonymsGroupData = synonymsGroupData;
        this.apprenticeSheetData = apprenticeSheetRepository;

        this.objectMapper = new ObjectMapper();
    }

    @PostMapping(value = "")
    public ResponseEntity addProject(@RequestParam(value = "name") String name, HttpServletRequest request) {
        if(name.length() > 0){
            Long id = projectData.saveAndFlush(new Project(name)).getId();
            try {
                return ResponseEntity.ok(objectMapper.writeValueAsString(id));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping(value = "getAll")
    public ResponseEntity getAllProjects(){
        try {
            String answer = objectMapper.writer().writeValueAsString(projectData.findAll().toArray());
            return ResponseEntity.ok(answer);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "")
    public ResponseEntity getProject(@RequestParam long id){
        return ResponseEntity.ok(projectData.findOne(id));
    }


    @PostMapping(value = "/copyProject")
    ResponseEntity copyProject(@RequestParam Long oldProjectId, @RequestParam String newProjectName) {
        Project newProject = new Project(newProjectName);
        List<SynonymsGroup> newSynonymsGroups = new ArrayList<>();
        List<SynonymsGroup> oldSynonymsGroups = projectData.getOne(oldProjectId).getSynonymsGroups();
        for(SynonymsGroup group : oldSynonymsGroups) {
            newSynonymsGroups.add(new SynonymsGroup(newProject, group.getName(), new ArrayList<>(group.getOthers())));
        }
        newProject.setSynonymsGroups(newSynonymsGroups);
        projectData.saveAndFlush(newProject);
        synonymsGroupData.save(newSynonymsGroups);
        synonymsGroupData.flush();
        try {
            return ResponseEntity.ok(objectMapper.writeValueAsString(newProject));
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping(value="/delete-project")
    ResponseEntity deleteProject(@RequestParam Long id){
        Project project = projectData.getOne(id);
        apprenticeSheetData.delete(apprenticeSheetData.getByProjectId(id));
        projectData.delete(project);
        return ResponseEntity.ok("[\"vse ok\"]");
    }

}
