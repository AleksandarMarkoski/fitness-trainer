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
@Table(name = "users")
public class User {
    @Id
    public String email;
    public String firstName;
    public String lastName;
    public boolean isAdmin;
}
