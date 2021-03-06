import React from 'react';
import { Button, Checkbox, Stack, Slider, Chip } from '@mui/material';
import { VolumeUp, VolumeDown } from '@mui/icons-material';
import FaceIcon from '@mui/icons-material/Face';

import styles from './mui.module.css';
import SimpleDialogDemo from './dialog';
export interface Browser {
  name: string;
  os: string;
  type: string;
  version: string;
}
declare global {
  interface Window {
    browser: Browser;
    platform: any;
  }
}

/* eslint-disable-next-line */
export interface MuiProps {}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function Mui(props: MuiProps) {
  const [value, setValue] = React.useState<number>(30);
  const browser = JSON.stringify(window.browser);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className={styles['container']}>
      <h2>
        Now <span className={styles['framework-text']}>Angular</span> every
        framework can use the most popular react components library, Material UI
        components!
      </h2>
      <Button variant="contained">Hello World</Button>
      <br></br>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <br></br>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <br></br>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
      <br></br>
      <SimpleDialogDemo></SimpleDialogDemo>
      <br></br>
      <section>
        <p>
          Child/Remote apps can access shared libraries from the Host app. Think
          about sharing libraries for common problems, like authentication,
          i18n, analytics, and more. In this simple example, we are sharing a
          library for Browser detection:
        </p>
        <span>{browser}</span>
      </section>
    </div>
  );
}

export default Mui;
