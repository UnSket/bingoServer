package com.bingo.bingo.controllers.View;

import com.bingo.bingo.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Builder
public class UserView implements Serializable{
    private String name;
    private String email;
    private String login;

    public static UserView BuildFromEntity(User user) {
        UserView.UserViewBuilder builder = UserView.builder();

        String name = user.getName();
        if (name != null) {
            builder.name(name);
        }

        String email = user.getEmail();
        if (email != null) {
            builder.email(email);
        }

        String login = user.getLogin();
        if (login != null) {
            builder.login(login);
        }

        return builder.build();
    }
}
