import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonstersComponent } from './monsters.component';
import { MonsterRoutingModule } from './monster.routing.module';
import { MonstersService } from './monsters.service';

@NgModule({
  imports: [
    CommonModule,
    MonsterRoutingModule
  ],
  declarations: [MonstersComponent],
  providers: [MonstersService]
})
export class MonstersModule { }
