import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pais-video',
  templateUrl: './pais-video.component.html',
  styles: [
  ]
})
export class PaisVideoComponent implements OnInit {

  @Input() url: string = '';

  constructor( private _sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
  }

  getVideoIframe( ){
    var video, results;

    if(this.url === null) {
      return '';
    }

    results = this.url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? this.url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
