import { __ } from "@wordpress/i18n";

/* Block name */
export const name = `example/example-block-a`

/* Block title */
export const title = __(`Example block`, `radicle`)

/* Block category */
export const category = `text`

/* Block edit */
export const edit = () => <></>

/* Block save */
export const save = () => <></>

/* Block styles */
export const styles = [
  { name: `default`, label: __(`Default`, `radicle`), isDefault: true },
  { name: `custom`, label: __(`Custom`, `radicle`) },
]

/* Block variations */
export const variations = [
  { name: `example/example-block-b`, title: __(`Example block variant`, `radicle`) },
]
