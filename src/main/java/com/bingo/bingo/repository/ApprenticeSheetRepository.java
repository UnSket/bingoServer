package com.bingo.bingo.repository;

import com.bingo.bingo.entity.ApprenticeSheet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApprenticeSheetRepository extends JpaRepository<ApprenticeSheet, Long> {
    List<ApprenticeSheet> getByProjectId(Long projectId);
}
