package com.abdulhalimi.chat.controller;

import com.abdulhalimi.chat.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {
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

    @RequestMapping("/test")
    public String testThis(){
        return "i am working";
    }

}
