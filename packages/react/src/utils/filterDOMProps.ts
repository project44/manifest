import {
  HTML_ATTRIBUTES,
  ANCHOR_HTML_ATTRIBUTES,
  BUTTON_HTML_ATTRIBUTES,
  FIELDSET_HTML_ATTRIBUTES,
  FORM_HTML_ATTRIBUTES,
  IFRAME_HTML_ATTRIBUTES,
  IMAGE_HTML_ATTRIBUTES,
  INPUT_HTML_ATTRIBUTES,
  LABEL_HTML_ATTRIBUTES,
  LI_HTML_ATTRIBUTES,
  OL_HTML_ATTRIBUTES,
  OPTION_HTML_ATTRIBUTES,
  SELECT_HTML_ATTRIBUTES,
  TABLE_HTML_ATTRIBUTES,
  TEXTAREA_HTML_ATTRIBUTES,
  TD_HTML_ATTRIBUTES,
  TH_HTML_ATTRIBUTES,
  TR_HTML_ATTRIBUTES,
} from '../constants';

export type Tag =
  | 'a'
  | 'button'
  | 'fieldset'
  | 'form'
  | 'iframe'
  | 'img'
  | 'input'
  | 'label'
  | 'li'
  | 'ol'
  | 'option'
  | 'select'
  | 'table'
  | 'textarea'
  | 'td'
  | 'th'
  | 'tr'
  | string;

const tagMap: Record<Tag, Set<string>> = {
  a: ANCHOR_HTML_ATTRIBUTES,
  button: BUTTON_HTML_ATTRIBUTES,
  fieldset: FIELDSET_HTML_ATTRIBUTES,
  form: FORM_HTML_ATTRIBUTES,
  iframe: IFRAME_HTML_ATTRIBUTES,
  img: IMAGE_HTML_ATTRIBUTES,
  input: INPUT_HTML_ATTRIBUTES,
  label: LABEL_HTML_ATTRIBUTES,
  li: LI_HTML_ATTRIBUTES,
  ol: OL_HTML_ATTRIBUTES,
  option: OPTION_HTML_ATTRIBUTES,
  select: SELECT_HTML_ATTRIBUTES,
  table: TABLE_HTML_ATTRIBUTES,
  textarea: TEXTAREA_HTML_ATTRIBUTES,
  td: TD_HTML_ATTRIBUTES,
  th: TH_HTML_ATTRIBUTES,
  tr: TR_HTML_ATTRIBUTES,
};

function filterDOMProps<T extends React.HTMLAttributes<any>>(
  tag: Tag,
  props: Record<string, any>,
  excludedProps?: string[],
) {
  const attributes = (tag && tagMap[tag]) || HTML_ATTRIBUTES;
  const keys = Object.keys(props);

  const result: Record<string, any> = {};

  for (const key of keys) {
    const isDOMAttribute = attributes.has(key) || key.indexOf('data-') === 0;
    const isNotExcluded = !excludedProps || excludedProps?.indexOf(key) === -1;

    if (isDOMAttribute && isNotExcluded) {
      result[key] = props[key];
    }
  }

  return result as T;
}

export { filterDOMProps };
