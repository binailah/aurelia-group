export default function PlaceholderImage({ label, variant = '' }) {
  return (
    <div className={`ph-image ${variant}`} role="img" aria-label={label || 'Image placeholder'}>
      <span>{label || 'Photograph to be supplied'}</span>
    </div>
  )
}
