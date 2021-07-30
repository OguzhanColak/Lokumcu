package main.java.lokumcubaba.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "franchiseInfos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FranchiseInfo {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "did_Retail_Trade")
    private boolean didRetailTrade;

    @Column(name = "explanation")
    private String explanation;

    @Column(name = "city")
    private String city;

    @Column(name = "budget", columnDefinition = "LONGTEXT")
    private String budget;

    @Column(name = "ınAddition")
    private String ınAddition;

    @OneToOne(mappedBy = "franchiseInfo", cascade = CascadeType.ALL)
    private FranchisePreApplication franchisePreApplication;
}
