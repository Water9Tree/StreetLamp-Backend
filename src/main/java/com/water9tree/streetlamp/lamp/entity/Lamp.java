package com.water9tree.streetlamp.lamp.entity;

import com.water9tree.streetlamp.location.entity.Location;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "lamp")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Lamp {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JoinColumn(name = "location_id", nullable = false)
  private Location location;

  @Column(name = "adjoining_place", nullable = false)
  private String adjoiningPlace;

  @Enumerated(EnumType.STRING)
  @Column(name = "status", nullable = false)
  private Status status;

  @Column(name = "is_favorite", nullable = false)
  private Boolean isFavorite;

  public enum Status {
    LIGHT, DARK
  }

  @Builder
  public Lamp(Location location, String adjoiningPlace, Status status, Boolean isFavorite) {
    this.location = location;
    this.adjoiningPlace = adjoiningPlace;
    this.status = status;
    this.isFavorite = isFavorite;
  }
}
