import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotoService, Moto } from '../services/moto.service';

@Component({
  selector: 'app-moto-detail',
  templateUrl: './moto-detail.component.html',
  styleUrls: ['./moto-detail.component.css']
})
export class MotoDetailComponent implements OnInit {
  moto: Moto | null = null;

  constructor(
    private route: ActivatedRoute,
    private motoService: MotoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.motoService.getMotoById(id).subscribe(
        (data) => this.moto = data,
        (error) => console.error(error)
      );
    }
  }
}
