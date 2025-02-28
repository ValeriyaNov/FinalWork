package org.example.model;

//import jakarta.persistence.Entity;
import lombok.*;
import lombok.Data;
import javax.persistence.*;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@Table(name="standards")
@AllArgsConstructor
@NoArgsConstructor
public class Standard implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="title", nullable = false)
    private  String title;
    @Column(name="designation", nullable = false)
    private  String designation;
    @Column(name="cipher", nullable = false)
    private  String cipher;
    @OneToMany(mappedBy = "standard",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    List<Exspertise> exspertises = new ArrayList<>();

    public List<Exspertise> getExspertises() {
        return exspertises;
    }

    public void addExspertise(Exspertise exspertise) {
        exspertises.add(exspertise);
        exspertise.setStandard(this);
    }

    public void removeExpertise(Exspertise exspertise) {
        exspertises.remove(exspertise);
        exspertise.setStandard(null);
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDesignation() {
        return designation;
    }
    public void setDesignation(String designation) {
        this.designation = designation;
    }
    public String getCipher() {
        return cipher;
    }
    public void setCipher(String cipher) {
        this.cipher = cipher;
    }
}
