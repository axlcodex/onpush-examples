import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RobotFactoryComponent } from './robot-factory.component';

const routes: Routes = [
  {
    path: '',
    component: RobotFactoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotFactoryRoutingModule { }
