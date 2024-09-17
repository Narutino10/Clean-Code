import { Component } from '@angular/core';
import { MotoService, Moto } from '../services/moto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-moto-form',
  templateUrl: './add-moto-form.component.html',
  styleUrls: ['./add-moto-form.component.css']
})
export class AddMotoFormComponent {
  moto: Moto = {
    modele: '',
    kilometrage: 0,
    dateDernierEntretien: ''
  };

  constructor(private motoService: MotoService, private router: Router) { }

  handleSubmit(): void {
    this.motoService.addMoto(this.moto).subscribe(
      () => {
        alert('Moto ajoutée avec succès');
        this.router.navigate(['/motos']);
      },
      (error) => console.error('Erreur :', error)
    );
  }
}
