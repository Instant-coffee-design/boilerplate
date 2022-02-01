<template>
    <div>
        <button-base class="m-20">
            {{ $t('ready') }}
        </button-base>

        {{ $randomBetween(5, 10) }}
 
        <i class="fal fa-info-circle"
            @mouseenter="e => $tOpen('This is a nice tooltip', e)"
            @mouseleave="$tClose"
        />
    </div>
</template>