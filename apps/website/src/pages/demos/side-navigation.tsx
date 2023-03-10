import * as React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  SideNavigation,
  SideNavigationContent,
  SideNavigationFooter,
  SideNavigationHeader,
  SideNavigationMenu,
  SideNavigationMenuGroup,
  SideNavigationMenuItem,
} from '@project44-manifest/react';
import { Carrier, Person, Route, Settings } from '@project44-manifest/react-icons';
import { withDemoWrapper } from '../../components/DemoWrapper';

function Logo() {
  return (
    <svg
      height="32"
      style={{ fill: 'currentcolor' }}
      viewBox="0 0 28 32"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26.9953 23.1559L28 21.0429V10.9353L26.9735 8.80055L15.6162 0H12.1872L1.00468 8.82233L0 10.9353V21.0647L1.00468 23.1777L12.1872 31.9782L15.6162 32L26.9953 23.1559ZM1.72543 9.73724L12.908 0.914908C13.0172 0.827774 13.17 0.74064 13.3011 0.697073V11.1096C13.0827 11.1749 9.87207 13.7018 9.06396 14.3336L10.0031 15.096L13.3666 12.3948H14.4368L17.844 15.096L18.7831 14.3336C18.1934 13.8761 14.6989 11.1967 14.4805 11.1314V0.675289C14.6334 0.74064 14.7644 0.80599 14.8955 0.914908L26.2527 9.71545C26.2746 9.73724 26.2746 9.73724 26.2964 9.75902L17.844 16.5555L17.6474 16.708L14.4368 19.322H13.3666L10.5055 16.9912L10.3744 16.8822L7.25117 14.3118L1.70359 9.75902L1.72543 9.73724ZM12.908 31.0415L1.72543 22.241C1.63806 22.1756 1.57254 22.1103 1.50702 22.0231L7.31669 17.2961L6.37753 16.5337L1.15757 20.8033V10.9353C1.15757 10.9135 1.15757 10.8918 1.15757 10.87C1.15757 10.87 3.66927 12.8958 6.39937 15.1178C7.66614 16.1416 8.9766 17.209 10.1342 18.1239C11.8814 19.518 13.2137 20.5637 13.3011 20.6072V31.3247C13.17 31.2158 13.039 31.1504 12.908 31.0415ZM14.4805 20.5854C14.5679 20.5637 16.2933 19.2131 18.4337 17.514C19.6349 16.5773 20.9454 15.5317 22.1903 14.5296C24.6802 12.5473 26.8206 10.8264 26.8206 10.8264C26.8206 10.8482 26.8206 10.8918 26.8206 10.9135V20.8251L21.4914 16.5337L20.5523 17.2961L26.4493 22.0449C26.3838 22.1103 26.3183 22.1756 26.2527 22.241L14.8736 31.0633C14.7426 31.1722 14.6115 31.2376 14.4805 31.3029V20.5854Z" />
    </svg>
  );
}

function SideNavigationExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleSetOpen = React.useCallback(() => {
    setIsOpen((prevOpen) => !prevOpen);
  }, [setIsOpen]);

  return (
    <div style={{ width: 240 }}>
      <SideNavigation css={{ height: '100%' }} isOpen={isOpen} onOpenChange={handleSetOpen}>
        <SideNavigationHeader logo={<Logo />} />
        <SideNavigationContent>
          <SideNavigationMenu>
            <SideNavigationMenuItem label="Track" startIcon={<Route />} />
            <SideNavigationMenuGroup label="Initiate" startIcon={<Carrier />}>
              <SideNavigationMenuItem label="Shipments" />
              <SideNavigationMenuItem label="Templates" />
            </SideNavigationMenuGroup>
          </SideNavigationMenu>
          <SideNavigationMenu>
            <SideNavigationMenuItem label="Settings" startIcon={<Settings />} />
          </SideNavigationMenu>
        </SideNavigationContent>
        <Dropdown placement="right bottom">
          <SideNavigationFooter
            avatarProps={{
              fallback: 'BC',
            }}
            subTitle="Brandon Clark"
            title="Manifest Design"
          />
          <DropdownMenu>
            <DropdownItem key="profile" startIcon={<Person />}>
              Profile
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SideNavigation>
    </div>
  );
}

export default withDemoWrapper(SideNavigationExample);
