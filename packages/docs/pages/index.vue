<template src="./index.html" />

<style lang="scss" src="./index.scss"></style>

<script>
import { head } from '~/helpers/head';
import Sponsor from '~/components/Sponsor';

const GithubButton = () => import('vue-github-button');

export default {
    name: 'IndexView',
    layout: 'default',
    head: head({
        preserve: {
            description: true
        }
    }),
    components: {
        GithubButton,
        Sponsor
    },
    async asyncData ({ $content }) {
        const page = await $content('index')
            .fetch();

        return {
            page
        };
    },
    data() {
        const defaultSponsor = {
            title: 'Become a sponsor',
            url: 'https://www.patreon.com/bePatron?u=18449490',
            placeholder: true
        };

        return {
            sponsors: {
                large: [
                    defaultSponsor,
                    defaultSponsor,
                    {
                        title: 'Inkline - Vue.js UI/UX Library',
                        image: require('@/static/images/sponsors/large/inkline.png'),
                        url: 'https://inkline.io',
                        default: true
                    },
                    defaultSponsor,
                    defaultSponsor
                ]
            }
        };
    }
};
</script>
