package com.fitness.mytrainer.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "recipe")
public class Recipe {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String title;
    private String description;
    private String url;
    @ManyToOne(targetEntity = User.class)
    public User user;
    private int votes;
}
