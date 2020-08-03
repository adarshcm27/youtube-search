import useSearchVideos from '../useSearchVideo';
import axios from 'axios';
import { renderHook } from "@testing-library/react-hooks";;
import { act } from "react-test-renderer";

jest.mock('axios');

describe('useSearchVideos', () => {
    it('fetches successfully data from an API', async () => {
        
        await act(async () => {
            const data = {
                "kind": "youtube#searchListResponse",
                "etag": "_WWBwEbthhYCFyUvTu0UaWUugvI",
                "nextPageToken": "CA8QAA",
                "regionCode": "IN",
                "pageInfo": {
                  "totalResults": 1000000,
                  "resultsPerPage": 5
                },
                "items": [
                  {
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
                  },
                  {
                    "kind": "youtube#searchResult",
                    "etag": "dRfZtMpoixtgJllTelhvgutYNUU",
                    "id": {
                      "kind": "youtube#video",
                      "videoId": "wIebdGyHdpc"
                    },
                    "snippet": {
                      "publishedAt": "2020-07-27T06:21:43Z",
                      "channelId": "UCsCe7SNQckiRJ6y563SIupg",
                      "title": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs",
                      "description": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs Hey, Lovely kids enjoy with the latest construction video of red loader ...",
                      "thumbnails": {
                        "default": {
                          "url": "https://i.ytimg.com/vi/wIebdGyHdpc/default.jpg",
                          "width": 120,
                          "height": 90
                        },
                        "medium": {
                          "url": "https://i.ytimg.com/vi/wIebdGyHdpc/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                        },
                        "high": {
                          "url": "https://i.ytimg.com/vi/wIebdGyHdpc/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                        }
                      },
                      "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
                      "liveBroadcastContent": "none",
                      "publishTime": "2020-07-27T06:21:43Z"
                    }
                  },
                  {
                    "kind": "youtube#searchResult",
                    "etag": "CVuYwo-3Q08K2rylYe-M0fQHroY",
                    "id": {
                      "kind": "youtube#video",
                      "videoId": "zYmqSxlb41E"
                    },
                    "snippet": {
                      "publishedAt": "2020-07-26T06:50:15Z",
                      "channelId": "UCsCe7SNQckiRJ6y563SIupg",
                      "title": "Police Car Chase | Cartoon police cars for kids | Jugnu Kids",
                      "description": "Police Car Chase | Cartoon police cars for kids | Jugnu Kids police chase - New Police Siren car with Assembling video - toys for kids | Jugnu Kids ...",
                      "thumbnails": {
                        "default": {
                          "url": "https://i.ytimg.com/vi/zYmqSxlb41E/default.jpg",
                          "width": 120,
                          "height": 90
                        },
                        "medium": {
                          "url": "https://i.ytimg.com/vi/zYmqSxlb41E/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                        },
                        "high": {
                          "url": "https://i.ytimg.com/vi/zYmqSxlb41E/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                        }
                      },
                      "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
                      "liveBroadcastContent": "none",
                      "publishTime": "2020-07-26T06:50:15Z"
                    }
                  },
                  {
                    "kind": "youtube#searchResult",
                    "etag": "p52gd5HhTXTSwYdcnPTDBT7128E",
                    "id": {
                      "kind": "youtube#video",
                      "videoId": "B8_19nw4KSE"
                    },
                    "snippet": {
                      "publishedAt": "2020-07-25T07:47:03Z",
                      "channelId": "UCsCe7SNQckiRJ6y563SIupg",
                      "title": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs",
                      "description": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs Hey, Lovely kids enjoy with the latest construction video of red loader ...",
                      "thumbnails": {
                        "default": {
                          "url": "https://i.ytimg.com/vi/B8_19nw4KSE/default.jpg",
                          "width": 120,
                          "height": 90
                        },
                        "medium": {
                          "url": "https://i.ytimg.com/vi/B8_19nw4KSE/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                        },
                        "high": {
                          "url": "https://i.ytimg.com/vi/B8_19nw4KSE/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                        }
                      },
                      "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
                      "liveBroadcastContent": "none",
                      "publishTime": "2020-07-25T07:47:03Z"
                    }
                  },
                  {
                    "kind": "youtube#searchResult",
                    "etag": "o6AkFv4dAQunpi37OZwj3moGgt4",
                    "id": {
                      "kind": "youtube#video",
                      "videoId": "fF_nbGA11Q4"
                    },
                    "snippet": {
                      "publishedAt": "2020-06-03T08:00:12Z",
                      "channelId": "UCvlE5gTbOvjiolFlEm-c_Ow",
                      "title": "Vlad and Niki Pretend Play with Ride On Cars Toy",
                      "description": "Vlad and Niki Pretend Play with Ride On Cars Toy - collection videos for kids with ride on cars Please Subscribe! VLAD Instagram ...",
                      "thumbnails": {
                        "default": {
                          "url": "https://i.ytimg.com/vi/fF_nbGA11Q4/default.jpg",
                          "width": 120,
                          "height": 90
                        },
                        "medium": {
                          "url": "https://i.ytimg.com/vi/fF_nbGA11Q4/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                        },
                        "high": {
                          "url": "https://i.ytimg.com/vi/fF_nbGA11Q4/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                        }
                      },
                      "channelTitle": "Vlad and Niki",
                      "liveBroadcastContent": "none",
                      "publishTime": "2020-06-03T08:00:12Z"
                    }
                  }
                ]
            }
            const { result } = renderHook(() => useSearchVideos('cars',''));
            axios.get.mockImplementationOnce(() => Promise.resolve(result.data));
        });      
          
    });
   
    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
 
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
    });
});