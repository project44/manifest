import { Flatbed } from '@project44-manifest/react-icons';
import { Stack, Tag } from '../../..';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const Default = () => (
  <Stack gap="medium" style={{ alignItems: 'flex-start' }}>
    <Tag
      aria-label="truckload tag"
      label="Truckload"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
    >
      Truckload
    </Tag>
    <Tag
      isRemovable
      aria-label="truckload tag"
      label="Truckload"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
      // eslint-disable-next-line react/jsx-no-bind, no-console
      onRemove={() => void console.log('removed')}
    >
      Truckload
    </Tag>
    <Tag
      isCopyable
      aria-label="truckload tag"
      label="Truckload"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
    >
      Truckload
    </Tag>
    <Tag
      aria-label="truckload tag"
      label="Truckload"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
      startAdornment={<Flatbed size="small" />}
    >
      Truckload
    </Tag>
    <Tag
      isDisabled
      isRemovable
      aria-label="truckload tag"
      label="Truckload"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
      startAdornment={<Flatbed size="small" />}
    >
      Truckload
    </Tag>
  </Stack>
);

export const Removable = () => (
  <Tag
    isRemovable
    aria-label="truckload tag"
    label="Truckload"
    removeButtonProps={{ 'aria-label': 'remove truckload' }}
    // eslint-disable-next-line react/jsx-no-bind, no-console
    onRemove={() => void console.log('removed')}
  >
    Truckload
  </Tag>
);

export const Copyable = () => (
  <Stack gap="medium" style={{ alignItems: 'flex-start' }}>
    <Tag
      isCopyable
      aria-label="truckload tag"
      label="Truckload"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
    >
      Truckload
    </Tag>
    <Tag
      isCopyable
      aria-label="truckload tag"
      label="Tag"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
    >
      Tag
    </Tag>
    <Tag
      isCopyable
      aria-label="truckload tag"
      label="1"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
    >
      1
    </Tag>
  </Stack>
);

export const StartAdornment = () => (
  <Tag
    aria-label="truckload tag"
    label="Truckload"
    removeButtonProps={{ 'aria-label': 'remove truckload' }}
    startAdornment={<Flatbed size="small" />}
  >
    Truckload
  </Tag>
);

export const Disabled = () => (
  <Stack gap="medium" style={{ alignItems: 'flex-start' }}>
    <Tag
      isDisabled
      isRemovable
      aria-label="truckload tag"
      label="Truckload"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
    >
      Truckload
    </Tag>
    <Tag
      isCopyable
      isDisabled
      aria-label="truckload tag"
      label="Truckload"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
    >
      Truckload
    </Tag>
    <Tag
      isDisabled
      aria-label="truckload tag"
      label="Truckload"
      removeButtonProps={{ 'aria-label': 'remove truckload' }}
      startAdornment={<Flatbed size="small" />}
    >
      Truckload
    </Tag>
  </Stack>
);
