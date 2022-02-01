<template>
    <div>
        <Nuxt />
        <tooltip-manager />
    </div>
</template>

<script>
import { TooltipManager } from 'instant-coffee-core'

export default {
    name: 'LayoutDefault',
    components: { TooltipManager }
}
</script>