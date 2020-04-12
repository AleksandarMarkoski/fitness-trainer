package com.fitness.mytrainer.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "experience")
public class Experience {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String title;
    public String description;
    public String url;
    public int votes;
    @ManyToOne(targetEntity = User.class)
    public User user;
    @ManyToMany(targetEntity = Recipe.class, fetch = FetchType.EAGER)
    public List<Recipe> recipes;
}
