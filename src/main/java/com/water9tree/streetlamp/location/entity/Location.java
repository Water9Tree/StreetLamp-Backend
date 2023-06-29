package com.water9tree.streetlamp.location.entity;

import com.water9tree.streetlamp.lamp.entity.Lamp.Status;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "location")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Location {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "x", nullable = false)
  private Double x;

  @Column(name = "y", nullable = false)
  private Double y;

  public void changeLocation(Double x, Double y) {
    this.x = x;
    this.y = y;
  }

  @Builder
  public Location(Double x, Double y) {
    this.x = x;
    this.y = y;
  }
}
