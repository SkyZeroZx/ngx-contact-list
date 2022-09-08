import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngx-contact-list';
  public window: Window = window;
  constructor() {}
  public filters: any[] = ['name', 'lastName'];
  public contacts: any[] = [
    { name: 'Anastacia', image: '', lastName: 'Perez' },
    { name: 'Burgues', image: '', lastName: 'Nadies' },
    { name: 'Ayaka', image: '', lastName: 'Kamisato' },
    { name: 'Thoma', image: '', lastName: 'Kamisato' },
    { name: 'Ayato', image: '', lastName: 'Kamisato' },
    { name: 'Razor', image: '', lastName: 'Lupical' },
    { name: 'SkyZero', image: '', lastName: 'ZX' },
    { name: 'Gouru', image: '', lastName: 'GGGGGG' },
    { name: 'VI', image: '', lastName: 'VITU' },
    { name: 'Thu', image: '', lastName: 'Newcombe' },
    { name: 'Stasia', image: '', lastName: 'Isreal' },
    { name: 'Robbie', image: '', lastName: 'Wininger' },
    { name: 'Daphine', image: '', lastName: 'Truex' },
    { name: 'Su', image: '', lastName: 'Juhl' },
    { name: 'Eda', image: '', lastName: 'Banks' },
    { name: 'Bernita', image: '', lastName: 'Izzo' },
    { name: 'Mayme', image: '', lastName: 'Trader' },
    { name: 'Livia', image: '', lastName: 'Luse' },
    { name: 'Celine', image: '', lastName: 'File' },
    { name: 'Nyla', image: '', lastName: 'Stockton' },
    { name: 'Kathleen', image: '', lastName: 'Burwell' },
    { name: 'Bruce', image: '', lastName: 'Slack' },
    { name: 'Bruce', image: '', lastName: 'Pepe' },
    { name: 'Bruce', image: '', lastName: 'Pedro' },
    { name: 'Bruce', image: '', lastName: 'Lucho' },
    { name: 'Bruce', image: '', lastName: 'Luis' },
    { name: 'Jacquline', image: '', lastName: 'July' },
    { name: 'Chelsey', image: '', lastName: 'Feller' },
    { name: 'Particia', image: '', lastName: 'Ours' },
    { name: 'Jazmin', image: '', lastName: 'Island' },
    { name: 'Gracia', image: '', lastName: 'Harvill' },
    { name: 'Jewel', image: '', lastName: 'Elling' },
    { name: 'Maybelle', image: '', lastName: 'niña' },
    { name: 'Leonie', image: '', lastName: 'ñiño' },
  ];

  currentNumber: number = 1;
  public selectExample(number: number) {
    this.currentNumber = number;
    this.example = this.examples[this.currentNumber - 1];
  }
  public example: any = null;
  public examples: any[] = [
    {
      title: 'Simple use',
      html: '<alphabet-filter propAlphaOrder="name" [propsSearch]="[name , lastName]" placeholder="type name or contact" [data]="contacts" [noSmoothScroll]="true" [withTemplate]="true" ></alphabet-filter>',
    },
    {
      title: 'Custom template',
      html:
        '<alphabet-filter propAlphaOrder="name" [propsSearch]="[name , lastName]" placeholder="type name or contact" [data]="contacts" height="calc(100vh - 430px)" [withTemplate]="true" [noSmoothScroll]="true">' +
        '<ng-template let-item>' +
        '<div class="search-list-item">' +
        '<img [src]="item.image" (error)="$event.target.src = \'assets/img/none.png\'" alt="">' +
        '<span>{{item.name}}</span>' +
        '</div>' +
        '</ng-template>' +
        '</alphabet-filter>',
    },
  ];

  ngOnInit() {
    this.selectExample(1);
  }

  imageExist(item){
    if (item.image =='' ){
      return 'assets/images/none.png'
    }
    return item.image;
  }

  selected(event : any){
    console.log('Selected is ' , event);
  }
}
