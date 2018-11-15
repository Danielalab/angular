import { Component, OnInit, Input } from '@angular/core';
import { LastfmService } from '../../services/lastfm.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  @Input() songs: any[] = [];
  constructor() {}

  ngOnInit() {}

  showSongs(arr: any[]) {
    console.log(arr, arr.sort((a, b) => a.votes - b.votes).reverse());
    return arr.sort((a, b) => a.votes - b.votes).reverse();
  }

}
