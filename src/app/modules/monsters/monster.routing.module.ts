import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MonstersComponent } from './monsters.component';

const routes = [{
  path: '',
  component: MonstersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterRoutingModule { }
