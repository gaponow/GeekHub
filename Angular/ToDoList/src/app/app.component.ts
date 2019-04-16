import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup = new FormGroup({
    task: new FormControl()
  })
  public tasks = [];
  submit() {
    this.tasks.push(this.form.value.task);
    this.form.reset();
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1)
  }
}
