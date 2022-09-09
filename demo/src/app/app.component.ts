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
    { name: 'Alfredo', image: '', lastName: 'Perez', phone: '123456789' },
    { name: 'Ayaka', image: '', lastName: 'Kamisato', phone: '323456789' },
    { name: 'Burgues', image: '', lastName: 'Nadies', phone: '423456789' },
    { name: 'Thoma', image: '', lastName: 'Kamisato', phone: '523456789' },
    { name: 'Ayato', image: '', lastName: 'Kamisato', phone: '623456789' },
    { name: 'Razor', image: '', lastName: 'Lupical', phone: '823456789' },
    { name: 'SkyZero', image: '', lastName: 'Zx', phone: '923456789' },
    { name: 'Gouru', image: '', lastName: 'Ggggg', phone: '783456789' },
    { name: 'VI', image: '', lastName: 'VITU', phone: '756456789' },
    { name: 'Thu', image: '', lastName: 'Newcombe', phone: '5676456789' },
    { name: 'Stasia', image: '', lastName: 'Isreal', phone: '234456234' },
    { name: 'Robbie', image: '', lastName: 'Wininger', phone: '234456234' },
    { name: 'Daphine', image: '', lastName: 'Truex', phone: '234456789' },
    { name: 'Su', image: '', lastName: 'Juhl', phone: '324456789' },
    { name: 'Narukami', image: '', lastName: 'Inazuma', phone: '394456789' },
    { name: 'Eda', image: '', lastName: 'Banks', phone: '345456789' },
    { name: 'Bernita', image: '', lastName: 'Izzo', phone: '723458789' },
    { name: 'Mayme', image: '', lastName: 'Trader', phone: '777777777' },
    { name: 'Livia', image: '', lastName: 'Luse', phone: '777777776' },
    { name: 'Celine', image: '', lastName: 'File', phone: '555456789' },
    { name: 'Nyla', image: '', lastName: 'Stockton', phone: '554456789' },
    { name: 'Kathleen', image: '', lastName: 'Burwell', phone: '663456789' },
    { name: 'Bruce', image: '', lastName: 'Slack', phone: '997456789' },
    { name: 'Bruce', image: '', lastName: 'Pepe', phone: '993456789' },
    { name: 'Bruce', image: '', lastName: 'Pedro', phone: '963477789' },
    { name: 'Bruce', image: '', lastName: 'Lucho', phone: '953486789' },
    { name: 'Bruce', image: '', lastName: 'Luis', phone: '263562789' },
    { name: 'Jacquline', image: '', lastName: 'July', phone: '231456789' },
    { name: 'Chelsey', image: '', lastName: 'Feller', phone: '654456789' },
    { name: 'Particia', image: '', lastName: 'Ours', phone: '4346546789' },
    { name: 'Jazmin', image: '', lastName: 'Island', phone: '345456789' },
    { name: 'Gracia', image: '', lastName: 'Harvill', phone: '663345789' },
    { name: 'Venti', image: '', lastName: 'Bardo', phone: '345456789' },
    { name: 'Xiao', image: '', lastName: 'Yakshas', phone: '663456789' },
    { name: 'Hu', image: '', lastName: 'Tao', phone: '345456789' },
    { name: 'Kokomi', image: '', lastName: '', phone: '34534453' },
    { name: 'Shenhe', image: '', lastName: '', phone: '34534534' },
    { name: 'Itto', image: '', lastName: 'Oni', phone: '435343445' },
    { name: 'Yae', image: '', lastName: 'Miko', phone: '6634553425439' },
    { name: 'Jewel', image: '', lastName: 'Elling', phone: '34534534534' },
    { name: 'Maybelle', image: '', lastName: 'Ñidsa', phone: '657567' },
    { name: 'Leonie', image: '', lastName: 'Ñifsd', phone: '5678979' },
    { name: 'Zhongli', image: '', lastName: '', phone: '87987978' },
    { name: 'Kuki', image: '', lastName: 'Shinobu', phone: '56756756' },
    { name: 'Noelle', image: '', lastName: '', phone: '87987987' },
    { name: 'Barbara', image: '', lastName: '', phone: '56756756' },
    { name: 'Amber', image: '', lastName: '', phone: '5675666756' },
    { name: 'Xinyan', image: '', lastName: '', phone: '56756756' },
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
        '<alphabet-filter propAlphaOrder="name" [propsSearch]="[name , lastName , phone ]" placeholder="type name or contact" [data]="contacts" height="calc(100vh - 430px)" [withTemplate]="true" [noSmoothScroll]="true">' +
        '<ng-template let-item>' +
        '<div class="search-list-item">' +
        '<img [src]="imageExist(item)"   alt="">' +
        '<span>{{item.name}}</span>' +
        '<small class="phone-small">' +
        ' {{item.phone | slice:0:3}} - {{item.phone | slice:3:6}} - {{item.phone | slice:6:9}}' +
        '</small> ' +
        '</div>' +
        '</ng-template>' +
        '</alphabet-filter>',
    },
  ];

  ngOnInit() {
    console.log('height is', window.innerHeight);
    this.selectExample(1);
  }

  imageExist(item) {
    if (item.image == '') {
      return 'assets/images/none.png';
    }
    return item.image;
  }

  dataSelect: any = null;
  selected(event: any) {
    this.dataSelect = event;
    console.log('Selected is ', event);
  }
}
