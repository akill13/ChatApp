package com.abdulhalimi.chat.services;

import com.abdulhalimi.chat.model.SelectedUser;
import com.abdulhalimi.chat.model.User;
import com.abdulhalimi.chat.repository.SelectedUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class SelectedUserService {
    @Autowired
    private SelectedUserRepository selectedUserRepository;

    public SelectedUser update(SelectedUser user) {
        SelectedUser active = new SelectedUser();
        active.setActive(true);
        Example<SelectedUser> query = Example.of(active);
        List<SelectedUser> users = selectedUserRepository.findAll(query);
        users.stream().forEach(usr -> usr.setActive(false));
        users.add(user);
        selectedUserRepository.saveAll(users);
        return user;
    }

    public Optional<SelectedUser> getActive() {
        SelectedUser user = new SelectedUser();
        Example<SelectedUser> active = Example.of(user);
        return selectedUserRepository.findOne(active);
    }
}
