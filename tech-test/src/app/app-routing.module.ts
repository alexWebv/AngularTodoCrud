import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodosComponent } from './edit-todos/edit-todos.component';

const routes: Routes = [
  {
    path: '',
    component: AllTodosComponent,
  },
  {
    path: 'add-student',
    component: AddTodoComponent,
  },
  {
    path: 'edit-student/:id',
    component: EditTodosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
