import { createClient } from '@supabase/supabase-js'

const PLACEHOLDER_URL = 'https://placeholder.supabase.co'

function safeUrl(value: unknown): string {
  if (typeof value !== 'string') return PLACEHOLDER_URL
  const trimmed = value.trim()
  try {
    const { protocol } = new URL(trimmed)
    return protocol === 'http:' || protocol === 'https:' ? trimmed : PLACEHOLDER_URL
  } catch {
    return PLACEHOLDER_URL
  }
}

const url  = safeUrl(import.meta.env.VITE_SUPABASE_URL)
const anon = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || 'placeholder-anon-key'

export const supabase = createClient(url, anon)
