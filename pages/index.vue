<template>
    <div>
        <button-base class="m-20">
            {{ $t('ready') }}
        </button-base>

        {{ randomBetween(5, 10) }}
 
        <i class="fal fa-info-circle"
            @mouseenter="(e) => tooltipOpen('This is a nice tooltip', e)"
            @mouseleave="tooltipClose"
        />
    </div>
</template>