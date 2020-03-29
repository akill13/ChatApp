package com.abdulhalimi.chat.controller;

import com.abdulhalimi.chat.model.User;
import com.abdulhalimi.chat.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("")
    public User createUser(@Valid @RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("")
    public User getUser(@Valid @RequestBody User user) {
        return userService.getUser(user);
    }
}
