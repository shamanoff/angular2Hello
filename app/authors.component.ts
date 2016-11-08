import {Component} from 'angular2/core';
import {CourseService} from "./courses.service";

@Component({

    selector: 'authors',
    template: `
        <h2>Authors</h2>
    {{ title }}
    <ul>
        <li *ngFor="#author of authors">
        {{ author }}
    </li>
    </ul>

`,
    providers: [CourseService]
})

export class AuthorComponent {
    title: string = "Title of authors page";
    authors: string[];
    constructor(courseService: CourseService){
        this.authors = courseService.getAuthors();
    }
}
