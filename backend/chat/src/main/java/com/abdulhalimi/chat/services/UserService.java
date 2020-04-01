package com.abdulhalimi.chat.services;

import com.abdulhalimi.chat.model.User;
import com.abdulhalimi.chat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUser(User user) {
        return userRepository.findById(user.getId()).orElseGet(()->createUser(user));
    }

    public User createUser(User user) {
        return userRepository.findByUsername(user.getUsername()).orElseGet(()->userRepository.save(user));
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
