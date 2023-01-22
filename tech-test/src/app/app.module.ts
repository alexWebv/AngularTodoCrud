import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { EditTodosComponent } from './edit-todos/edit-todos.component';
import { DeleteDialogTodoComponent } from './delete-dialog-todo/delete-dialog-todo.component';
import { MatCheckboxModule } from "@angular/material/checkbox";


@NgModule({
    declarations: [
        AppComponent,
        AllTodosComponent,
        AddTodoComponent,
        EditTodosComponent,
        DeleteDialogTodoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule,
        FormsModule,
        MatIconModule,
        MatDialogModule,
        MatCheckboxModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
