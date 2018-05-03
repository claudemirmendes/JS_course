import { expect } from 'chai';
import { search,searchArtists, searchTracks, searchPlaylist} from '../src/main.js'

describe('Spotify', () => {
  describe('smoke tests',() => {
  	it('should exist search method', () => {
      expect(search).to.exist
  	});

  	it('should exist searchArtists method', () => {
      expect(searchArtists).to.exist
  	});

  	it('should exist searchTracks method', () => {
      expect(searchTracks).to.exist
  	});

  	it('should exist searchPlaylist method', () => {
      expect(searchPlaylist).to.exist
  	});

  });
});

describe ('Generic search', () => {
  it('should call fetch function', () => {
  	
  })
});
