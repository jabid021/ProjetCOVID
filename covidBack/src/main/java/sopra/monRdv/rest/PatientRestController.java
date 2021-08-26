package sopra.monRdv.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import sopra.monRdv.model.Patient;
import sopra.monRdv.repository.IUtilisateurRepository;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientRestController {

	@Autowired
	private IUtilisateurRepository utilisateurRepo;

	@GetMapping("")
	public List<Patient> findAll() {
		return utilisateurRepo.findAllPatient();
	}

	@GetMapping("/{id}")
	public Patient find(@PathVariable Long id) {

		Optional<Patient> optPatient = utilisateurRepo.findPatientById(id);

		if (optPatient.isPresent()) {
			return optPatient.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	public Patient create(@RequestBody Patient patient) {
		patient = utilisateurRepo.save(patient);

		return patient;
	}

	@PutMapping("/{id}")
	public Patient update(@RequestBody Patient patient, @PathVariable Long id) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		patient = utilisateurRepo.save(patient);

		return patient;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		utilisateurRepo.deleteById(id);
	}
}
