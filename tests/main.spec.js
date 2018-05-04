import chai, { expect } from 'chai';
import { search,searchArtists, searchTracks, searchPlaylist} from '../src/main.js'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

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
    const fetchedStub = sinon.stub(global, 'fetch');

    const artists = search();

    expect(fetchedStub).to.have.been.calledOnce;

    fetchedStub.restore();
  });

  it('should url correct',() =>{
    const fetchedStub = sinon.stub(global, 'fetch');

    const artists = search('kendrick','artist');
    expect(fetchedStub)
     .have.been.calledWith('https://api.spotify.com/v1/search?q=kendrick&type=artist');

     const albums = search('kendrick', 'album')

     expect(fetchedStub)
     .have.been.calledWith('https://api.spotify.com/v1/search?q=kendrick&type=album');
  });
});
