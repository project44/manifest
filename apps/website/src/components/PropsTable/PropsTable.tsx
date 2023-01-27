import * as React from 'react';
import { Separator, Stack, Typography } from '@project44-manifest/react';

interface Prop {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue?: string;
}

interface PropsTableProps {
  /**
   * The name of the component to retrieve props from.
   */
  component: string;
  /**
   * Whether to include poly morphic props.
   *
   * @default true
   */
  isPolymorphic?: boolean;
}

export function PropsTable(props: PropsTableProps) {
  const { component, isPolymorphic = true } = props;

  const [componentProps, setComponentProps] = React.useState<Prop[]>([]);

  React.useEffect(() => {
    const getGeneratedProps = async () => {
      const result = await import(`@site/static/generated/${component}.json`);

      setComponentProps(result.default as Prop[]);
    };

    getGeneratedProps().catch((error) => void console.log(error));
  }, [component]);

  return (
    <>
      {isPolymorphic && (
        <Stack>
          <Separator css={{ my: '$medium' }} />
          <Typography css={{ marginBottom: '$small' }} variant="bodyBold">
            as?
          </Typography>
          <Typography>The root element to be rendered</Typography>
        </Stack>
      )}
      {componentProps.map((prop) => (
        <Stack key={prop.name}>
          <Separator css={{ my: '$medium' }} />
          <Typography css={{ marginBottom: '$small' }} variant="bodyBold">
            {prop.name}
            {prop.required ? '' : '?'}

            <Typography css={{ marginLeft: '$small' }}>
              <code>{prop.type}</code>
            </Typography>
          </Typography>

          <Typography>{prop.description}</Typography>
          {prop.defaultValue && (
            <Typography css={{ marginTop: '$small' }} variant="subtext">
              Defaults to <code>{prop.defaultValue}</code>
            </Typography>
          )}
        </Stack>
      ))}
    </>
  );
}
