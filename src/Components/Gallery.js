function Gallery() {
  const images = [
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1018/300/200',
    'https://picsum.photos/id/1020/300/200',
    'https://picsum.photos/id/1024/300/200',
    'https://picsum.photos/id/1025/300/200'
  ];

  return (
    <div style={{
      padding: '40px',
      background: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Gallery</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {images.map((src, index) => (
          <div key={index} style={{
            background: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <img src={src} alt={`Gallery ${index + 1}`} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
