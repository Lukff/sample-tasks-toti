import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksService } from './tasks.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TaskListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TasksService]
})
export class AppModule { }
