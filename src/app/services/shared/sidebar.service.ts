import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graph1' },
        { titulo: 'Promises', url: '/promises'},
        { titulo: 'RxJs', url: '/rxjs'}
      ]
    }
  ];

  constructor() { }

}
