import styled from '@emotion/styled';

import { Box } from './Box';

export const Container = styled(Box)`
  width: 100%;
  max-width: ${({ theme }) => theme.siteWidth};
  margin: 0 auto;
`;
