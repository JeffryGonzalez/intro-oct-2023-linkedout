import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home.component";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  // other routes here soon.

  {
    path: "**",
    redirectTo: "home",
  },
];
