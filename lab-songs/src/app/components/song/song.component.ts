import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LastfmService } from '../../services/lastfm.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() song: any;
  @Output() changeSongsList: EventEmitter<any[]>;
  constructor(private _LastfmService: LastfmService) {
    this.changeSongsList = new EventEmitter();
  }
  newSongsList: any[] = [];

  ngOnInit() { }

  like(id) {
    this.newSongsList = this._LastfmService.addVote(id);
    this.changeSongsList.emit(this.newSongsList);
  }

  dislike(id) {
    this.newSongsList = this._LastfmService.removeVote(id);
    this.changeSongsList.emit(this.newSongsList);
  }

}
