import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { TabMenuComponent } from './core/tab-menu/tab-menu.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [UsersComponent, FooterComponent, HeaderComponent, TabMenuComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
