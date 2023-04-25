import PropTypes from 'prop-types';
import { SectionBox } from './Section.styled';

 const Section = ({ title, children }) => (
  <SectionBox>
    {title && <h2>{title}</h2>}
    {children}
  </SectionBox>
);

export default Section

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};