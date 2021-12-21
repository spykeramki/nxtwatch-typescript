import {
    GameCardBgContainer,
    GameCardImage,
    GameCardVideoTitle,
    GameCardVideoCount,
    LinkToRoute,
  } from './styledComponents'
  
  interface VideoCardTypes {
    id: string;
    title: string;
    thumbnailUrl: string;
    viewCount: string;
  }
  
  interface GameCardPropTypes {
    videoCard: VideoCardTypes;
    isDarkTheme: boolean;
  }
  
  const GameCard = (props: GameCardPropTypes) => {
    const {videoCard, isDarkTheme} = props
    const {id, title, thumbnailUrl, viewCount} = videoCard
    return (
      <LinkToRoute to={`/videos/${id}`}>
        <GameCardBgContainer>
          <GameCardImage src={thumbnailUrl} alt="video thumbnail" />
          <GameCardVideoTitle theme={isDarkTheme}>{title}</GameCardVideoTitle>
          <GameCardVideoCount>{viewCount} Watching Worldwide</GameCardVideoCount>
        </GameCardBgContainer>
      </LinkToRoute>
    )
  }
  
  export default GameCard
  