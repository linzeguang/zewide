export type Placement = 'left' | 'right';

export interface PlacementProps {
  placement?: Placement;
}

export interface DropdownProps extends PlacementProps {
  target: React.ReactElement;
}

export interface DropdownHandle {
  visible: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
