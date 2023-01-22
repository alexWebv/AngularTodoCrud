import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-edit-todos',
    templateUrl: './edit-todos.component.html',
    styleUrls: ['./edit-todos.component.scss'],
})
export class EditTodosComponent implements OnInit {
    todoForm = new FormGroup({
        id: new FormControl(0, Validators.required),
        label: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        done: new FormControl('', Validators.required)
    });

    private componetDestroyed = new Subject();

    constructor(
        private todoService: TodoService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((param) => {
            const id = Number(param.get('id'));
            this.getById(id);
        });
    }

    getById(id: number) {
        this.todoService.getById(id).pipe(take(1)).subscribe((data) => {
            this.todoForm.setValue(data);
        });
    }

    update() {
        this.todoService.update(this.todoForm.value).pipe(take(1)).subscribe(() => {
            this.router.navigate(['/']);
        });
    }
}
