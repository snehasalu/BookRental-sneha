import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginateModule } from 'ngx-paginate';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooklistComponent } from './Books/booklist/booklist.component';
import { BookComponent } from './Books/book/book.component';
import { MemberlistComponent } from './Member/memberlist/memberlist.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MComponent } from './Member/m/m.component';
import{AuthGuard}from './shared/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberService } from './shared/member.service';
import { RentsComponent } from './rents/rents.component';
import { RentlistComponent } from './rents/rentlist/rentlist.component';
import { RentComponent } from './rents/rent/rent.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooklistComponent,
    BookComponent,
    MemberlistComponent,
    LoginComponent,
    MComponent,
    RentsComponent,
    RentlistComponent,
    RentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginateModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
