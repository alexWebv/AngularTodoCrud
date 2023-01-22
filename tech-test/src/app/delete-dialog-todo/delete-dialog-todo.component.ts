import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-delete-dialog-todo',
  templateUrl: './delete-dialog-todo.component.html',
  styleUrls: ['./delete-dialog-todo.component.scss'],
})
export class DeleteDialogTodoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
   this.todoService.delete(this.data.id).pipe(take(1)).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}
