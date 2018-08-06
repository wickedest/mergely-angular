import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'mergely-angular';

  ngOnInit() {
    jQuery(document).ready(() => {
      jQuery('#mergely').mergely({
        lhs: (setValue) => {
          setValue('the quick red fox\njumped over the hairy dog');
        },
        rhs: (setValue) => {
          setValue('the quick brown fox\njumped over the lazy dog');
        }
      });
    });
  }
}
