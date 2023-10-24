'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function ThemeContext({children}:{children:React.ReactElement}) {
  return (
    <ThemeProvider attribute='class' enableSystem={true} >
        {children}
    </ThemeProvider>
  )
}
