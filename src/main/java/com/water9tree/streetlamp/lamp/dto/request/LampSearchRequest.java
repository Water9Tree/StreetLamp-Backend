package com.water9tree.streetlamp.lamp.dto.request;

import com.water9tree.streetlamp.lamp.entity.Lamp.Status;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record LampSearchRequest(
    @NotNull(message = "상태를 입력해주세요.")
    Status status) {

}
