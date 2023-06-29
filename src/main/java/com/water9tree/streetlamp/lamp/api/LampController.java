package com.water9tree.streetlamp.lamp.api;

import com.water9tree.streetlamp.lamp.application.LampService;
import com.water9tree.streetlamp.lamp.dto.request.LampSaveRequest;
import com.water9tree.streetlamp.lamp.dto.response.LampSaveResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lamp")
public class LampController {

  private final LampService lampService;

  @PostMapping("/create")
  public ResponseEntity<LampSaveResponse> createLamp(@RequestBody LampSaveRequest request) {
    LampSaveResponse response = lampService.save(request);
    return ResponseEntity.status(HttpStatus.CREATED).body(response);
  }

  // TODO: 2023-06-29 개발 미완성 - API 이어서 개발하기
}
