import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LastfmService {
  tracks: any[] = [];
  getQuery(query: string) {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.${query}`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }

  getTopTracks(artist: string) {
    return this.getQuery(`gettoptracks&artist=${artist}&limit=10&api_key=2d67558e65072ee4a8088eb7a3bdd0fa&format=json`)
      .pipe(map(res => res['toptracks'].track),
      map(tracks => this.addPropertyVotes(tracks)));
  }

  addPropertyVotes(arr) {
    this.tracks = arr.map((e, i) => ({...e, votes: 0, id: i + 1}));
    return this.tracks;
  }

  // searchArtist(artist: string) {}

  addVote(id) {
    this.tracks = this.tracks.map(song => {
      if (song.id === id) {
        return { ...song, votes: song.votes + 1 };
      }
      return song;
    });
    return this.tracks;
  }

  removeVote(id) {
    this.tracks = this.tracks.map(song => {
      if (song.id === id) {
        return { ...song, votes: song.votes - 1 >= 0 ? song.votes - 1 : 0 };
      }
      return song;
    });
    return this.tracks;
  }
}
