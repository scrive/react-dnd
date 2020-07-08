import * as React from 'react'
import { ConnectDragPreview, DragPreviewOptions } from '../interfaces'

export interface DragPreviewImageProps {
	connect: ConnectDragPreview
	src: string,
	options: DragPreviewOptions
}
/*
 * A utility for rendering a drag preview image
 */
export const DragPreviewImage: React.FC<DragPreviewImageProps> = React.memo(
	({ connect, src, options }) => {
		React.useEffect(() => {
			if (typeof Image === 'undefined') return

			let connected = false
			const img = new Image()
			img.src = src
			img.onload = () => {
				connect(img, options)
				connected = true
			}
			return () => {
				if (connected) {
					connect(null)
				}
			}
		})

		return null
	},
)
DragPreviewImage.displayName = 'DragPreviewImage'
