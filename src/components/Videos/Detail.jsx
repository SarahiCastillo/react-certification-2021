import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import styled, { createGlobalStyle } from 'styled-components';
import { favoritesStorage } from '../../utils/favoritesStorage';
import { withLoadingState } from '../HoC';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        color: white;
    }
`;

const CardList = styled.section`
  display: flex;
  padding: 2rem;
  overflow: scroll;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 850px;
  width: 1050px;
  min-width: 250px;
  padding: 1rem;
  background: #17141d;

  box-shadow: -1rem 0 1rem #000;

  transition: 0.3s;

  &:hover {
    transform: translateY(-1rem);
  }

  &:hover ~ & {
    transform: translateX(150px);
  }

  &:not(:first-child) {
    margin-left: -100px;
  }
`;

const CardLink = styled.section`
  & p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
  }

  & h2 {
    font-size: 20px;
    margin: 0.25rem 0 auto;
    text-decoration: none;
    color: inherit;
    border: 0;
    display: inline-block;
    cursor: pointer;
  }

  &:hover {
    color: #ff8a00;
  }
`;

const CardFooter = styled.footer`
  & p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
  }

  & h2 {
    font-size: 20px;
    margin: 0.25rem 0 auto;
    text-decoration: none;
    color: inherit;
    border: 0;
    display: inline-block;
  }
`;

function addFavorite(id) {
  favoritesStorage.setFavorites(id);
  console.log('added', id);
}

const Detail = ({ data }) => {
  const intl = useIntl();

  return (
    <div id="cardsContainer">
      <GlobalStyle />
      <CardList>
        <Card>
          {data
            ? data.items.map((item) => {
                console.log('item.id.videoId', item.id.videoId);
                return (
                  <div key={item.id.videoId}>
                    <iframe
                      width="1000"
                      height="600"
                      allowFullScreen
                      frameBorder="0"
                      title="rick roll"
                      src={`https://www.youtube.com/embed/${item.id.videoId}?controls=0&autoplay=1`}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />
                    <CardLink>
                      <Link to={intl.formatMessage({ id: 'routes.videos' })}>
                        <span role="img" aria-label="author emoji">
                          ⬅️ Go back{' '}
                        </span>
                      </Link>
                      <Link to={intl.formatMessage({ id: 'routes.myVideos' })}>
                        <button type="button" onClick={addFavorite(item.id.videoId)}>
                          <span role="img" aria-label="author emoji">
                            ❤️ Add Favorite{' '}
                          </span>
                        </button>
                      </Link>
                    </CardLink>
                    <CardFooter>
                      <h3>{item.snippet.title}</h3>
                      <h4>Channel: {item.snippet.channelTitle}</h4>
                      <p>{item.snippet.description}</p>
                    </CardFooter>
                  </div>
                );
              })
            : 'Loading...'}
        </Card>
      </CardList>
    </div>
  );
};

export default withLoadingState(Detail);
