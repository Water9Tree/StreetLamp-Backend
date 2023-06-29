package com.water9tree.streetlamp.lamp.dao;

import com.water9tree.streetlamp.lamp.entity.Lamp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LampRepository extends JpaRepository<Lamp, Long> {

}
