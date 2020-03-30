package com.abdulhalimi.chat.controller;

import com.abdulhalimi.chat.model.Message;
import com.abdulhalimi.chat.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;

@Component
public class WebSocketEventListener {
    private static final Logger LOGGER = LoggerFactory.getLogger(WebSocketEventListener.class);

    @Autowired
    private SimpMessageSendingOperations sendingOperations;

    @EventListener
    public void handleWebSocketConnectListener(SessionConnectedEvent event) {
        LOGGER.info("New connection ....");

    }

    @EventListener
    public void handleWebSocketDisconnectListener(SessionConnectedEvent event) {
        LOGGER.info("Someone has disconnected");
        /*StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        String username = (String) headerAccessor.getSessionAttributes().get("username");
        User user = new User();
        user.setUsername(username);
        Message message = new Message();
        message.setUser(user);
        sendingOperations.convertAndSend("/topic/public");*/
    }


}
