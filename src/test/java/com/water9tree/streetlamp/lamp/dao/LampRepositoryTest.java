package com.water9tree.streetlamp.lamp.dao;

import static org.assertj.core.api.Assertions.assertThat;

import com.water9tree.streetlamp.IntegrationTest;
import com.water9tree.streetlamp.lamp.entity.Lamp;
import com.water9tree.streetlamp.lamp.entity.Lamp.Status;
import com.water9tree.streetlamp.location.entity.Location;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class LampRepositoryTest extends IntegrationTest {

  @Autowired
  LampRepository lampRepository;

  @Nested
  @DisplayName("램프 레파지토리 테스트")
  class LampTest {

    @Test
    public void 램프의_상태를_저장한다() throws Exception {
      lampRepository.save(Lamp.builder()
          .status(Status.LIGHT)
          .adjoiningPlace("3공학관")
          .isFavorite(true)
          .location(Location.builder().x(4.0).y(1.5).build())
          .build());

      List<Lamp> lampList = lampRepository.findAll();
      assertThat(lampList.size()).isEqualTo(1);
    }
  }
}
