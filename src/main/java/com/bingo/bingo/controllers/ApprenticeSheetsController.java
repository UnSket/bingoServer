package com.bingo.bingo.controllers;

import com.bingo.bingo.data.ApprenticeSheetRepository;
import com.bingo.bingo.data.ProjectRepository;
import com.bingo.bingo.data.SynonymsGroupRepository;
import com.bingo.bingo.model.ApprenticeSheet;
import com.bingo.bingo.model.SynonymsGroup;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(value = "/api/apprentice-sheets")
public class ApprenticeSheetsController {
    private ProjectRepository projectData;
    private SynonymsGroupRepository synonymsGroupData;
    private ApprenticeSheetRepository apprenticeSheetData;

    private ObjectMapper objectMapper;
    @Autowired
    public ApprenticeSheetsController(ProjectRepository projectData, SynonymsGroupRepository synonymsGroupData, ApprenticeSheetRepository apprenticeSheetRepository) {
        this.projectData = projectData;
        this.synonymsGroupData = synonymsGroupData;
        this.apprenticeSheetData = apprenticeSheetRepository;

        this.objectMapper = new ObjectMapper();
    }

    @PostMapping(value = "/addApprenticeSheet")
    ResponseEntity addApprenticeSheet(@RequestParam long projectId,
                                      @RequestParam int count){
        List<Integer> groupKeys = new ArrayList<>();
        List<ApprenticeSheet> sheets = new ArrayList<ApprenticeSheet>();
        for(int i = 0; i < count; i++) {
            for (SynonymsGroup group : projectData.getOne(projectId).getSynonymsGroups()) {
                groupKeys.add((int) Math.round(Math.random() * (group.getOthers().size() - 1)));
            }
            sheets.add(new ApprenticeSheet(projectData.getOne(projectId), groupKeys));
            groupKeys.clear();
        }
        apprenticeSheetData.save(sheets);
        apprenticeSheetData.flush();
        List<Long> ids = new ArrayList<>();
        for (ApprenticeSheet sheet : sheets) {
            ids.add(sheet.getId());
        }

        try {
            System.out.println(objectMapper.writeValueAsString(ids.toArray()));
            return ResponseEntity.ok(objectMapper.writeValueAsString(ids.toArray()));
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "/getApprenticeSheet")
    ResponseEntity getApprenticeSheet(@RequestParam Long projectId, Long sheetId){
        List<Object[]> sheets = new ArrayList<>();
        List<String> words = new ArrayList<>();
        List<SynonymsGroup> groups = projectData.getOne(projectId).getSynonymsGroups();
        if (sheetId != -1) {
            List<Pair<Integer, Integer>> keys = apprenticeSheetData.getOne(sheetId).getGroupKeys();
            for (int i = 0; i < keys.size(); i++) {
                //проходимся по списку групп и ключей. Соотвественно берем побочное слово с индексом из ключа
                words.add(groups.get(keys.get(i).getKey()).getOthers().get(keys.get(i).getValue()));
            }
            sheets.add(words.toArray());
        } else {
            for(ApprenticeSheet sheet : apprenticeSheetData.getByProjectId(projectId)) {
                List<Pair<Integer, Integer>> keys = sheet.getGroupKeys();
                for (int i = 0; i < keys.size(); i++) {
                    //проходимся по списку групп и ключей. Соотвественно берем побочное слово с индексом из ключа
                    words.add(groups.get(keys.get(i).getKey()).getOthers().get(keys.get(i).getValue()));
                }
                sheets.add(words.toArray());
                words.clear();
            }
        }
        try {
            return ResponseEntity.ok(objectMapper.writeValueAsString(sheets.toArray()));
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "/getApprenticeSheetCount")
    ResponseEntity getApprenticeSheetCount(@RequestParam Long projectId){
        List<ApprenticeSheet> sheets = apprenticeSheetData.getByProjectId(projectId);
        List<Long> ids = new ArrayList<>();
        for (ApprenticeSheet sheet : sheets) {
            ids.add(sheet.getId());
        }
        try {
            return ResponseEntity.ok(objectMapper.writeValueAsString(ids.toArray()));
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
