package com.water9tree.streetlamp;

import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;

import com.water9tree.streetlamp.lamp.dto.request.LampSaveRequest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;

public class ApiTestHelper extends IntegrationTest {
  protected ResultActions createBuildingUsingApi(LampSaveRequest request) throws Exception {
    return mockMvc.perform(post("/lamp/create")
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(request)));
  }
}
