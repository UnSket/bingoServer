package com.bingo.bingo.controllers;

import com.bingo.bingo.data.ApprenticeSheetRepository;
import com.bingo.bingo.data.ProjectRepository;
import com.bingo.bingo.data.SynonymsGroupRepository;
import com.bingo.bingo.model.ApprenticeSheet;
import com.bingo.bingo.model.Project;
import com.bingo.bingo.model.SynonymsGroup;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.org.apache.regexp.internal.RE;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.swing.event.ListDataEvent;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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

    @PostMapping(value = "/addGroup")
    public ResponseEntity addGroup(@RequestParam long id, @RequestBody String group){
        Project project = projectData.getOne(id);
        try {
            SynonymsGroup synonymsGroup = objectMapper.readValue(group, SynonymsGroup.class);
            synonymsGroup.setProject(project);
            synonymsGroupData.saveAndFlush(synonymsGroup);
            //projectData.saveAndFlush(project);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok("[\"vse ok\"]");
    }

    @GetMapping(value = "/getGroups")
    public ResponseEntity getGroups(@RequestParam long id){
        try {
            return ResponseEntity.ok(objectMapper.writeValueAsString(projectData.getOne(id).getSynonymsGroups()));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping(value = "/removeGroup")
    public ResponseEntity removeGroup(@RequestParam long id) {
        synonymsGroupData.delete(id);
        return ResponseEntity.ok("[\"vse ok\"]");
    }

    @PutMapping(value = "/updateGroup")
    public ResponseEntity updateGroup(@RequestBody String jsonGroup){
        try {
            SynonymsGroup group = objectMapper.readValue(jsonGroup, SynonymsGroup.class);
            group.setProject(synonymsGroupData.findOne(group.getId()).getProject());
            synonymsGroupData.saveAndFlush(group);
            return ResponseEntity.ok(objectMapper.writeValueAsString("vse ok"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().build();
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

}
