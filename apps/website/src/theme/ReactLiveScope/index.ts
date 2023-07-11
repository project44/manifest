import React from 'react';
import * as I18n from '@react-aria/i18n';
import { faker } from '@faker-js/faker';
import * as InternationalizeDate from '@internationalized/date';
import * as Manifest from '@project44-manifest/react';
import * as ManifestIcons from '@project44-manifest/react-icons';

export default {
  React,
  ...React,
  ...Manifest,
  ...ManifestIcons,
  ...I18n,
  ...InternationalizeDate,
  faker,
};
