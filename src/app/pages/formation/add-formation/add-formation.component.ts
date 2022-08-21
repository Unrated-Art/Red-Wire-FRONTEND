import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/models/formation';
import { Theme } from 'src/models/theme';
import { FormationService } from 'src/services/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss'],
})
export class AddFormationComponent implements OnInit {
  formation!: Formation;
  themes: string[] = [
    'Développement',
    'Big Data, Data Science et IA',
    'Informatique décicionnelle',
    'Bases de données',
    'Réseaux et Télécoms',
    'Cybersécurité',
    'Cloud computing',
    'Virtualisation',
    'Windows et System Center',
    'Linux, Unix, Mac',
    'Solutions collaboratives Microsoft',
    'IBM',
    'SAP',
    'Tests',
    'Développement web et mobilité',
    'IoT, Systèmes embarquées, Robotic Process Automation',
    'DevOps, industrialisation et gestion de production',
    'PAO, CAO, DAO, BIM',
  ];
  //themes: Theme[] = [];
  //themes: Array<Theme> = [];

  @Input()
  ref!: string;
  @Input()
  title!: string;
  @Input()
  location!: string;
  @Input()
  interIntra!: boolean; //ou inter?
  @Input()
  duration!: number;
  @Input()
  prerequis!: string;
  @Input()
  goal!: string;
  @Input()
  targetPublic!: string;
  @Input()
  details!: string;
  @Input()
  theme!: string;

  errorMessage?: HttpErrorResponse;

  constructor(
    private formationService: FormationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public showMessage(message: string) {
    alert(message);
  }

  public addFormation(/*addForm: NgForm*/): void {
    //document.getElementById("add-training-form")?.click();
    this.formation.reference = this.ref;
    this.formation.titref = this.title;
    this.formation.lieu = this.location;
    this.formation.interFormation = this.interIntra;
    this.formation.duree = this.duration;
    this.formation.prerequis = this.prerequis;
    this.formation.objectif = this.goal;
    this.formation.publicVise = this.targetPublic;
    this.formation.programmeDetaille = this.details;
    //this.formation.themes.push(/*new Theme(this.theme)*/);

    // this.formationService.addFormation(this.formation).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     //this.getFormations();
    //     addForm.reset();
    //   },
    //   error: (httpErrorResponse) => {
    //     this.errorMessage = httpErrorResponse.message;
    //     alert(this.errorMessage);
    //     addForm.reset();
    //   },
    // });

    // this.formationService.addFormation(this.formation);
    // alert(this.formation.reference+";"
    //       + this.formation.titref +";"
    //       + this.formation.lieu +";"
    //       + this.formation.interFormation+";"
    //       + this.formation.duree +";"
    //       + this.formation.prerequis +";"
    //       + this.formation.objectif +";"
    //       + this.formation.publicVise +";"
    //       + this.formation.programmeDetaille
    // );

    alert(
      this.ref +
        ';' +
        this.title +
        ';' +
        this.interIntra +
        ';' +
        this.location +
        ';' +
        this.duration +
        ';' +
        this.prerequis +
        ';' +
        this.goal +
        ';' +
        this.targetPublic +
        ';' +
        this.details +
        ';' +
        this.theme
    );
  }

  // public onAddEmloyee(addForm: NgForm): void {
  //   document.getElementById('add-employee-form').click();
  //   this.employeeService.addEmployee(addForm.value).subscribe(
  //     (response: Employee) => {
  //       console.log(response);
  //       this.getEmployees();
  //       addForm.reset();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.reset();
  //     }
  //   );
  // }

  // @Input("items")
  // items : CourseItem[]=[];
  // errorMessage?: string;

  // //texte affiché dans la zone de texte
  // @Input("Item")
  // private _newItem: string = "";
  // public get newItem(): string {
  //   return this._newItem;
  // }
  // public set newItem(value: string) {
  //   this.errorMessage=undefined;
  //   if(value.length>30){
  //     throw new Error("la longeur du nouveau item ne peut être >30")
  //   }
  //   this._newItem = value;
  // }

  // addCourseItem(){
  //   try{
  //   var newElement=new CourseItem(this.newItem);
  //   this.items.push(newElement);
  //   this.newItem="";
  //   } catch (error){

  //     this.errorMessage="votre libellé n'est pas correct";
  //     // setTimeout(()=>{
  //     //   this.errorMessage=undefined;
  //     // },3000);
  //   }
}
