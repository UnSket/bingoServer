package com.bingo.bingo.exception;

import org.springframework.dao.DataAccessException;

public class CustomException extends DataAccessException {
    public CustomException(String msg) {
        super(msg);
    }
}
