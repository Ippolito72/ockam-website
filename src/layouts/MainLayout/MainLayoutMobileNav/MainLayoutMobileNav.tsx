import { FunctionComponent } from 'react';

import MainLayoutCtaButtons from '../MainLayoutCtaButtons';

import MainLayoutMobileNavMenu from './MainLayoutMobileNavMenu';

type NavProps = {
  landingPage?: boolean;
};
const MainLayoutMobileNav: FunctionComponent<NavProps> = () => (
  <>
    <MainLayoutMobileNavMenu />

    <MainLayoutCtaButtons />
  </>
);

export default MainLayoutMobileNav;
