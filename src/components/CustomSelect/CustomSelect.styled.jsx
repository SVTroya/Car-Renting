import styled from 'styled-components'
import Select from 'react-select'

export const StyledSelect = styled(Select)`
  width: ${({$width}) => $width ? $width : 'auto'};
`;