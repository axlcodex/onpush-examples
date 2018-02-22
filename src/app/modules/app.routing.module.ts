import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'robot-factory',
    pathMatch: 'full'
  },
  {
    path: 'robot-factory',
    loadChildren: 'app/modules/robot-factory/robot-factory.module#RobotFactoryModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
