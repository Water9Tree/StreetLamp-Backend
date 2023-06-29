package com.water9tree.streetlamp.lamp.dto.request;

import com.water9tree.streetlamp.lamp.entity.Lamp.Status;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record LampSaveRequest(
    @NotNull(message = "주위 장소를 입력해주세요.")
    String adjoiningPlace,

    @NotNull(message = "상태를 입력해주세요.")
    Status status,

    Boolean isFavorite,

    @NotNull(message = "x 좌표를 입력해주세요.")
    Double x,

    @NotNull(message = "y 좌표를 입력해주세요.")
    Double y) {

}
