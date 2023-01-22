import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { DeleteDialogTodoComponent } from '../delete-dialog-todo/delete-dialog-todo.component';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss'],
})
export class AllTodosComponent implements OnInit, OnDestroy {
  allTodosSource = new MatTableDataSource([]);
  displayedColumns: string[] = [
    'id',
    'label',
    'description',
    'category',
    'done',
    'actions',
  ];

  ngUnsubscribe = new Subject<void>();
  constructor(
    private todoService: TodoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.todoService.get().pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.allTodosSource = new MatTableDataSource(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allTodosSource.filter = filterValue.trim().toLowerCase();
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogTodoComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
      if (result) {

        this.get();
      }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
