import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import styled, { createGlobalStyle } from 'styled-components';
import { favoritesStorage } from '../../utils/favoritesStorage';
import { withLoadingState } from '../HoC';
import ListVideos from '../../pages/Videos';
import { useSearch } from '../../providers/Search';
import './detail.styles.css';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        color: white;
    }
`;

const CardList = styled.section`
  display: flex;
  overflow: auto;
  padding: 2rem;
  overflow: scroll;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
  height: 900px;
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

const RelatedVideos = styled.section`
  background color: gray;
  opacity: 0.5;
  height: 500px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  align-items: baseline;

  &:hover {
    opacity: 1;
  } 
`;

function addFavorite(id) {
  favoritesStorage.setFavorites(id);
}

const Detail = ({ data }) => {
  const intl = useIntl();
  const { setNewValue } = useSearch();

  return (
    <>
      <GlobalStyle />
      <CardList>
        <Card>
          {data
            ? data.items.map((item) => {
                setNewValue(item.snippet.title);
                return (
                  <div key={item.id.videoId}>
                    <iframe
                      width="1000"
                      height="600"
                      allowFullScreen
                      frameBorder="0"
                      title="video"
                      src={`https://www.youtube.com/embed/${item.id.videoId}?controls=0&autoplay=0`}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      data-testid="video"
                    />
                    <CardLink>
                      <Link
                        to={intl.formatMessage({ id: 'routes.videos' })}
                        data-testid="goback"
                      >
                        <span id="goBack" role="img" aria-label="author emoji">
                          ⬅️ Go back{' '}
                        </span>
                      </Link>
                      <br />
                      <Link
                        to={intl.formatMessage({ id: 'routes.myVideos' })}
                        data-testid="add"
                      >
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
                    <h2>
                      <span role="img" aria-label="author emoji">
                        Related videos ⬇️{' '}
                      </span>
                    </h2>
                    <RelatedVideos>
                      <ListVideos />
                    </RelatedVideos>
                  </div>
                );
              })
            : 'Loading...'}
        </Card>
      </CardList>
    </>
  );
};

export default withLoadingState(Detail);
