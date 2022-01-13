import React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { HeaderStyles } from './styles';

function Header() {
  return (
      <HeaderStyles>
          <h1>Space Flight News</h1>

          < RocketLaunchIcon sx={{color: 'var(--color-1)', fontSize: '10em'}}/>
      </HeaderStyles>
  )
}

export default Header;