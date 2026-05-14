'use client'

import { useState, useRef, useEffect } from 'react'

const getStarterSuggestions = (page) => {
  if (page?.includes('civic'))   return ["How did you design the AI editor?", "What was your role at Civic?", "What was the outcome?"]
  if (page?.includes('bayer'))   return ["How did you approach the segmentation?", "What tools did you use?", "What were the results?"]
  if (page?.includes('fortuna')) return ["What did you work on at Fortuna?", "How did you do research with lawyers?", "What did you ship?"]
  if (page?.includes('about'))   return ["How did she get into design?", "What is she like to work with?", "What is she looking for next?"]
  return ["What has she built?", "What's her design process?", "Is she open to work?"]
}

function SparkleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2 2l11 11M13 2L2 13" />
    </svg>
  )
}

function Chip({ label, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      className="font-body text-label text-foreground border border-border rounded-pill px-3 py-1.5 bg-transparent hover:bg-border transition-colors text-left leading-snug"
    >
      {label}
    </button>
  )
}

function LoadingDots() {
  return (
    <div className="flex gap-1 items-center px-4 py-3 bg-[#efefef] rounded-[16px] w-fit">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-muted inline-block"
          style={{ animation: 'bounce 1.2s infinite', animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  )
}

function parseResponse(fullText) {
  const lines = fullText.split('\n')
  const lastLine = lines[lines.length - 1].trim()
  if (lastLine.startsWith('SUGGESTIONS:')) {
    try {
      const chips = JSON.parse(lastLine.replace(/^SUGGESTIONS:\s*/, ''))
      const displayText = lines.slice(0, -1).join('\n').trim()
      return { displayText, chips }
    } catch {}
  }
  return { displayText: fullText.trim(), chips: [] }
}

function stripStreamingSuggestions(text) {
  const lines = text.split('\n')
  const last = lines[lines.length - 1].trim()
  if (last.startsWith('SUGGESTIONS:')) {
    return lines.slice(0, -1).join('\n')
  }
  return text
}

export default function AskKhushbu() {
  const [isOpen, setIsOpen]           = useState(false)
  const [messages, setMessages]       = useState([])
  const [input, setInput]             = useState('')
  const [isLoading, setIsLoading]     = useState(false)
  const [streamingText, setStreaming] = useState('')
  const [currentPage, setCurrentPage] = useState('')

  const messagesEndRef = useRef(null)
  const inputRef       = useRef(null)

  useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streamingText, isLoading])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 50)
  }, [isOpen])

  const handleSend = async (text) => {
    const trimmed = typeof text === 'string' ? text.trim() : input.trim()
    if (!trimmed || isLoading) return

    const userMsg    = { role: 'user', content: trimmed }
    const history    = [...messages, userMsg]
    setMessages(history)
    setInput('')
    setIsLoading(true)
    setStreaming('')

    try {
      const res = await fetch('/api/chat', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages:    history.map(({ role, content }) => ({ role, content })),
          currentPage: window.location.pathname,
        }),
      })

      if (!res.ok) throw new Error('API error')

      const reader  = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText  = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        fullText += decoder.decode(value, { stream: true })
        setStreaming(stripStreamingSuggestions(fullText))
      }

      const { displayText, chips } = parseResponse(fullText)
      setMessages((prev) => [...prev, { role: 'assistant', content: displayText, chips }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again.', chips: [] },
      ])
    } finally {
      setIsLoading(false)
      setStreaming('')
    }
  }

  const starters = getStarterSuggestions(currentPage)

  return (
    <>
      {/* ── Chat panel ── */}
      {isOpen && (
        <div className="fixed bottom-[72px] right-6 z-50 w-[380px] bg-background border border-border rounded-card shadow-card flex flex-col overflow-hidden"
          style={{ height: '520px' }}>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-[14px] border-b border-border shrink-0">
            <div className="flex items-center gap-2 text-foreground">
              <SparkleIcon />
              <span className="font-body font-medium text-body text-foreground">Ask Khushbu</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">

            {/* Welcome state */}
            {messages.length === 0 && !isLoading && (
              <div className="flex flex-col gap-3 mt-1">
                <p className="font-body text-label text-muted leading-relaxed">
                  Ask me anything about Khushbu's work, process, or background.
                </p>
                <div className="flex flex-wrap gap-2">
                  {starters.map((q) => (
                    <Chip key={q} label={q} onClick={handleSend} />
                  ))}
                </div>
              </div>
            )}

            {/* Message history */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`font-body text-body leading-relaxed px-4 py-2.5 max-w-[88%] ${
                    msg.role === 'user'
                      ? 'bg-foreground text-background rounded-pill'
                      : 'bg-[#efefef] text-foreground rounded-[16px]'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.chips?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 max-w-full">
                    {msg.chips.map((q) => (
                      <Chip key={q} label={q} onClick={handleSend} />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Streaming / loading */}
            {isLoading && (
              <div className="flex items-start">
                {streamingText ? (
                  <div className="font-body text-body leading-relaxed px-4 py-2.5 max-w-[88%] bg-[#efefef] text-foreground rounded-[16px]">
                    {streamingText}
                  </div>
                ) : (
                  <LoadingDots />
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input row */}
          <div className="border-t border-border px-4 py-3 flex items-center gap-3 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 font-body text-body text-foreground placeholder:text-muted bg-transparent outline-none"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="font-body text-label font-medium text-foreground hover:text-muted transition-colors disabled:opacity-30 shrink-0"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* ── Floating button ── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-foreground text-background font-body text-label font-medium rounded-pill px-4 py-[10px] shadow-card hover:opacity-85 transition-opacity"
      >
        <SparkleIcon />
        Ask Khushbu
      </button>
    </>
  )
}
