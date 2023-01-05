import { colors, fonts, fontSizes } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export const ColorsGrid: React.FC = () => {
  return (
    <>
      {Object.entries(colors).map(([key, color]) => (
        <div
          key={key}
          style={{ background: color, padding: '2rem', marginTop: '0.5rem' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: fonts.code,
              color:
                getContrast(color, colors.white) < 3.5
                  ? colors.black
                  : colors.white,
              fontSize: fontSizes.lg,
            }}
          >
            <strong>${key}</strong>
            <p>{color}</p>
          </div>
        </div>
      ))}
    </>
  )
}
