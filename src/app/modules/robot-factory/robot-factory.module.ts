import { NgModule } from '@angular/core';

import { RobotFactoryRoutingModule } from './robot-factory.routing.module';
import { RobotFactoryComponent } from './robot-factory.component';
import { RobotBodyComponent } from './body/robot-body.component';
import { ArmComponent } from './body/arm/arm.component';
import { LegComponent } from './body/leg/leg.component';
import { RobotWeaponComponent } from './weapon/robot-weapon.component';
import { WeaponBuilderComponent } from './weapon/builder/weapon-builder.component';
import { GalleryComponent } from './weapon/gallery/gallery.component';

@NgModule({
  imports: [RobotFactoryRoutingModule],
  declarations: [
    RobotFactoryComponent,
    RobotBodyComponent,
    ArmComponent,
    LegComponent,
    RobotWeaponComponent,
    WeaponBuilderComponent,
    GalleryComponent
  ]
})
export class RobotFactoryModule { }
