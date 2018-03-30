package com.bingo.bingo.services;

import com.bingo.bingo.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.metamodel.SingularAttribute;
import java.util.List;
import java.util.Set;

public interface UserService {
    User getByLogin(String login);
    User getByEmail(String email);

    User getById(Long id);
    boolean exist(Long id);
    void delete(Long id);
    User save(User user);

    /*User findOne(Specification<User> specification);
    User findOne(Specification<User> specification, List<SingularAttribute<User, ?>> attributes);
    List<User> findAll(Specification<User> specification);
    Page<User> findAll(Pageable pageable, Specification<User> specification);
    List<User> findAll(Specification<User> specification, List<SingularAttribute<User, ?>> attributes);

    Set<String> getLocations();

    Long getCount(Specification<User> specification);

    //refactored
    List<User> getUserList(Set<Long> userIds);
    void changePassword(UserForm.ChangePassword changePasswordForm);
    UserView create(UserForm userForm);
    UserView update(Long id, UserForm userForm);*/
}
