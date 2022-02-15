export default function (context, inject) {
    const {
        $axios,
        $config: { BASE_API_URL },
    } = context

    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: true,
        proxyHeaders: false,
    }

    const Api = $axios.create({ baseURL: BASE_API_URL, ...options });

    inject('Api', Api);
}