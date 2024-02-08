// import alpine from 'alpinejs'
import Clipboard from '@ryangjchandler/alpine-clipboard'
import { Alpine, Livewire } from '../../vendor/livewire/livewire/dist/livewire.esm'

/* esline-enable */
Alpine.plugin(Clipboard)

Livewire.start()

// Object.assign(window, { Alpine: alpine }).Alpine.start()

import.meta.webpackHot?.accept(console.error)
