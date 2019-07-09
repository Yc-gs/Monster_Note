import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-note-empty',
  templateUrl: './note-empty.component.html',
  styleUrls: ['./note-empty.component.scss']
})
export class NoteEmptyComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  onClick() {
    console.log(111)
    const id = -1
    this.router.navigate(['/default/note/note-content/note-edit', id])
  }

}
