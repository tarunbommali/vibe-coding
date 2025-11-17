import React from 'react'

const TextStack = ({ items = [] }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-900">Resources & Templates</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-600">
        {items.map((it) => (
          <li key={it.name} className="rounded-2xl bg-slate-50/70 p-4">
            <a href={it.url} target="_blank" rel="noreferrer" className="text-sky-600 hover:underline font-medium">
              {it.name}
            </a>
            <p className="text-slate-600">{it.description}</p>
            <small className="text-xs text-slate-400">{it.type}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TextStack
