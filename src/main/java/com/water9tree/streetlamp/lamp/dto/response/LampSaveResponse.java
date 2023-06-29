package com.water9tree.streetlamp.lamp.dto.response;

import com.water9tree.streetlamp.lamp.entity.Lamp;
import com.water9tree.streetlamp.lamp.entity.Lamp.Status;
import com.water9tree.streetlamp.location.entity.Location;
import lombok.Builder;

@Builder
public record LampSaveResponse(Long id,
                               String adjoiningPlace,
                               Status status,
                               Boolean isFavorite,
                               Location location) {

  public static LampSaveResponse from(Lamp lamp) {
    return LampSaveResponse.builder()
        .id(lamp.getId())
        .adjoiningPlace(lamp.getAdjoiningPlace())
        .status(lamp.getStatus())
        .isFavorite(lamp.getIsFavorite())
        .location(lamp.getLocation()).build();
  }
}
