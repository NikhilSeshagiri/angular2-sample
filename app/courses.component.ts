import{Component} from 'angular2/core';
import { CourseService } from './course.service';
import {AutoGrowDirective} from './autogrow.directive'

@Component({
    selector:'courses',
    template:`<h2> Hopefully this works </h2>
            {{tittle}}
            <input type="text" autoGrow/>
            <ul>
                <li *ngFor= "#course of courses">
                {{ course }}
                </li>
            </ul>
            `,
    providers: [CourseService],
    directives:[AutoGrowDirective]
})
export class CoursesComponent { 
    tittle = "What a wonderful day"
    courses;

    constructor(courseService : CourseService){
        this.courses = courseService.getCourses();
    }
}