package com.abdulhalimi.chat.controller;

import com.abdulhalimi.chat.model.Message;
import com.abdulhalimi.chat.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChatController {
    @Autowired
    private MessageService messageService;

    @MessageMapping("/chat.send")
    @SendTo("/topics/public")
    public Message sendMessage(@Payload Message message) {
        System.out.println("i am happening");
        return message;
    }

    @MessageMapping("/chat.newUser")
    @SendTo("/topics/public")
    public Message newUser(@Payload Message message, SimpMessageHeaderAccessor headerAccessor) {
        headerAccessor.getSessionAttributes().put("username", message.getUser().getUsername());
        return message;
    }

    @RequestMapping("/history")
    public List<Message> getHistory(){
        return messageService.getAllMessages();
    }

}
