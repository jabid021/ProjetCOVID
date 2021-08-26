package sopra.monRdv.rest;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import sopra.monRdv.model.Convention;
import sopra.monRdv.model.Statut;
import sopra.monRdv.model.Utilisateur;
import sopra.monRdv.repository.IUtilisateurRepository;
import sopra.monRdv.rest.dto.UserDTO;

@RestController
@CrossOrigin("*")
public class CommonRestController {

	@Autowired
	private IUtilisateurRepository utilisateurRepo;

	@PostMapping("/authentification")
	public UserDTO utilisateur(@RequestBody UserDTO userDto) {
		Optional<Utilisateur> utilisateur = utilisateurRepo.findByEmailAndMotDePasse(userDto.getLogin(),
				userDto.getPassword());

		if (utilisateur.isPresent()) {
			userDto.setUtilisateur(utilisateur.get());
			userDto.setType(utilisateur.get().getClass().getSimpleName());

			return userDto;
		} else {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Login/password introuvable");
		}
	}

	@GetMapping("/convention")
	public Convention[] conventions() {
		return Convention.values();
	}

	@GetMapping("/statut")
	public Statut[] statut() {
		return Statut.values();
	}
}
