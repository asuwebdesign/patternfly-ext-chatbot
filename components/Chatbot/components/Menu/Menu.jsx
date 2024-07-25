// ============================================================================
// Chatbot Header - Menu
// ============================================================================
import React from 'react'

// Import PatternFly components
import {
  Button,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Nav,
  NavItem,
  NavGroup,
  Truncate
} from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'

// Import styles
import './Menu.scss'

const Menu = ({ config, displayMode, isMenuExpanded, setIsMenuExpanded, onMenuExpand }) => {

  const [activeItem, setActiveItem] = React.useState('group-1_item-1')

  const onSelect = (_event, result) => {
    setActiveItem(result.itemId)

    // Hide navigation drawer when chatbot is floating/docked
    if (displayMode !== 'pf-chatbot--fullscreen') {
      setIsMenuExpanded(false)
    }
  }

  const onCloseClick = () => {
    setIsMenuExpanded(false)
  }

  // Menu Content
  // - Consumers should pass an array to <Chatbot> of the list of conversations
  // - Groups could be optional, but items need to be ordered by date
  const menuContent = <>
    <Nav onSelect={onSelect} aria-label="Grouped global">
      <NavGroup title="Today">
        <NavItem preventDefault itemId="group-1_item-1" isActive={activeItem === 'group-1_item-1'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Red Hat products and services" />
        </NavItem>
        <NavItem preventDefault itemId="group-1_item-2" isActive={activeItem === 'group-1_item-2'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Enterprise Linux installation and setup" />
        </NavItem>
        <NavItem preventDefault itemId="group-1_item-3" isActive={activeItem === 'group-1_item-3'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Troubleshoot system crash" />
        </NavItem>
      </NavGroup>
      <NavGroup title="Yesterday">
        <NavItem preventDefault itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Red Hat products and services" />
        </NavItem>
        <NavItem preventDefault itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Enterprise Linux installation and setup" />
        </NavItem>
        <NavItem preventDefault itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Troubleshoot system crash" />
        </NavItem>
      </NavGroup>
      <NavGroup title="June">
        <NavItem preventDefault itemId="group-3_item-1" isActive={activeItem === 'group-3_item-1'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Red Hat products and services" />
        </NavItem>
        <NavItem preventDefault itemId="group-3_item-2" isActive={activeItem === 'group-3_item-2'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Enterprise Linux installation and setup" />
        </NavItem>
        <NavItem preventDefault itemId="group-3_item-3" isActive={activeItem === 'group-3_item-3'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Troubleshoot system crash" />
        </NavItem>
      </NavGroup>
      <NavGroup title="May">
        <NavItem preventDefault itemId="group-4_item-1" isActive={activeItem === 'group-4_item-1'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Red Hat products and services" />
        </NavItem>
        <NavItem preventDefault itemId="group-4_item-2" isActive={activeItem === 'group-4_item-2'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Enterprise Linux installation and setup" />
        </NavItem>
        <NavItem preventDefault itemId="group-4_item-3" isActive={activeItem === 'group-4_item-3'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Troubleshoot system crash" />
        </NavItem>
      </NavGroup>
      <NavGroup title="April">
        <NavItem preventDefault itemId="group-5_item-1" isActive={activeItem === 'group-5_item-1'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Red Hat products and services" />
        </NavItem>
        <NavItem preventDefault itemId="group-5_item-2" isActive={activeItem === 'group-5_item-2'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Enterprise Linux installation and setup" />
        </NavItem>
        <NavItem preventDefault itemId="group-5_item-3" isActive={activeItem === 'group-5_item-3'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Troubleshoot system crash" />
        </NavItem>
      </NavGroup>
      <NavGroup title="March">
        <NavItem preventDefault itemId="group-6_item-1" isActive={activeItem === 'group-6_item-1'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Red Hat products and services" />
        </NavItem>
        <NavItem preventDefault itemId="group-6_item-2" isActive={activeItem === 'group-6_item-2'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Enterprise Linux installation and setup" />
        </NavItem>
        <NavItem preventDefault itemId="group-6_item-3" isActive={activeItem === 'group-6_item-3'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Troubleshoot system crash" />
        </NavItem>
      </NavGroup>
      <NavGroup title="February">
        <NavItem preventDefault itemId="group-7_item-1" isActive={activeItem === 'group-7_item-1'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Red Hat products and services" />
        </NavItem>
        <NavItem preventDefault itemId="group-7_item-2" isActive={activeItem === 'group-7_item-2'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Enterprise Linux installation and setup" />
        </NavItem>
        <NavItem preventDefault itemId="group-7_item-3" isActive={activeItem === 'group-7_item-3'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Troubleshoot system crash" />
        </NavItem>
      </NavGroup>
      <NavGroup title="January">
        <NavItem preventDefault itemId="group-8_item-1" isActive={activeItem === 'group-8_item-1'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Red Hat products and services" />
        </NavItem>
        <NavItem preventDefault itemId="group-8_item-2" isActive={activeItem === 'group-8_item-2'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Enterprise Linux installation and setup" />
        </NavItem>
        <NavItem preventDefault itemId="group-8_item-3" isActive={activeItem === 'group-8_item-3'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Troubleshoot system crash" />
        </NavItem>
      </NavGroup>
    </Nav>
  </>

  const panelContent = <>
    <DrawerPanelContent>
      <DrawerHead>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
          <Button>New chat</Button>
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        {menuContent}
      </DrawerPanelBody>
    </DrawerPanelContent>
  </>

  return (
    <>
      <Drawer
        className="pf-chatbot__menu"
        isExpanded={isMenuExpanded}
        onExpand={onMenuExpand}
        isInline={displayMode === 'pf-chatbot--fullscreen' || displayMode === 'pf-chatbot--embedded'}
        position="start"
      >
        <DrawerContent panelContent={panelContent} />
      </Drawer>
    </>
  )
}

export default Menu