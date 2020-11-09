import Vue from 'vue'
import moment from 'moment'
import { ButtonBase, PopinBase } from '@instant-coffee/core'

moment.locale('fr')

const BasePlugin = {
    
    install (Vue, options) {
        Vue.randomBetween = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    }
}

Vue.mixin({
    methods: {
        randomBetween: (min, max) => {
            Math.floor(Math.random() * (max - min + 1) + min)
        },
        tooltipOpen (content, e, params = {}) {
            this.$store.commit('tooltips/open', {
                content, element: e.target, ...params
            })
        },
        tooltipClose () {
            this.$store.commit('tooltips/close')
        }
    }
})

Vue.component('ButtonBase', ButtonBase)
Vue.component('PopinBase', PopinBase)