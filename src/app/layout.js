export const metadata = {
  title: "Oasi",
  description: "Rede social",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
