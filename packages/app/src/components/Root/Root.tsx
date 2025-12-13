import { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import {
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarScrollWrapper,
  SidebarSpace,
  SidebarSubmenu,
  SidebarSubmenuItem,
  useSidebarOpenState,
  Link,
} from '@backstage/core-components';
import { useApp } from '@backstage/core-plugin-api';
import { MyGroupsSidebarItem } from '@backstage/plugin-org';
import { NotificationsSidebarItem } from '@backstage/plugin-notifications';

// Flat, minimal icons
import {
  SearchIcon,
  MenuIcon,
  ApiIcon,
  DocsIcon,
  CreateIcon,
  GroupIcon,
  CatalogIcon,
  GraphIcon,
} from '../icons/FlatIcons';

const useSidebarLogoStyles = makeStyles({
  '@keyframes fadeInScale': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.95)',
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  '@keyframes slideInLeft': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
    display: 'flex',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoOpen: {
    animation: '$slideInLeft 0.3s ease-out forwards',
  },
  logoClosed: {
    animation: '$fadeInScale 0.2s ease-out forwards',
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      <Link to="/" underline="none" className={classes.link} aria-label="Home">
        <div className={`${classes.logoWrapper} ${isOpen ? classes.logoOpen : classes.logoClosed}`}>
          {isOpen ? <LogoFull /> : <LogoIcon />}
        </div>
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => {
  const app = useApp();

  // Get icons from the app's icon registry
  const DomainIcon = app.getSystemIcon('kind:domain')!;
  const SystemIcon = app.getSystemIcon('kind:system')!;
  const ComponentIcon = app.getSystemIcon('kind:component')!;
  const ApiKindIcon = app.getSystemIcon('kind:api')!;
  const ResourceIcon = app.getSystemIcon('kind:resource')!;
  const UserIcon = app.getSystemIcon('kind:user')!;
  const GroupKindIcon = app.getSystemIcon('kind:group')!;

  return (
    <SidebarPage>
      <Sidebar>
        <SidebarLogo />
        <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
          <SidebarSearchModal />
        </SidebarGroup>
        <SidebarDivider />
        <SidebarGroup label="Menu" icon={<MenuIcon />}>
          {/* Catalog with submenu for entity kinds */}
          <SidebarItem icon={CatalogIcon} to="catalog" text="Catalog">
            <SidebarSubmenu title="Catalog">
              <SidebarSubmenuItem
                title="Domains"
                to="catalog?filters[kind]=domain"
                icon={DomainIcon}
              />
              <SidebarSubmenuItem
                title="Systems"
                to="catalog?filters[kind]=system"
                icon={SystemIcon}
              />
              <SidebarDivider />
              <SidebarSubmenuItem
                title="Components"
                to="catalog?filters[kind]=component"
                icon={ComponentIcon}
              />
              <SidebarSubmenuItem
                title="APIs"
                to="catalog?filters[kind]=api"
                icon={ApiKindIcon}
              />
              <SidebarSubmenuItem
                title="Resources"
                to="catalog?filters[kind]=resource"
                icon={ResourceIcon}
              />
              <SidebarDivider />
              <SidebarSubmenuItem
                title="Groups"
                to="catalog?filters[kind]=group"
                icon={GroupKindIcon}
              />
              <SidebarSubmenuItem
                title="Users"
                to="catalog?filters[kind]=user"
                icon={UserIcon}
              />
            </SidebarSubmenu>
          </SidebarItem>

          <SidebarItem icon={ApiIcon} to="api-docs" text="APIs" />
          <SidebarItem icon={DocsIcon} to="docs" text="Docs" />
          <SidebarItem icon={GraphIcon} to="catalog-graph" text="Graph" />

          <SidebarDivider />

          <MyGroupsSidebarItem
            singularTitle="My Group"
            pluralTitle="My Groups"
            icon={GroupIcon}
          />

          <SidebarDivider />

          <SidebarItem icon={CreateIcon} to="create" text="Create..." />

          <SidebarScrollWrapper>
            {/* Items in this group will be scrollable if they run out of space */}
          </SidebarScrollWrapper>
        </SidebarGroup>
        <SidebarSpace />
        <SidebarDivider />
        <NotificationsSidebarItem />
        <SidebarDivider />
        <SidebarGroup
          label="Settings"
          icon={<UserSettingsSignInAvatar />}
          to="/settings"
        >
          <SidebarSettings />
        </SidebarGroup>
      </Sidebar>
      {children}
    </SidebarPage>
  );
};
