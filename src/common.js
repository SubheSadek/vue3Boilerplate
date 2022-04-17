import axios from 'axios';

export default {
    data() {
        return {
            siteUrl: process.env.VUE_APP_SITE_URL,
        }
    },
    methods: {
        async callApi(method, url, dataObj) {
            try {

                let data = await axios({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: method,
                    url: this.siteUrl + url,
                    data: dataObj
                })
                return data

            } catch (e) {

                return e.response
            }
        },

        str_limit(value, size) {
            if (!value) return '';
            value = value.toString();

            if (value.length <= size) {
                return value;
            }
            return value.substr(0, size) + ' ...';
        }
    }
}