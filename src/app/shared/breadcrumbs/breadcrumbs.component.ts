import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators'
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title: string;

  constructor( 
    private router: Router,
    private browsertitle: Title,
    private meta: Meta
    ) { 
    this.getDataRoute()
    .subscribe( data => {
      console.log(data)
      this.title = data.title;
      this.browsertitle.setTitle(this.title);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.title
      };
      this.meta.updateTag(metaTag);
    })
  }

  ngOnInit() {
  }

  getDataRoute(){
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) =>  event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    )
  }

}
