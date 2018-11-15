import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../../services/lastfm.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  arrArtists: string[] = ['blackpink', 'ikon', 'bruno mars', 'nct', 'astro', 'jbalvin'];
  songs: any[] = [];
  currentArtist = 2;
  artistImage: string;
  nameArtist: string;
  constructor(private _lastFmService: LastfmService) { }

  ngOnInit() {
    this.showArtist(this.arrArtists[this.currentArtist]);
  }

  showArtist(artist: string) {
    this._lastFmService.getTopTracks(artist)
      .subscribe(tracks => {
        this.songs = tracks;
        this.nameArtist = tracks[0].artist.name;
        this.artistImage = tracks[0].image[3]['#text'];
      });
  }

  changeArtist(next: boolean) {
    if (next && this.currentArtist + 1 <= this.arrArtists.length - 1) {
      this.currentArtist += 1;
    } else if (next) {
      this.currentArtist = 0;
    }
    if (!next && this.currentArtist - 1 >= 0) {
      this.currentArtist -= 1;
    } else if (!next) {
      this.currentArtist = this.arrArtists.length - 1;
    }
    this.showArtist(this.arrArtists[this.currentArtist]);
  }

}
