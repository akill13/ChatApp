package com.abdulhalimi.chat.controller;

import com.abdulhalimi.chat.model.SelectedUser;
import com.abdulhalimi.chat.services.SelectedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/select")
public class SelectedUserController {
    @Autowired
    private SelectedUserService selectedUserService;

    @PostMapping("")
    public SelectedUser updateSelectedUser(@Valid @RequestBody SelectedUser user) {
        return selectedUserService.update(user);
    }

    @GetMapping("")
    public SelectedUser getSelectedUser() {
        return selectedUserService.getActive().orElse(null);
    }
}
