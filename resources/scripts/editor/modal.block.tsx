import {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
} from '@wordpress/block-editor'
import { BaseControl, PanelBody, TextControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

/* Block name */
export const name = `icz/modal`

/* Block title */
export const title = __(`Modal`, `icz`)

/* Block category */
export const category = `design`

/* Block attributes */
export const attributes = {
  heading: {
    type: `string`,
    default: __(`Modal heading`, `icz`),
  },
  buttonText: {
    type: `string`,
    default: __(`Open modal`, `icz`),
  },
}

/* Block edit */
export function edit({ attributes, setAttributes }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const props = useBlockProps({
    className: `border rounded-md p-3`,
  })

  const { buttonText, heading } = attributes

  return (
    <>
      <InspectorControls>
        <PanelBody title={__(`Modal settings`, `icz`)}>
          <TextControl
            label={__(`Modal button text`, `icz`)}
            value={buttonText}
            onChange={buttonText => setAttributes({ buttonText })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...props}>
        <TextControl
          label={__(`Modal heading`, `icz`)}
          className="mb-6"
          value={heading}
          onChange={heading => setAttributes({ heading })}
        />

        <BaseControl label={__(`Modal content`, `icz`)} id="modal-content">
          <div className="bg-gray-100 p-3 rounded-md">
            <InnerBlocks
              template={[[`core/paragraph`]]}
              allowedBlocks={[`core/paragraph`, `core/heading`, `core/list`]}
            />
          </div>
        </BaseControl>
      </div>
    </>
  )
}

/* Block save */
export const save = () => <InnerBlocks.Content />
