import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.sass']
})
export class PetComponent {
  petName = 'puppie';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  constructor() { }

  // tslint:disable-next-line:typedef
  updateName = (name: string) => this.petName = name;

  // tslint:disable-next-line:typedef
  updateImage = (image: string) => {
    return this.petImage = image;
  }

}
