export type Placement = 'left' | 'right';

export interface PlacementProps {
  placement?: Placement;
}

export interface DropdownProps extends PlacementProps {
  target: React.ReactElement;
}
