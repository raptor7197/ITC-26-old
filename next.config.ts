import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    // NOTE: We intentionally keep unsafe-inline for Next.js runtime inline scripts.
    // Moving to nonce-based CSP is preferred and should be implemented when all inline usage is nonce-aware.
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://apis.google.com https://*.firebaseio.com https://*.googleapis.com https://auth.itctestweekindia.org",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://*.googleusercontent.com https://*.googleapis.com https://*.gstatic.com https://media.licdn.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com https://*.firebaseapp.com https://firestore.googleapis.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://easychair.org https://auth.itctestweekindia.org",
      "frame-src 'self' https://accounts.google.com https://*.firebaseapp.com https://*.firebaseio.com https://auth.itctestweekindia.org",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
