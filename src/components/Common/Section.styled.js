import styled from 'styled-components';
import { color, layout, space, flexbox } from 'styled-system';


export const Title = styled.h2`
  /* text-align: center; */
`;
export const SectionBox = styled.section`
  flex-wrap: wrap;
  flex-direction: column;
  ${color};
  ${layout};
  ${space};
  ${flexbox};
`;