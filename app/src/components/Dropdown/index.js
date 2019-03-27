import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Example () {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Choose a park for information
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default UncontrolledDropdown;