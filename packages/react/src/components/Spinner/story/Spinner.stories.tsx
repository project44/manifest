import { Spinner } from '../../..';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

export const Default = () => <Spinner />;

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
    <Spinner size="large">story</Spinner>
    <Spinner size="medium">story</Spinner>
    <Spinner size="small">story</Spinner>
  </div>
);
