import { Component } from '@angular/core';
import { Residence } from '../model/Residence';
import { Apartment } from '../model/Appartement';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[ 
    {id:1,"name": "El fel","address":"Borj Cedria", 
 "image":"../../assets/images/R1.jpeg"}, 
     {id:2,"name": "El yasmine", 
 "address":"Ezzahra","image":"../../assets/images/R2.jpg"}, 
     {id:3,"name": "El Arij", 
 "address":"Rades","image":"../../assets/images/R3.jpg"}, 
     {id:4,"name": "El Anber","address":"Manzah 5", 
 "image":"../../assets/images/R4.jpg"} 
   ]; 
   listApartments:Apartment[]=[
    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
  ]
  selectedResidence: Residence | null = null;
  apartmentsToShow: Apartment[] = [];

  constructor() { }

  showApartments(residence: Residence): void {
    this.selectedResidence = residence;
    this.apartmentsToShow = this.listApartments.filter(apartment => apartment.residence.id === residence.id);
  }

  favoritesList: Apartment[] = [];

addToFavorites(apartment: Apartment): void {
  if (!this.favoritesList.some(a => a.id === apartment.id)) {
    this.favoritesList.push(apartment);
  }
}

selectedResidenceApartments: Apartment[] = [];

  surface: number | null = null;
filterApartmentsBySurface(): void {
  if (this.surface !== null) {
    this.apartmentsToShow = this.listApartments.filter(a => a.surface === this.surface);
  } else {
    this.apartmentsToShow = [];
  }
}
}
