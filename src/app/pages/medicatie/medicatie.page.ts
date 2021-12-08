import { Component }  from  '@angular/core';

@Component({
  selector: 'app-medicatie',
  templateUrl: 'medicatie.page.html',
  styleUrls: ['medicatie.page.scss'],
})
export class MedicatiePage {

  constructor() { }

option = {
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  // autoplay:true,
   }

}
