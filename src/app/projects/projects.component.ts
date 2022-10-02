import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  title:string[] = ["The Nurse Scheduling Problem",
                    "The Traveling Salesman Problem",
                    "The Connecting Wall"];
  content:string[]=[
    "The nurse scheduling problem (NSP) is the problem of optimally scheduling nurses to satisfy some set of criteria. It is most notable for being NP-hard in many forms. This project was created to fulfill the requirements of a yearlong senior independent study. The software implements many optimization methods including genetic algorithms, greedy approaches and hueristic methods. Accompanying this software is over 60 pages of documentation and written analysis created with the intention of critically examining all aspects of the NSP. This analysis considers varying constraints, problem size and solution methods to determine the best methods for solving the problem. The NSP found in the software, with the help of the balanced rosters constraint, is proven to be NP-hard.",
    "The traveling salesman problem (TSP) is a classic NP-hard problem which asks for the optimal route through points such that the ending and starting point are the same. This project includes software that implements, displays and optimizes the TSP. The software, in conjunction with a written analysis, intends to critically examine all aspects of the TSP. This software uses OpenGL and the GLUT framework.",
    "This software intends to duplicate the functionality of a puzzle from the British game show Only Connect. The puzzle is called the connecting wall and it challenges contestants to find connections between 16 words. Contestants must find four hidden sets of four words and, at the end of the round, correctly name the connecting theme for each set. This project was created for programming practice and for a casual only connect party."];
  choice:number = 0;
  choose(value:number) {
    this.choice = value;
  }

  imgBoolean: boolean = false;
  imgString: string[] = [];
  string1: string[] = [
    "assets/optimized_nearest_neighbor_with_2op.gif",
    "assets/optimized_insertion.gif",
    "assets/optimized_randomstart_2op.gif",
    "assets/optimized_brute_force.gif",
  ]
  constructor() { }

  ngOnInit() {
  }

}
