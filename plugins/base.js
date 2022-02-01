import Vue from 'vue'
import moment from 'moment'
import { ButtonBase, PopinBase } from 'instant-coffee-core'

moment.locale('fr')

Vue.mixin({
    filters: {
        specials: (value) => {
            if (!value || process.server) return ''

            let characters = ['?', '!', ':']
            
            characters.forEach(char => {
                value = value.replaceAll(' ' + char, ' ' + char)
            })

            return value
        },
        striptags: (value) => {
            return value ? value.replace(/(<([^>]+)>)/gi, '') : ''
        },
        round: (value, decimals = 2) => {
            return (Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)).toFixed(decimals)
        },
        fixed: (value) => {
            return ('0' + value).slice(-2)
        }
    },
    data: () => ({

    }),
    computed: {

    },
    methods: {
        $randomBetween: (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        $copy (text) {
            if (!navigator.clipboard) {
                this.$store.commit('flashes/add', {
                    title: `Copié dans le presse-papier (local)`,
                    text: `"${text}"`,
                    type: 'success'
                })

                return 
            }

            navigator.clipboard.writeText(text).then(() => {
                this.$store.commit('flashes/add', {
                    title: `Copié dans le presse-papier`,
                    text: `"${text}"`,
                    type: 'success'
                })
            })
        },
        $tOpen (content, e, params = {}) {
            this.$store.commit('tooltips/open', {
                content, element: e.target, ...params
            })
        },
        $tClose () {
            this.$store.commit('tooltips/close')
        },
        $round (value, decimals = 2) {
            return (Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)).toFixed(decimals)
        },
        $shuffle (array) {
            let currentIndex = array.length,  randomIndex;
            
            while (currentIndex != 0) {
            
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            
            return array
        }
    }
})

Vue.component('ButtonBase', ButtonBase)
Vue.component('PopinBase', PopinBase)