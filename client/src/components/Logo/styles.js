import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
    text-decoration: none;
    font-size: 4rem;
    color: #FFF;
    margin: 3rem 10px;

    p {
        font-style: italic;
        font-weight: 400;
    }

    p > span{
        font-family: Srisakdi, sans-serif;
        font-weight: 300;
    }

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
        margin: 2rem 8px;
    }
  }
`;
