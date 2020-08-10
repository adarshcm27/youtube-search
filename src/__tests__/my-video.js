import React from 'react';
import Myvideo from '../components/my-video'
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';


describe('Myvideo', () => {
    const myVideo = {
        "kind": "youtube#searchResult",
        "etag": "PyspCJ5kUqU8PjrYJj8dOUHbFU8",
        "id": {
          "kind": "youtube#video",
          "videoId": "sn_Aae-4dhI"
        },
        "snippet": {
          "publishedAt": "2020-07-27T06:00:03Z",
          "channelId": "UCsCe7SNQckiRJ6y563SIupg",
          "title": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs",
          "description": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs Hey, Lovely kids enjoy with the latest construction video of red loader ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sn_Aae-4dhI/default_live.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sn_Aae-4dhI/mqdefault_live.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sn_Aae-4dhI/hqdefault_live.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
          "liveBroadcastContent": "live",
          "publishTime": "2020-07-27T06:00:03Z"
        }
    };
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
          
        ReactDOM.render(<Myvideo item={myVideo} />, div);
    });

    it('iframe src attribute to be present', () => {
      
      render(<Myvideo item={myVideo} />);  
      expect(screen.queryByTitle('Video player')).toHaveAttribute('src');
    });
});