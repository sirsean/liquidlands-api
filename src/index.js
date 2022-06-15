const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept',
};

export default {
    async fetch(request) {
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: corsHeaders,
            });
        } else {
            const url = new URL(request.url);
            url.hostname = 'liquidlands.io';

            return fetch(url.toString(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: request.body,
            }).then(r => {
                return new Response(r.body, {
                    status: 200,
                    headers: corsHeaders,
                });
            });
        }
    },
};
