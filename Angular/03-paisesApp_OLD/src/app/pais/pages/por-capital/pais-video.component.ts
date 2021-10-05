import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-pais-video',
  templateUrl: './pais-video.component.html',
  styles: [
  ]
})
export class PaisVideoComponent implements OnInit {

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  getVideoIframe(url: string){
    var video, results;

    if(url === null || url === ''){
      return '';
    }

    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
