package com.jsb.controller.client;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsb.constant.AppConstants;
import com.jsb.dto.chat.ClientRoomExistenceResponse;
import com.jsb.dto.chat.RoomResponse;
import com.jsb.entity.authentication.User;
import com.jsb.entity.chat.Message;
import com.jsb.entity.chat.Room;
import com.jsb.mapper.chat.MessageMapper;
import com.jsb.mapper.chat.RoomMapper;
import com.jsb.repository.authentication.UserRepository;
import com.jsb.repository.chat.MessageRepository;
import com.jsb.repository.chat.RoomRepository;

import java.util.Collections;
import java.util.Comparator;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/client-api/chat")
@AllArgsConstructor
@CrossOrigin(AppConstants.FRONTEND_HOST)
public class ClientChatController {

    private UserRepository userRepository;
    private RoomRepository roomRepository;
    private RoomMapper roomMapper;
    private MessageRepository messageRepository;
    private MessageMapper messageMapper;

    @GetMapping("/get-room")
    public ResponseEntity<ClientRoomExistenceResponse> getRoom(Authentication authentication) {
        String username = authentication.getName();

        RoomResponse roomResponse = roomRepository.findByUserUsername(username)
                .map(roomMapper::entityToResponse)
                .orElse(null);

        var clientRoomExistenceResponse = new ClientRoomExistenceResponse();
        clientRoomExistenceResponse.setRoomExistence(roomResponse != null);
        clientRoomExistenceResponse.setRoomResponse(roomResponse);
        clientRoomExistenceResponse.setRoomRecentMessages(
                roomResponse != null
                        ? messageMapper.entityToResponse(
                        messageRepository
                                .findByRoomId(
                                        roomResponse.getId(),
                                        PageRequest.of(0, 20, Sort.by(Sort.Direction.DESC, "id")))
                                .stream()
                                .sorted(Comparator.comparing(Message::getId))
                                .collect(Collectors.toList()))
                        : Collections.emptyList());

        return ResponseEntity.status(HttpStatus.OK).body(clientRoomExistenceResponse);
    }

    @PostMapping("/create-room")
    public ResponseEntity<RoomResponse> createRoom(Authentication authentication) {
        String username = authentication.getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        Room room = new Room();
        room.setName(user.getFullname());
        room.setUser(user);

        Room roomAfterSave = roomRepository.save(room);

        return ResponseEntity.status(HttpStatus.OK).body(roomMapper.entityToResponse(roomAfterSave));
    }

}
