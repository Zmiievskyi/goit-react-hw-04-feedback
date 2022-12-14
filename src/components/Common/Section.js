import PropTypes from 'prop-types';
import {SectionBox} from './Section.styled';

export default function Section({ title, children, alignContent, display }) {
  return (
    <SectionBox
      pt={4}
      width={350}
      alignContent={alignContent}
      display={display}
    >
      {title && <h2>{title}</h2>}
      {children}
    </SectionBox>
  );
}

Section.propTypes = {
    title: PropTypes.string,
}
