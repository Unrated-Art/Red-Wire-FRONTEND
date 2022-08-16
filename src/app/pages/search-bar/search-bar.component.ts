import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/models/formation';
import { FormationService } from 'src/services/formation.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public formations!: Formation[];

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {}

  public searchFormations(/*key: string*/): void {
    /*console.log(key);*/
    const keyword = document.getElementById('searchBar')?.innerText;
    console.log(keyword);
    /*if (keyword) {
      key = keyword;
    }*/
    var key!: String;
    if (keyword) {
      let key = keyword;
    }
    const results: Formation[] = [];
    for (const f of this.formations) {
      if (
        f.reference.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.titref.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.lieu.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.prerequis.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.publicVise.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.publicVise.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.programmeDetaille.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        (f.themes.length !== 0 &&
          f.themes.forEach((t) => {
            t.nomTheme.toLowerCase().indexOf(key.toLowerCase()) !== -1;
          })) //#!TODO: vérifier dernière condition (avec thème)??
      ) {
        results.push(f);
      }
    }
    this.formations = results;
    if (results.length === 0 || !key) {
      console.log('ici on doit afficher toutes les formations');
      this.formationService.getFormations();
      //this.getFormations();
    }
    //return this.formationService.getFormations();
  }
}
