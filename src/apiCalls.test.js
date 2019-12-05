import { getMovies} from './apiCalls'

describe('apiCalls', () => {

  const mockData = [{episode_id: 1},{episode_id: 2},{episode_id: 3}]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    });
  })

  
})