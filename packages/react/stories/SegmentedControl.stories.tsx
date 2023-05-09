import * as React from 'react';
import { CheckCircleFilled, InfoCircleFilled } from '@project44-manifest/react-icons';
import { Segment, SegmentedControl } from '../src';

export default {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  subComponents: { Segment },
};

export const Default = () => {
  const [selected, setSelected] = React.useState('overview');

  return (
    <SegmentedControl value={selected} onChange={setSelected}>
      <Segment label="Overview" value="overview" />
      <Segment label="Lanes" value="lanes" />
    </SegmentedControl>
  );
};

export const StartAdornment = () => {
  const [selected, setSelected] = React.useState('overview');

  return (
    <SegmentedControl value={selected} onChange={setSelected}>
      <Segment label="Overview" startAdornment={<InfoCircleFilled />} value="overview" />
      <Segment label="Lanes" startAdornment={<CheckCircleFilled />} value="lanes" />
    </SegmentedControl>
  );
};

export const EndAdornment = () => {
  const [selected, setSelected] = React.useState('overview');

  return (
    <SegmentedControl value={selected} onChange={setSelected}>
      <Segment endAdornment={<InfoCircleFilled />} label="Overview" value="overview" />
      <Segment endAdornment={<CheckCircleFilled />} label="Lanes" value="lanes" />
    </SegmentedControl>
  );
};
