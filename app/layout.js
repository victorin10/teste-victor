import './globals.css'

export const metadata = {
  title: 'Feliz Dia das Mulheres',
  description: 'Um presente especial para você',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
