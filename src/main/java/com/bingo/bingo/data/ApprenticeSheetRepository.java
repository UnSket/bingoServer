package com.bingo.bingo.data;

import com.bingo.bingo.model.ApprenticeSheet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApprenticeSheetRepository extends JpaRepository<ApprenticeSheet, Long> {
    List<ApprenticeSheet> getByProjectId(Long projectId);
}
