const badgeUrls = {
  enamad: 'https://trustseal.enamad.ir/logo.aspx?id=261983&Code=VwgWQmFg1VHBWyU0iuiF',
  samandehi: 'https://logo.samandehi.ir/logo.aspx?id=288821&p=odrfaqgwaqgwaqgwodrfnbpd',
} as const

const fallbackSvg = (label: string) => `
<svg xmlns="http://www.w3.org/2000/svg" width="112" height="96" viewBox="0 0 112 96">
  <rect width="112" height="96" rx="16" fill="#111827"/>
  <rect x="1" y="1" width="110" height="94" rx="15" fill="none" stroke="#374151" stroke-width="2"/>
  <path d="M56 13 35 22v16c0 18 8.5 31 21 38 12.5-7 21-20 21-38V22l-21-9Z" fill="#1e293b" stroke="#818cf8" stroke-width="3"/>
  <path d="m47 40 6 6 13-14" fill="none" stroke="#a5b4fc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="56" y="88" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="11" fill="#f3f4f6">${label}</text>
</svg>`

const sendFallback = (event: Parameters<typeof setResponseHeader>[0], badge: keyof typeof badgeUrls) => {
  setResponseHeader(event, 'content-type', 'image/svg+xml; charset=utf-8')
  setResponseHeader(event, 'cache-control', 'no-cache')
  return fallbackSvg(badge === 'samandehi' ? 'نشان ساماندهی' : 'نماد اعتماد')
}

export default defineEventHandler(async (event) => {
  const badge = getRouterParam(event, 'badge') as keyof typeof badgeUrls
  const url = badgeUrls[badge]

  if (!url) {
    throw createError({ statusCode: 404, statusMessage: 'Trust badge not found' })
  }

  let response: Response
  try {
    response = await fetch(url, {
      headers: {
        referer: 'https://phoneplus.ir/',
        'user-agent': 'PhonePlus trust badge proxy',
      },
      signal: AbortSignal.timeout(8000),
    })
  } catch {
    return sendFallback(event, badge)
  }

  if (!response.ok) {
    return sendFallback(event, badge)
  }

  setResponseHeader(event, 'content-type', response.headers.get('content-type') || 'image/png')
  setResponseHeader(event, 'cache-control', 'public, max-age=3600, stale-if-error=86400')
  return new Uint8Array(await response.arrayBuffer())
})
