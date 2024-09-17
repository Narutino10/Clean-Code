import { Component, OnInit } from '@angular/core';
import { MotoService, Moto } from '../services/moto.service';

@Component({
  selector: 'app-moto-list',
  templateUrl: './moto-list.component.html',
  styleUrls: ['./moto-list.component.css']
})
export class MotoListComponent implements OnInit {
  motos: Moto[] = [];

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.getMotos().subscribe(
      (data) => this.motos = data,
      (error) => console.error(error)
    );
  }
}
