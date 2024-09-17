import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MotoService, Moto } from '../services/moto.service';

@Component({
  selector: 'app-edit-moto-form',
  templateUrl: './edit-moto-form.component.html',
  styleUrls: ['./edit-moto-form.component.css']
})
export class EditMotoFormComponent implements OnInit {
  moto: Moto = {
    modele: '',
    kilometrage: 0,
    dateDernierEntretien: ''
  };
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private motoService: MotoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.motoService.getMotoById(this.id).subscribe(
        (data) => this.moto = data,
        (error) => console.error(error)
      );
    }
  }

  handleSubmit(): void {
    if (this.id) {
      this.motoService.updateMoto(this.id, this.moto).subscribe(
        () => {
          alert('Moto mise à jour avec succès');
          this.router.navigate(['/motos']);
        },
        (error) => console.error('Erreur :', error)
      );
    }
  }
}
