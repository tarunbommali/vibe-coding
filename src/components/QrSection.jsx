import React, { useRef } from 'react'
import QRCode from 'react-qr-code'
import { qrList } from '../data/constants'


export default function QrSection({ items = qrList }) {
  // refs map so we can download specific QR SVGs
  const refs = useRef({})

  function downloadSVG(id, filename) {
    const node = refs.current[id]
    if (!node) return

    const svg = node.querySelector('svg')
    if (!svg) return

    const serializer = new XMLSerializer()
    const source = serializer.serializeToString(svg)

    // add xmlns if missing
    const svgBlob = new Blob([
      source.includes('xmlns') ? source : source.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
    ], { type: 'image/svg+xml;charset=utf-8' })

    const url = URL.createObjectURL(svgBlob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename || `${id}.svg`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Direct Links</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map(item => (
          <article
            key={item.id || item.url}
            className="flex flex-col items-center gap-4 p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            ref={el => (refs.current[item.id] = el)}
          >
            <div className="w-full flex flex-col items-center">
              <div className="mb-3 text-center">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                {/* QRCode renders an SVG which is scannable by phone camera apps */}
                <div className="inline-block" aria-hidden>
                  <QRCode value={item.url} size={160} />
                </div>
              </div>

              <div className="mt-3 flex gap-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-lg border text-sm hover:bg-gray-100 transition"
                >
                  Open link
                </a>

                <button
                  onClick={() => downloadSVG(item.id, `${(item.title || 'qr').replace(/\s+/g, '_')}.svg`)}
                  className="px-3 py-1 rounded-lg border text-sm hover:bg-gray-100 transition"
                >
                  Download SVG
                </button>
              </div>
            </div>

          </article>
        ))}
      </div>
 

      {/* small floating WhatsApp button (change phone prop to your number) */}
      <a
        href={`https://wa.me/919999999999`}
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        aria-label="WhatsApp"
        style={{ background: '#25D366' }}
      >
        {/* simple phone/WA icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 6.80558 16.9706 3 12 3C7.02944 3 3 6.80558 3 11.5C3 14.0786 4.36094 16.3345 6.65685 17.7373L6 21L9.47736 20.3227C10.8668 20.7139 12.4053 20.9205 14 20.9205C18.9706 20.9205 23 17.1149 23 12.4204C23 11.7669 22.9469 11.1271 22.8442 10.5065C22.3376 10.6577 21.8193 10.7427 21.2857 10.7427C21.1907 10.7427 21.0966 10.7409 21 10.7376V11.5Z" fill="white"/>
        </svg>
      </a>
    </div>
  )
}
