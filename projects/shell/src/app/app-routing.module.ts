import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountsComponent } from './counts/counts.component';

const routes: Routes = [
  { path: "", component: CountsComponent },
  {
    path: "app1",
    loadChildren: () => import("app1/Module").then((m) => m.Page1Module),
  },
  {
    path: "app2",
    loadChildren: () => import("app2/Module").then((m) => m.Page1Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
