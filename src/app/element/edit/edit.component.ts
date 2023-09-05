import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  title: string;
  desc: string;
  editT: string;
  editD: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data:{
    title:string
    desc:string
  }){
    this.title = data.title
    this.desc = data.desc
    this.editT = data.title
    this.editD = data.desc
  }

  onSubmit(){
    const todo = {
      title: this.title,
      desc: this.desc,
      active: true
    }
    console.log(todo);
  }
}
