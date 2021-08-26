package sopra.monRdv.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@Entity
public class Creneau {
	@Id
	@GeneratedValue
	private Long id;
	@Version
	private int version;
	@Temporal(TemporalType.DATE)
	private Date dateCreneau;
	@Temporal(TemporalType.TIME)
	private Date heureCreneau;
	private int duree;
	private boolean dispo;
	@ManyToOne
	@JoinColumn(name = "praticien_id")
	private Praticien praticien;
	@ManyToOne
	@JoinColumn(name = "lieu_id")
	private Lieu lieu;
	@ManyToOne
	@JoinColumn(name = "consultation_id")
	private Consultation consultation;

	public Creneau() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public Date getDateCreneau() {
		return dateCreneau;
	}

	public void setDateCreneau(Date dateCreneau) {
		this.dateCreneau = dateCreneau;
	}

	public Date getHeureCreneau() {
		return heureCreneau;
	}

	public void setHeureCreneau(Date heureCreneau) {
		this.heureCreneau = heureCreneau;
	}

	public int getDuree() {
		return duree;
	}

	public void setDuree(int duree) {
		this.duree = duree;
	}

	public boolean isDispo() {
		return dispo;
	}

	public void setDispo(boolean dispo) {
		this.dispo = dispo;
	}

	public Praticien getPraticien() {
		return praticien;
	}

	public void setPraticien(Praticien praticien) {
		this.praticien = praticien;
	}

	public Lieu getLieu() {
		return lieu;
	}

	public void setLieu(Lieu lieu) {
		this.lieu = lieu;
	}

	public Consultation getConsultation() {
		return consultation;
	}

	public void setConsultation(Consultation consultation) {
		this.consultation = consultation;
	}

}
