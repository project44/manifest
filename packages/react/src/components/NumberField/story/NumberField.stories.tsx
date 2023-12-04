import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { Flex, NumberField, Select, SelectItem, Separator, Switch } from '../../..';

export default {
  title: 'Components/NumberField',
  component: NumberField,
};

const Template: StoryFn<typeof NumberField> = (args) => <NumberField {...args} />;

export const Default = Template.bind({});

Default.decorators = [() => <NumberField placeholder="Enter a number..." />];

export const Decimal = Template.bind({});

Decimal.decorators = [
  () => {
    const [value, setValue] = React.useState<number>(1234.5555);

    return (
      <NumberField
        formatOptions={{
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
          style: 'decimal',
        }}
        helperText="Please enter a number."
        placeholder="Enter a number..."
        value={value}
        onChange={setValue}
      />
    );
  },
];

export const Currency = Template.bind({});

Currency.decorators = [
  () => {
    const [value, setValue] = React.useState<number>(123456);
    const [local, setLocal] = React.useState<React.Key>('en-US');
    const [currency, setCurrency] = React.useState<React.Key>('USD');
    const [currencyDisplay, setCurrencyDisplay] = React.useState<React.Key>('symbol');
    const [decimals, setDecimals] = React.useState<boolean>(false);

    return (
      <Flex css={{ gap: '$medium' }} orientation="vertical">
        <NumberField
          customLocale={local.toString()}
          formatOptions={{
            currency: currency.toString(),
            currencyDisplay: currencyDisplay.toString(),
            maximumFractionDigits: decimals ? 2 : 0,
            style: 'currency',
          }}
          placeholder="Enter currency value..."
          value={value}
          onChange={setValue}
        />
        <Separator />
        <Select
          label="Choose currency"
          placeholder="Select currency..."
          selectedKey={currency}
          onSelectionChange={setCurrency}
        >
          <SelectItem key="USD">USD</SelectItem>
          <SelectItem key="EUR">EUR</SelectItem>
          <SelectItem key="JPY">JPY</SelectItem>
        </Select>
        <Select
          label="Choose currency disply"
          placeholder="Select currency disply..."
          selectedKey={currencyDisplay}
          onSelectionChange={setCurrencyDisplay}
        >
          <SelectItem key="symbol">Symbol</SelectItem>
          <SelectItem key="code">ISO code</SelectItem>
          <SelectItem key="narrowSymbol">Narrow symbol</SelectItem>
          <SelectItem key="name">Name</SelectItem>
        </Select>
        <Select
          label="Choose local"
          placeholder="Select local..."
          selectedKey={local}
          onSelectionChange={setLocal}
        >
          <SelectItem key="en-AU">en-AU</SelectItem>
          <SelectItem key="en-GB">en-GB</SelectItem>
          <SelectItem key="en-US">en-US</SelectItem>
          <SelectItem key="de-DE">de-DE</SelectItem>
          <SelectItem key="fr-FR">fr-FR</SelectItem>
        </Select>
        <Switch isSelected={decimals} onChange={setDecimals}>
          Decimals
        </Switch>
      </Flex>
    );
  },
];

export const Units = Template.bind({});

Units.decorators = [
  () => {
    type UnitDisplay = 'long' | 'narrow' | 'short';
    const [unit, setUnit] = React.useState<React.Key>('pound');
    const [unitDisplay, setUnitDisplay] = React.useState<UnitDisplay>('short');
    const [value, setValue] = React.useState<number>(1234.56);

    const onUnitDisplayChange = React.useCallback(
      (key: React.Key) => {
        setUnitDisplay(key as UnitDisplay);
      },
      [setUnitDisplay],
    );

    return (
      <Flex css={{ gap: '$medium' }} orientation="vertical">
        <NumberField
          formatOptions={{
            style: 'unit',
            unit: unit.toString(),
            unitDisplay,
          }}
          placeholder="Enter percentage..."
          value={value}
          onChange={setValue}
        />
        <Separator />
        <Select
          label="Choose unit"
          placeholder="Select unit..."
          selectedKey={unit}
          onSelectionChange={setUnit}
        >
          <SelectItem key="day">Day</SelectItem>
          <SelectItem key="liter">Liter</SelectItem>
          <SelectItem key="meter">Meter</SelectItem>
          <SelectItem key="pound">Pound</SelectItem>
        </Select>
        <Select
          label="Unit formatting style"
          placeholder="Select unit formatting style..."
          selectedKey={unitDisplay}
          onSelectionChange={onUnitDisplayChange}
        >
          <SelectItem key="short">Short</SelectItem>
          <SelectItem key="long">Long</SelectItem>
          <SelectItem key="narrow">Narrow</SelectItem>
        </Select>
      </Flex>
    );
  },
];

export const Percent = Template.bind({});

Percent.decorators = [
  () => {
    const [value, setValue] = React.useState<number>(0.33);

    return (
      <NumberField
        formatOptions={{
          style: 'percent',
        }}
        placeholder="Enter percentage..."
        value={value}
        onChange={setValue}
      />
    );
  },
];

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex css={{ gap: '$small' }} orientation="vertical">
      <NumberField placeholder="Enter a number..." size="medium" />
      <NumberField placeholder="Enter a number..." size="small" />
    </Flex>
  ),
];

export const Invalid = Template.bind({});

Invalid.decorators = [
  () => (
    <NumberField
      helperText="Please enter a number."
      placeholder="Enter a number..."
      validationState="invalid"
      value={123}
    />
  ),
];
