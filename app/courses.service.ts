import {Component} from 'angular2/core';

export class CourseService{

    getCourse(): string[]{
        return ["Courses", "Courses2", "Courses3"];

    }

    getAuthors(): string[]{
        return ["Jack", "Bob", "Carlos"];

    }
}