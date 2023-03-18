package hackathon.medhack.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vaccine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private float age;
    private String preventedDiseases;
    private String sideEffects;

    @OneToMany(mappedBy = "vaccine")
    List<ChildVaccine> childVaccineList;
}
