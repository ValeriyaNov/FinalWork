package org.example.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import java.io.Serializable;
import java.time.LocalDateTime;


@Data
@Entity
@Table(name="exspertises")
@AllArgsConstructor
public class Exspertise implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="tk", nullable = true)
    private  String tk;
    @Column(name="start_time", nullable = true)
    private LocalDateTime startTime;
    @Column(name="final_time", nullable = true)
   // @JsonFormat(pattern = "dd-MM-yyyy")
    private  LocalDateTime finalTime;
    @Column(name="type", nullable = true)
    private  String type;
    @Column(name="status", nullable = true)
    private  Boolean status;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="standard_id", nullable = false)
    @JsonIgnore
    private Standard standard;

    @Column(name="title")
    private String title;
    @Column(name="designation")
    private String designation;
    @Column(name="cipher")
    private String cipher;


    public Exspertise(String tk, LocalDateTime finalTime, String type) {

        this.tk = tk;
        this.startTime = LocalDateTime.now();
        this.finalTime = finalTime;
        this.type = type;
        this.status = true;

    }
    public Exspertise() {
    }


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTk() {
        return tk;
    }
    public void setTk(String tk) {
        this.tk = tk;
    }
    public LocalDateTime getStartTime() {
        return startTime;
    }
    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }
    public LocalDateTime getFinalTime() {
        return finalTime;
    }
    public void setFinalTime(LocalDateTime finalTime) {
        this.finalTime = finalTime;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public Boolean getStatus() {
        return status;
    }
    public void setStatus(Boolean status) {
        this.status = status;
    }
    public Standard getStandard() {
        return standard;
    }
    public void setStandard(Standard standard) {
        this.standard = standard;
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
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
}
