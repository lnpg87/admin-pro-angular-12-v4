import { Routes } from '@angular/router';

import { TdoneComponent } from './td-child-one/tdone.component';
import { TdtwoComponent } from './td-child-two/tdtwo.component';

export const SubchildRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'td-child-one',
        component: TdoneComponent,
        
      },
      {
        path: 'td-child-two',
        component: TdtwoComponent,
        
      },
    ]
  }
];
