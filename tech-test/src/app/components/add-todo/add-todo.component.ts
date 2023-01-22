import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit, OnDestroy {


    todoForm = new FormGroup({
        label: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        done: new FormControl('', Validators.required)
    });
    ngUnsubscribe = new Subject<void>();
    constructor(
        private todoService: TodoService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    create() {
        this.todoService.create(this.todoForm.value).pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
            this.router.navigate(['/']);
        });
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
