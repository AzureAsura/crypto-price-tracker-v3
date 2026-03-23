"use client"
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

export default function MarkdownRenderer({ content }: { content: string }) {
  const result = md.render(content)

  return (
    <div 
      className="prose prose-invert prose-blue max-w-none 
                 prose-headings:tracking-tighter prose-headings:font-bold
                 prose-p:text-gray-400 prose-p:leading-relaxed
                 prose-li:text-gray-400 prose-strong:text-white"
      dangerouslySetInnerHTML={{ __html: result }} 
    />
  )
}