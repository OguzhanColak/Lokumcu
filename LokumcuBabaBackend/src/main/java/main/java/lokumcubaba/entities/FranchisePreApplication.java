package main.java.lokumcubaba.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "franchise_pre_application")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FranchisePreApplication {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="franchise_id")
    private FranchiseInfo franchiseInfo;
}
