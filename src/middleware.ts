import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next(); 

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';"
  );

  // Add canonical URL header to help with SEO
  const url = request.nextUrl.clone();
  const canonicalUrl = `https://www.fluxorelectric.com${url.pathname}`;
  response.headers.set('Link', `<${canonicalUrl}>; rel="canonical"`);

  // API route specific headers
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    
    if (request.nextUrl.pathname === '/api/contact' && request.method === 'POST') {
      const contentType = request.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return new NextResponse(
          JSON.stringify({ success: false, error: 'Invalid content type' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
      
      const contentLength = request.headers.get('content-length');
      if (contentLength && parseInt(contentLength) > 10240) {
        return new NextResponse(
          JSON.stringify({ success: false, error: 'Request too large' }),
          { status: 413, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};