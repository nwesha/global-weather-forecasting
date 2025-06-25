/**
 * Cloudflare Worker proxy for AccuWeather
 * Reads ACCUWEATHER_API_KEY from environment secrets.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname, searchParams } = url;
    const API_KEY = env.ACCUWEATHER_API_KEY;

    // /api/locations/v1/cities/search?q=…
    if (pathname === "/api/locations/v1/cities/search") {
      const q = searchParams.get("q") || "";
      const target = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${encodeURIComponent(q)}`;
      return proxy(target);
    }

    // /api/currentconditions/v1/:locationKey
    const match = pathname.match(/^\/api\/currentconditions\/v1\/(.+)$/);
    if (match) {
      const loc = match[1];
      const target = `http://dataservice.accuweather.com/currentconditions/v1/${loc}?apikey=${API_KEY}`;
      return proxy(target);
    }

    return new Response("Not Found", { status: 404 });
  }
};

async function proxy(targetUrl) {
  const res = await fetch(targetUrl);
  const body = await res.text();
  return new Response(body, {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
