package com.abdulhalimi.chat.services;

import com.abdulhalimi.chat.model.Message;
import com.abdulhalimi.chat.model.User;
import com.abdulhalimi.chat.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    public List<Message> getAllMessages() {
        return messageRepository.findAll(Sort.by("date").descending());
    }

    public List<Message> getAllMessages(Integer page, Integer pageSize) {
        Pageable paging = PageRequest.of(page, pageSize, Sort.by("date"));
        Page<Message> pagedResult = messageRepository.findAll(paging);
        if(pagedResult.hasContent()) {
            return pagedResult.getContent();
        }
        return new ArrayList<Message>();
    }

    public void deleteAllMessages(Long userId) {
        Message byUserId = new Message();
        User user = new User();
        user.setId(userId);
        byUserId.setUser(user);
        Example<Message> markedForDeletion = Example.of(byUserId);
        List<Message> messages = messageRepository.findAll(markedForDeletion);
        messageRepository.deleteAll(messages);
    }
}
