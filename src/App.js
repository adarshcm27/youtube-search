import React,{useState, useEffect} from 'react';
import './App.css';
import MyHeader from './components/my-header'
import axios from 'axios';
import ItemThumbnail from './components/item-thumbnail';
import MyVideo from './components/my-video';
import useSearchVideo from './useSearchVideo';


function App() {

  var json = [
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
    },
    {
      "kind": "youtube#searchResult",
      "etag": "yf_uC6PHeqsnyyjqu8mbGgSlm8A",
      "id": {
        "kind": "youtube#video",
        "videoId": "ehpPIlRnSyE"
      },
      "snippet": {
        "publishedAt": "2020-07-24T06:14:19Z",
        "channelId": "UCsCe7SNQckiRJ6y563SIupg",
        "title": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs",
        "description": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs Hey, Lovely kids enjoy with the latest construction video of red loader ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ehpPIlRnSyE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ehpPIlRnSyE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ehpPIlRnSyE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-24T06:14:19Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "qW_kAcgCAtiESo9ZFw3D1LUXENM",
      "id": {
        "kind": "youtube#video",
        "videoId": "Zucf02Nyudg"
      },
      "snippet": {
        "publishedAt": "2020-07-24T00:43:08Z",
        "channelId": "UCoL0M9swO14BT8u9pTn9MvQ",
        "title": "Super Police Truck Training - Wolfoo Pretend Play with Toy Cars | Wolfoo Family Kids Cartoon",
        "description": "Wolfoo and Pando pretend to play with toy cars. Wolfoo is training for his police truck to become a super. #woababycartoonvideo #wolfoofamily #wolfoo ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Zucf02Nyudg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Zucf02Nyudg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Zucf02Nyudg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Wolfoo Family",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-24T00:43:08Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Ml-uCg_FpdKhJjPYIGIDDUO1XDM",
      "id": {
        "kind": "youtube#video",
        "videoId": "Gob5eHhSdw8"
      },
      "snippet": {
        "publishedAt": "2020-07-24T06:33:03Z",
        "channelId": "UCsCe7SNQckiRJ6y563SIupg",
        "title": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs",
        "description": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs Hey, Lovely kids enjoy with the latest construction video of red loader ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Gob5eHhSdw8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Gob5eHhSdw8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Gob5eHhSdw8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-24T06:33:03Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "BQ6d0PjrprKswGCY1-Jt8AaetNE",
      "id": {
        "kind": "youtube#video",
        "videoId": "ts8Yt_s58dc"
      },
      "snippet": {
        "publishedAt": "2020-07-25T23:40:55Z",
        "channelId": "UCsCe7SNQckiRJ6y563SIupg",
        "title": "Police Car Chase | Cartoon police cars for kids | Jugnu Kids",
        "description": "Police Car Chase | Cartoon police cars for kids | Jugnu Kids police chase - New Police Siren car with Assembling video - toys for kids | Jugnu Kids ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ts8Yt_s58dc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ts8Yt_s58dc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ts8Yt_s58dc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-25T23:40:55Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "ivv-ypJYOAHmD4ak0v0p-6FuTGg",
      "id": {
        "kind": "youtube#video",
        "videoId": "CPxDNNKnSWM"
      },
      "snippet": {
        "publishedAt": "2020-07-25T14:51:10Z",
        "channelId": "UCEVbe_5cc7Uq92df-mBfKpw",
        "title": "less Driven SUV Cars Price starting ₹ 4,00,000 | XUV500,Innova,Scorpio, Ertiga,Brezza,Ecosport | NTE",
        "description": "Hi friends In this Video I Explore Car Market (Chaddha Motors) Situated In Preet Vihar Delhi. you can Buy Second hand Cars like XUV 500, Scorpio, Innova, ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CPxDNNKnSWM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CPxDNNKnSWM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CPxDNNKnSWM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "New To Explore",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-25T14:51:10Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "s4TIg4xDScOJ1yFBHW6Uz4Es_4I",
      "id": {
        "kind": "youtube#video",
        "videoId": "L9ZYdShgtPE"
      },
      "snippet": {
        "publishedAt": "2019-10-12T13:00:04Z",
        "channelId": "UC_VtrptObkqqp9tp3jycINA",
        "title": "Best Opening Races From Pixar&#39;s Cars! | Pixar Cars",
        "description": "These opening races will keep you on the edge of your seat!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/L9ZYdShgtPE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/L9ZYdShgtPE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/L9ZYdShgtPE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Pixar Cars",
        "liveBroadcastContent": "none",
        "publishTime": "2019-10-12T13:00:04Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "qXwNv4DCAMQNjjcGimazg74duXY",
      "id": {
        "kind": "youtube#video",
        "videoId": "hC9ZA_jdtR0"
      },
      "snippet": {
        "publishedAt": "2020-07-08T11:15:01Z",
        "channelId": "UCDNSDDPaocDCJpD1lOK88AQ",
        "title": "Superheroes Off-Road Cars Obstacle Challenge - GTA V MODS",
        "description": "Superheroes Off-Road Cars Obstacle Challenge - GTA V MODS.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hC9ZA_jdtR0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hC9ZA_jdtR0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hC9ZA_jdtR0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Spider Cars",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-08T11:15:01Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "ZlSLZWdCj-7ueJbmrHEV0En7tXc",
      "id": {
        "kind": "youtube#video",
        "videoId": "eoymg4jqnOw"
      },
      "snippet": {
        "publishedAt": "2020-03-21T06:00:14Z",
        "channelId": "UCvlE5gTbOvjiolFlEm-c_Ow",
        "title": "Nikita have fun with toy cars | Hot Wheels City",
        "description": "Vlad and Nikita play with new Hot Wheels play sets. #ad Thank you to Hot Wheels for paying us and helping us make this video. This is an ad for Hot Wheels.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/eoymg4jqnOw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/eoymg4jqnOw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/eoymg4jqnOw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Vlad and Niki",
        "liveBroadcastContent": "none",
        "publishTime": "2020-03-21T06:00:14Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "5RybHUHf9ZmTU5dRyT-cZzQ8T-Q",
      "id": {
        "kind": "youtube#video",
        "videoId": "vMbkqqyAptU"
      },
      "snippet": {
        "publishedAt": "2020-07-19T05:03:28Z",
        "channelId": "UCsCe7SNQckiRJ6y563SIupg",
        "title": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs",
        "description": "Car Loader Trucks for kids - Cars toys videos, police chase car, fire truck - Surprise eggs Hey, Lovely kids enjoy with the latest construction video of red loader ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vMbkqqyAptU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vMbkqqyAptU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vMbkqqyAptU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-19T05:03:28Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "_xdIfyHKeWFhBmKq80AQGnQHuD8",
      "id": {
        "kind": "youtube#video",
        "videoId": "AebKqXBCH2o"
      },
      "snippet": {
        "publishedAt": "2020-07-27T07:47:42Z",
        "channelId": "UCsCe7SNQckiRJ6y563SIupg",
        "title": "Police Car Chase | Cartoon police cars for kids | Jugnu Kids",
        "description": "Police Car Chase | Cartoon police cars for kids | Jugnu Kids police chase - New Police Siren car with Assembling video - toys for kids | Jugnu Kids ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/AebKqXBCH2o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/AebKqXBCH2o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/AebKqXBCH2o/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jugnu Kids - Nursery Rhymes and Best Baby Songs",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-27T07:47:42Z"
      }
    }
  ]

  const [query, setQuery] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [selectedVideo, setSelectedVideo] = useState("");
  const [search, setSearch] = useState('');
  
  const {
    data,
    loading,
    error,
    errorMsg,
    page
  } = useSearchVideo(search,nextPage);

  function handleVideoSelect(item){ 
    setSelectedVideo(item);
  }
  
  const  handleSetPage = (val) => {
      setNextPage(val);
  }
  
  return (
    <div className="App">
      <MyHeader></MyHeader>   
      
      <div className="Search-container">
          
          <form  onSubmit={event => {
            setSearch(query);
            event.preventDefault();
          }}>
            <input
              className="new-search"
              type="text"
              value={query}
              onChange={event => setQuery(event.target.value)}
            /> 
            <button className="new-search-button" type="submit">Search</button> 
          </form>

          {
            error ? <div className="error-message">{errorMsg.message}</div>
            :""
          }
      </div>
      <div>
        
      </div>

      <div className="My-video-list">
              
          {   
            data ?  
            <ItemThumbnail items={data} handleVideoSelect={handleVideoSelect} loading={loading} handleSetPage={handleSetPage} page={page}></ItemThumbnail>                 
             : "" 
          }

        
            
      </div>

      <div className="My-video">
        {
          selectedVideo  === "" ? "" :     
          <MyVideo item={selectedVideo}></MyVideo>
        }
      </div>

    </div>
  );

}

export default App;
