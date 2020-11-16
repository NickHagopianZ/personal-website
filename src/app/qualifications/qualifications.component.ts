import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {
  skills: [number, string][] = [
    [5, "Angular2+"],
    [5, "Ansible"],
    [5, "C/C++"],
    [5, "CSS(3)"],
    [5, "Git"],
    [5, "HTML(5)"],
    [5, "Jenkins"],
    [5, "Jira"],
    [5, "OOP"],
    [5, "Python"],
    [5, "Responsive Design"],
    [5, "SQL"],
    [5, "TypeScript"],
    [4, "Agile"],
    [4, "Bootstrap"],
    [4, "Java"],
    [4, "Latex"],
    [4, "Linux"],
    [4, "MATLAB"],
    [4, "PHP"],
    [4, "REST API"],
    [4, "SASS/SCSS"],
    [3, "Apache"],
    [3, "Flask"],
    [3, "JavaScript"],
    [3, "Maple"],
    [2, "Haskell"],
  ];

  imgBoolean:boolean = false;
  imgString:string[] = ['/assets/resumeredac.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
