package com.bingo.bingo.controllers;

import com.bingo.bingo.controllers.View.UserView;
import com.bingo.bingo.entity.User;
import com.bingo.bingo.exception.UserNotFoundException;
import com.bingo.bingo.security.AuthUser;
import com.bingo.bingo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path = "/api/user")
public class UserController  {

    @Autowired
    UserService userService;

    @GetMapping(path = "info")
    ResponseEntity<UserView> getUserInfo(){
        User user = getUser();
        if (user != null) {
            return ResponseEntity.ok(UserView.BuildFromEntity(user));
        } else {
            throw new UserNotFoundException("User not found");
        }
    }

    public User getUser() {
        Object user = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (user instanceof AuthUser) {
            return userService.getById(((AuthUser) user).getId());
        } else {
            return null;
        }
    }
}
