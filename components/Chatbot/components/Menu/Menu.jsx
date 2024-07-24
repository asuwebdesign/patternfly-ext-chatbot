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
          Group 2 Link 1
        </NavItem>
        <NavItem preventDefault itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 2 Link 2
        </NavItem>
        <NavItem preventDefault itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 2 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="June">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 3 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 3 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 3 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="May">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 4 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 4 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 4 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="April">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 5 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 5 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 5 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="March">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 3 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 3 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 3 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="February">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 4 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 4 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 4 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="January">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 5 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 5 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 5 Link 3
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
        isInline={displayMode === 'pf-chatbot--fullscreen'}
        position="start"
      >
        <DrawerContent panelContent={panelContent} />
      </Drawer>
    </>
  )
}

export default Menu