package com.bingo.bingo.controllers;

import com.bingo.bingo.repository.ApprenticeSheetRepository;
import com.bingo.bingo.repository.ProjectRepository;
import com.bingo.bingo.repository.SynonymsGroupRepository;
import com.bingo.bingo.entity.ApprenticeSheet;
import com.bingo.bingo.entity.SynonymsGroup;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static java.lang.Math.toIntExact;

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

    @PutMapping(value = "/addApprenticeSheet")
    ResponseEntity addApprenticeSheet(@RequestParam long projectId,
                                      @RequestParam int count){
        List<Pair<Integer, Integer>> groupKeys = new ArrayList<>();
        List<ApprenticeSheet> sheets = new ArrayList<ApprenticeSheet>();
        for(int i = 0; i < count; i++) {
            for (SynonymsGroup group : projectData.getOne(projectId).getSynonymsGroups()) {
                groupKeys.add(new Pair<>(group.getId().intValue(), (int) Math.round(Math.random() * (group.getOthers().size() - 1))));
            }
            Collections.shuffle(groupKeys);
            sheets.add(new ApprenticeSheet(projectData.getOne(projectId), new ArrayList<>(groupKeys)));
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
        List<List<Pair<Integer, String>>> sheetsResult = new ArrayList<>();
        List<Pair<Integer, String>> words = new ArrayList<>();
        List<ApprenticeSheet> sheets = new ArrayList<>();
        if (sheetId != -1) {
            sheets.add(apprenticeSheetData.getOne(sheetId));
        } else {
            sheets.addAll(apprenticeSheetData.getByProjectId(projectId));
        }
        for (ApprenticeSheet sheet : sheets) {
            List<Pair<Integer, Integer>> keys = sheet.getGroupKeys();
            for (int i = 0; i < keys.size(); i++) {
                //проходимся по списку групп и ключей. Соотвественно берем побочное слово с индексом из ключа
                SynonymsGroup group = synonymsGroupData.findOne((long)keys.get(i).getKey());
                //проходимся по списку групп и ключей. Соотвественно берем побочное слово с индексом из ключа
                if (keys.get(i).getValue() < group.getOthers().size()) {
                    words.add(new Pair<>(keys.get(i).getKey(), group.getOthers().get(keys.get(i).getValue())));
                } else {
                    keys.set(i, new Pair<>(keys.get(i).getKey(), (int)(Math.random() * (group.getOthers().size() - 1))));
                    words.add(new Pair<>(keys.get(i).getKey(), group.getOthers().get(keys.get(i).getValue())));
                }
            }
            sheetsResult.add(new ArrayList<>(words));
            words.clear();
        }
        try {
            return ResponseEntity.ok(objectMapper.writeValueAsString(sheetsResult));
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "/getApprenticeSheetCount")
    ResponseEntity getApprenticeSheetCount(@RequestParam Long projectId){
        List<ApprenticeSheet> sheets = apprenticeSheetData.getByProjectId(projectId);
        List<Long> ids = new ArrayList<>();
        sheets.forEach((element) ->  ids.add(element.getId()));
        try {
            return ResponseEntity.ok(objectMapper.writeValueAsString(ids.toArray()));
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value = "/changeWord")
    ResponseEntity changeWord(@RequestParam Long sheetId,
                              @RequestParam Long wordId) {
        List<String> variants = synonymsGroupData.getOne(wordId).getOthers();
        int random = toIntExact(Math.round(Math.random() * (variants.size() - 1)));
        List<Pair<Integer, Integer>> keys = apprenticeSheetData.getOne(sheetId).getGroupKeys();
        for (Pair<Integer, Integer> el : keys){
            if(el.getKey() == toIntExact(wordId)) {
                while (random == el.getValue()) {
                    random = toIntExact(Math.round(Math.random() * (variants.size() - 1) ));
                }
                keys.set(keys.indexOf(el), new Pair<>(el.getKey(), random));
                apprenticeSheetData.getOne(sheetId).setGroupKeys(keys);
                apprenticeSheetData.flush();
                return ResponseEntity.ok("\"" + variants.get(random) + "\"");
            }
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping(value = "/delete/{sheetId}")
    ResponseEntity deleteSheet(@PathVariable Long sheetId) {
        apprenticeSheetData.delete(sheetId);
        return ResponseEntity.ok().build();
    }
}
