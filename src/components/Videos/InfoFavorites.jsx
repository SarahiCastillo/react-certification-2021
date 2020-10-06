import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useIntl } from 'react-intl';

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
  height: 350px;
  width: 500px;
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

const InfoFavorites = ({ video }) => {
  const intl = useIntl();
  const videoPath = intl
    .formatMessage({ id: 'routes.video-detail' })
    .replace(':id', video);

  return (
    <div id="cardsContainer">
      <GlobalStyle />
      <CardList>
        <Link to={videoPath}>
          <Card>
            <iframe
              width="450"
              height="450"
              allowFullScreen
              frameBorder="0"
              title="rick roll"
              src={`https://www.youtube.com/embed/${video}?controls=0&autoplay=0`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </Card>
        </Link>
      </CardList>
    </div>
  );
};

export default InfoFavorites;
