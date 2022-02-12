import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './Books/booklist/booklist.component';
import { LoginComponent } from './login/login.component';
import { MComponent } from './member/m/m.component';
import { MemberlistComponent } from './Member/memberlist/memberlist.component';
import { RentlistComponent } from './rents/rentlist/rentlist.component';
const routes: Routes = [
  {path:"memberlist",component:MemberlistComponent},
  {path:"booklist",component:BooklistComponent},
  {path:"rentlist",component:RentlistComponent},
  {path:"member/:Id",component:MComponent},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
