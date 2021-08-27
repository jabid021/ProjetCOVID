package sopra.monRdv.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Patient extends Utilisateur {
	@Temporal(TemporalType.DATE)
	@JsonView(Views.ViewCommon.class)
	private Date dateNaissance;
	@Column(length = 50)
	@JsonView(Views.ViewCommon.class)
	private String numeroSS;
	@Column(length = 15)
	@JsonView(Views.ViewCommon.class)
	private String telephone;
	@OneToMany(mappedBy = "patient")
	@JsonView(Views.ViewPatient.class)
	private List<Consultation> consultations = new ArrayList<Consultation>();

	public Patient() {
		super();
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public String getNumeroSS() {
		return numeroSS;
	}

	public void setNumeroSS(String numeroSS) {
		this.numeroSS = numeroSS;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public List<Consultation> getConsultations() {
		return consultations;
	}

	public void setConsultations(List<Consultation> consultations) {
		this.consultations = consultations;
	}

}
