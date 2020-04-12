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
@Table(name = "forum")
public class ForumPost {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String title;
    public String message;
    public int votes;
    @ManyToOne(targetEntity = User.class)
    public User user;
}
