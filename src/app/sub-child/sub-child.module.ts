import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubchildRoutes } from './sub-child.routing';

import { TdoneComponent } from './td-child-one/tdone.component';
import { TdtwoComponent } from './td-child-two/tdtwo.component';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(SubchildRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule],
  declarations: [
      TdoneComponent,
      TdtwoComponent
  ]
})
export class SubchildModule { }
