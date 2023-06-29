package com.water9tree.streetlamp.location.dao;

import com.water9tree.streetlamp.location.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {

}
