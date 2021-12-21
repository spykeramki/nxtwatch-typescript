import React from 'react'

interface videoDetailsTypes {
  channel : {
    name: string;
    profileImageUrl: string;
    subscriberCount: string;
  };
  id: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  viewCount: string;
  videoUrl: string;
  description: string;
}

const ThemeAndSavedVideosContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  selectedOption: '',
  likedVideoIdStatusList: [],
  changeTheme: () => {},
  addSavedVideos: (videoDetails:videoDetailsTypes) => {},
  removeSavedVideos: (videoDetails:videoDetailsTypes) => {},
  changeOption: (option:string) => {},
  changeLikeStatus: (id:string, status:string) => {},
})

export default ThemeAndSavedVideosContext
