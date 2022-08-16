import styled from 'styled-components';

import { Box } from './Box';

export const Container = styled(Box)`
  width: 100%;
  max-width: ${({ theme }) => theme.siteWidth};
  margin: 0 auto;
`;
