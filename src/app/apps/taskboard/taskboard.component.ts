import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  task: FormGroup | null = null;
  todoToEdit: any = null;


  constructor(private fb: FormBuilder, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.task = this.fb.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
    });
  }

  todos = [
    {
      id: 101,
      title: 'QA Testing',
      desc: 'Etiam porta sem malesuada magna mollis euismod.',
      class: '',
    },
    {
      id: 102,
      title: 'Layout design',
      desc:
        'Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      class: 'task-status-danger',
    },
    {
      id: 103,
      title: 'Fix navigation menu',
      desc: 'Donec sed odio dui.',
      class: 'task-status-info',
    },
    {
      id: 104,
      title: 'Update bootstrap 4',
      desc: 'Aenean lacinia bibendum nulla sed consectetur.',
      class: '',
    },
    {
      id: 105,
      title: 'Run build tools',
      desc:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      class: '',
    },
    {
      id: 106,
      title: 'List article ideas',
      desc:
        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      class: 'task-status-success',
    },
    {
      id: 107,
      title: 'Reactjs fixes',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      class: '',
    },
    {
      id: 108,
      title: 'Implement SSL',
      desc: 'Etiam porta sem malesuada magna mollis euismod.',
      class: 'task-status-warning',
    },
  ];

  process = [
    {
      id: 201,
      title: 'QOS Assessment',
      desc: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
      class: '',
    },
    {
      id: 202,
      title: 'Schedule new tasks',
      desc: 'Sed posuere consectetur est at lobortis.',
      class: 'task-status-warning',
    },
    {
      id: 203,
      title: 'Add dashboard variants',
      desc: 'Nulla vitae elit libero, a pharetra augue.',
      class: '',
    },
    {
      id: 204,
      title: 'Extended color scheme support',
      desc: 'Morbi leo risus, porta ac consectetur ac, vestibulum ateros.',
      class: '',
    },
    {
      id: 205,
      title: 'Merge unit tests',
      desc: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
      class: 'task-status-info',
    },
    {
      id: 206,
      title: 'Test final version',
      desc:
        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      class: '',
    },
  ];

  pendings = [
    {
      id: 301,
      title: 'Integrate Angular 4',
      desc: 'Nulla vitae elit libero, a pharetra augue.',
      class: '',
    },
    {
      id: 302,
      title: 'Additional fields',
      desc: 'Donec id elit non mi porta gravida at eget metus.',
      class: '',
    },
    {
      id: 303,
      title: 'Draggable task board',
      desc: 'Sed posuere consectetur est at lobortis.',
      class: 'task-status-danger',
    },
    {
      id: 304,
      title: 'Setup CI server',
      desc: 'Maecenas faucibus mollis interdum.',
      class: 'task-status-danger',
    },
    {
      id: 305,
      title: 'Assign new tasks',
      desc: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
      class: '',
    },
    {
      id: 306,
      title: 'Contact administrator',
      desc:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      class: '',
    },
    {
      id: 307,
      title: 'Commit changes',
      desc: 'Aenean lacinia bibendum nulla sed consectetur.',
      class: '',
    },
  ];

  done = [
    {
      id: 401,
      title: 'Store new files',
      desc: 'Sed posuere consectetur est at lobortis.',
      class: 'task-status-info',
    },
    {
      id: 402,
      title: 'Build landing page',
      desc: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
      class: '',
    },
    {
      id: 403,
      title: 'Setup basic layout',
      desc: 'Vestibulum id ligula porta felis euismod semper.',
      class: '',
    },
    {
      id: 404,
      title: 'Graphical fixes',
      desc: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      class: '',
    },
    {
      id: 405,
      title: 'Email alerts',
      desc: 'Donec sed odio dui.',
      class: 'task-status-warning',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


  openModal(targetModal: NgbModal, data: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

    if (data != null) {
      this.todoToEdit = data;
      this.task?.patchValue({
        Title: data.title,
        Description: data.desc
      });
    }
  }

  onSubmit() {
    if (this.todoToEdit === null) {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.task?.get('Title')?.value,
        desc: this.task?.get('Description')?.value,
        class: '',
      });
      alert('Task added !');
    }
    else {
      let index = -5;

      if (this.todos.indexOf(this.todoToEdit) !== -1) {
        index = this.todos.indexOf(this.todoToEdit)
      }
      else if (this.process.indexOf(this.todoToEdit) !== -1) {
        index = this.process.indexOf(this.todoToEdit)
      }
      else if (this.pendings.indexOf(this.todoToEdit) !== -1) {
        index = this.pendings.indexOf(this.todoToEdit)
      }
      else if (this.done.indexOf(this.todoToEdit) !== -1) {
        index = this.done.indexOf(this.todoToEdit)
      }

      if (index !== -5) {
        this.todoToEdit.title = this.task?.get('Title')?.value;
        this.todoToEdit.desc = this.task?.get('Description')?.value;
        this.todos[index] = this.todoToEdit;
      }
    }

    this.closeBtnClick();

  }

  deleteTask(taskId: any) {
    if (confirm('Are you sure to delete it ?')) {
      this.todos = this.todos.filter(task => task.id !== taskId);
      this.process = this.process.filter(task => task.id !== taskId);
      this.pendings = this.pendings.filter(task => task.id !== taskId);
      this.done = this.done.filter(task => task.id !== taskId);
    }
  }

  closeBtnClick() {
    this.todoToEdit = null;
    this.modalService.dismissAll();
    this.ngOnInit();
  }
}
