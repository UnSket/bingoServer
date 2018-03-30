package com.bingo.bingo.controllers;

import com.bingo.bingo.repository.ApprenticeSheetRepository;
import com.bingo.bingo.repository.ProjectRepository;
import com.bingo.bingo.repository.SynonymsGroupRepository;
import com.bingo.bingo.entity.ApprenticeSheet;
import com.bingo.bingo.entity.Project;
import com.bingo.bingo.entity.SynonymsGroup;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

@Controller
@RequestMapping(value = "api/groups")
public class SynonymsGroupController {

    private ProjectRepository projectData;
    private SynonymsGroupRepository synonymsGroupData;
    private ApprenticeSheetRepository apprenticeSheetData;
    private ObjectMapper objectMapper;

    @Autowired
    public SynonymsGroupController(ProjectRepository projectData, SynonymsGroupRepository synonymsGroupData, ApprenticeSheetRepository apprenticeSheetData, ObjectMapper objectMapper) {
        this.projectData = projectData;
        this.synonymsGroupData = synonymsGroupData;
        this.apprenticeSheetData = apprenticeSheetData;
        this.objectMapper = objectMapper;
    }

    @PostMapping(value = "/addGroup")
    public ResponseEntity addGroup(@RequestParam long id, @RequestBody String group){
        Project project = projectData.getOne(id);
        try {
            SynonymsGroup synonymsGroup = objectMapper.readValue(group, SynonymsGroup.class);
            synonymsGroup.setProject(project);
            apprenticeSheetData.flush();
            synonymsGroupData.saveAndFlush(synonymsGroup);
            List<ApprenticeSheet> sheets = apprenticeSheetData.getByProjectId(id);
            for (ApprenticeSheet sheet: sheets) {
                sheet.getGroupKeys().add(new Pair<>(synonymsGroup.getId().intValue(), (int)(Math.random() * (synonymsGroup.getOthers().size() - 1))));
                Collections.shuffle(sheet.getGroupKeys());
            }
            apprenticeSheetData.flush();
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
        SynonymsGroup synonymsGroup = synonymsGroupData.findOne(id);
        List<ApprenticeSheet> sheets = apprenticeSheetData.getByProjectId(synonymsGroup.getProject().getId());
        for (ApprenticeSheet sheet: sheets) {
            for(int i =0, length = sheet.getGroupKeys().size(); i<length; i++) {
                Pair<Integer, Integer> pair = sheet.getGroupKeys().get(i);
                if(pair.getKey() == synonymsGroup.getId().intValue()) {
                    sheet.getGroupKeys().remove(pair);
                    i--;
                    length--;
                }
            }
        }
        apprenticeSheetData.flush();
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
