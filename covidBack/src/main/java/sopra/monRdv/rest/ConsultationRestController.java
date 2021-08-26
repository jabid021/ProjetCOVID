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

import sopra.monRdv.model.Consultation;
import sopra.monRdv.repository.IConsultationRepository;

@RestController
@RequestMapping("/consultation")
@CrossOrigin("*")
public class ConsultationRestController {

	@Autowired
	private IConsultationRepository consultationRepo;

	@GetMapping("")
	public List<Consultation> findAll() {
		return consultationRepo.findAll();
	}

	@GetMapping("/{id}")
	public Consultation find(@PathVariable Long id) {

		Optional<Consultation> optConsultation = consultationRepo.findById(id);

		if (optConsultation.isPresent()) {
			return optConsultation.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	public Consultation create(@RequestBody Consultation consultation) {
		consultation = consultationRepo.save(consultation);

		return consultation;
	}

	@PutMapping("/{id}")
	public Consultation update(@RequestBody Consultation consultation, @PathVariable Long id) {
		if (!consultationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		consultation = consultationRepo.save(consultation);

		return consultation;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!consultationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		consultationRepo.deleteById(id);
	}
}
