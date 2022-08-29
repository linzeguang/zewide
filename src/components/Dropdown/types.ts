export type Placement = 'left' | 'right';

export interface PlacementProps {
  placement?: Placement;
}

export interface DropdownProps extends PlacementProps {
  target: React.ReactElement;
}

export interface DropdownHandle {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
