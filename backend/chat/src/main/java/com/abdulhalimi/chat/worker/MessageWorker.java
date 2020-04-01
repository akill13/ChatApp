package com.abdulhalimi.chat.worker;

import com.abdulhalimi.chat.model.SelectedUser;
import com.abdulhalimi.chat.services.MessageService;
import com.abdulhalimi.chat.services.SelectedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class MessageWorker {
    @Autowired
    private MessageService messageService;

    @Autowired
    private SelectedUserService selectedUserService;

    @Scheduled(cron = "0 0 0 * * *")
    public void clearMessages(){
        selectedUserService.getActive().ifPresent((item)-> {
            messageService.deleteAllMessages(item.getUser().getId());
        });
    }
}
