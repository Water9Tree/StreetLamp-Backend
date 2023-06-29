package com.water9tree.streetlamp.lamp.application;

import com.water9tree.streetlamp.lamp.dao.LampRepository;
import com.water9tree.streetlamp.lamp.dto.request.LampSaveRequest;
import com.water9tree.streetlamp.lamp.dto.response.LampSaveResponse;
import com.water9tree.streetlamp.lamp.entity.Lamp;
import com.water9tree.streetlamp.location.entity.Location;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LampService {

  private final LampRepository lampRepository;

  @Transactional
  public LampSaveResponse save(LampSaveRequest request) {
    Location location = Location.builder()
        .x(request.x())
        .y(request.y()).build();

    Lamp lamp = Lamp.builder()
        .status(request.status())
        .adjoiningPlace(request.adjoiningPlace())
        .location(location)
        .isFavorite(request.isFavorite()).build();

    return LampSaveResponse.from(lampRepository.save(lamp));
  }
}
