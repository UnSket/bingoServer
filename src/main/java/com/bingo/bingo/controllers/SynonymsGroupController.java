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

import java.io.IOException;

@Controller
@RequestMapping(value = "api/groups")
public class SynonymsGroupController {

    private ProjectRepository projectData;
    private SynonymsGroupRepository synonymsGroupData;

    private ObjectMapper objectMapper;
    @Autowired
    public SynonymsGroupController(ProjectRepository projectData, SynonymsGroupRepository synonymsGroupData, ApprenticeSheetRepository apprenticeSheetRepository) {
        this.projectData = projectData;
        this.synonymsGroupData = synonymsGroupData;

        this.objectMapper = new ObjectMapper();
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
}
