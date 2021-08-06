export default function Home() {
  return (
    <div>
      <h1>
        Gerador de Imagens:
      </h1>

      <div>
        <img style={{ width: '100%' }} src="/api/image-generator?title=Imagem Gerada" />
      </div>

      <a href="/api/image-generator?title=Imagem Gerada">
        /api/image-generator?title=Imagem Gerada
      </a>
    </div>
  )
}