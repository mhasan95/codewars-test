import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {CodingchallengesComponent} from './codingchallenges/codingchallenges.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

  const routes: Routes = [
    { path: 'challenges', component: CodingchallengesComponent },
    { path: 'reactiveforms', component: ReactiveformsComponent}
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
