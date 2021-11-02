import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ChangePageComponent } from './components/change-page/change-page.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoItemComponent,
    ChangePageComponent,
    AllTodosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
